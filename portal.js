// =========================================================
// PORTAL
//
// Sign-in (no sign-up — accounts are created manually in the
// Supabase dashboard, see supabase-schema.sql), a forum any
// signed-in user can read/post to, and a customer-messages
// inbox visible only to profiles with role = 'admin'.
//
// Access here is enforced by Supabase's Row Level Security
// policies (in supabase-schema.sql), not by this file — even
// if someone edited this JS in devtools, the database itself
// refuses to hand back rows they're not allowed to see.
// =========================================================

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./supabase-config.js";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const loginView = document.getElementById("loginView");
const loginForm = document.getElementById("loginForm");
const loginNote = document.getElementById("loginNote");

const appView = document.getElementById("appView");
const welcomeText = document.getElementById("welcomeText");
const signOutBtn = document.getElementById("signOutBtn");

const forumForm = document.getElementById("forumForm");
const forumContent = document.getElementById("forumContent");
const forumList = document.getElementById("forumList");

const messagesBlock = document.getElementById("messagesBlock");
const messagesList = document.getElementById("messagesList");


// =========================================================
// INIT — resume an existing session if there is one
// =========================================================

async function init() {

  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    await enterApp(session.user);
  }
}

init();


// =========================================================
// LOGIN
// =========================================================

loginForm.addEventListener("submit", async (event) => {

  event.preventDefault();

  const email =
    document.getElementById("loginEmail").value.trim();

  const password =
    document.getElementById("loginPassword").value;

  const submitBtn =
    loginForm.querySelector("button[type=submit]");

  submitBtn.disabled = true;

  hideNote(loginNote);

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password
    });

  submitBtn.disabled = false;

  if (error) {

    showNote(
      loginNote,
      "Giriş başarısız. E-posta veya şifre hatalı.",
      true
    );

    return;
  }

  await enterApp(data.user);
});


// =========================================================
// ENTER APP — load profile, decide what to show
// =========================================================

async function enterApp(user) {

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .single();

  if (error || !profile) {

    // Signed in via Supabase Auth, but nobody has created a
    // matching row in `profiles` for them yet — see the
    // bottom of supabase-schema.sql for how to fix that.

    showNote(
      loginNote,
      "Hesabınız henüz yapılandırılmamış. Yönetici ile iletişime geçin.",
      true
    );

    await supabase.auth.signOut();

    return;
  }

  loginView.classList.add("hidden");
  appView.classList.remove("hidden");

  welcomeText.textContent =
    `Hoş geldin, ${profile.full_name}`;

  if (profile.role === "admin") {
  messagesBlock.classList.remove("hidden");

  loadMessages();
}

  loadForum();
}


// =========================================================
// SIGN OUT
// =========================================================

signOutBtn.addEventListener("click", async () => {

  await supabase.auth.signOut();

  location.reload();
});


// =========================================================
// FORUM
// =========================================================

forumForm.addEventListener("submit", async (event) => {

  event.preventDefault();

  const { data: { user } } = await supabase.auth.getUser();

  const submitBtn =
    forumForm.querySelector("button[type=submit]");

  submitBtn.disabled = true;

  const { error } = await supabase
    .from("forum_posts")
    .insert({
      author_id: user.id,
      content: forumContent.value.trim()
    });

  submitBtn.disabled = false;

  if (!error) {

    forumContent.value = "";

    loadForum();
  }
});

async function loadForum() {

  const { data: posts, error } = await supabase
    .from("forum_posts")
    .select(
      "id, content, created_at, profiles ( full_name )"
    )
    .order("created_at", { ascending: false });

  if (error) {

    forumList.innerHTML =
      '<p class="portal-empty">Gönderiler yüklenemedi.</p>';

    return;
  }

  if (!posts.length) {

    forumList.innerHTML =
      '<p class="portal-empty">Henüz gönderi yok. İlk mesajı sen yaz!</p>';

    return;
  }

  forumList.innerHTML = posts
    .map((post) => `
      <div class="portal-post">
        <p class="portal-post-meta">
          <strong>${escapeHtml(post.profiles?.full_name || "Bilinmeyen")}</strong>
          · ${formatDate(post.created_at)}
        </p>
        <p class="portal-post-content">${escapeHtml(post.content)}</p>
      </div>
    `)
    .join("");
}


// =========================================================
// CUSTOMER MESSAGES (admin only — RLS blocks this query
// entirely for non-admins, this is just the display layer)
// =========================================================

async function loadMessages() {

  const { data: messages, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {

    messagesList.innerHTML =
      '<p class="portal-empty">Mesajlar yüklenemedi.</p>';

    return;
  }

  if (!messages.length) {

    messagesList.innerHTML =
      '<p class="portal-empty">Henüz mesaj yok.</p>';

    return;
  }

  messagesList.innerHTML = messages
    .map((msg) => `
      <div class="portal-message">
        <p class="portal-message-meta">
          <strong>${escapeHtml(msg.first_name)} ${escapeHtml(msg.last_name)}</strong>
          ${msg.email ? ` · ${escapeHtml(msg.email)}` : ""}
          ${msg.company ? ` · ${escapeHtml(msg.company)}` : ""}
          · ${formatDate(msg.created_at)}
        </p>
        <p class="portal-message-content">${escapeHtml(msg.message)}</p>
      </div>
    `)
    .join("");
}


// =========================================================
// HELPERS
// =========================================================

function showNote(el, text, isError) {

  el.textContent = text;

  el.classList.remove("hidden");

  el.classList.toggle("error", Boolean(isError));
}

function hideNote(el) {

  el.classList.add("hidden");
}

function formatDate(isoString) {

  return new Date(isoString).toLocaleString("tr-TR", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function escapeHtml(str) {

  const div = document.createElement("div");

  div.textContent = str ?? "";

  return div.innerHTML;
}