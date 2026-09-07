// MINGGU 1 — Setup Project & Struktur HTML/CSS/JS
const app = document.getElementById("app");

// MINGGU 2 — Seleksi & Manipulasi DOM
function buatSection(judulTeks, idSection) {
  const section = document.createElement("section");
  section.id = idSection;
  section.className = "dashboard-section";

  const judul = document.createElement("h2");
  judul.textContent = judulTeks;
  section.appendChild(judul);

  app.appendChild(section);
  return section;
}

// Variabel kerangka dasar ini akan dipakai oleh tugas.js, catatan.js, dan api.js
const sectionTugas = buatSection("Tugas", "section-tugas");
const sectionCatatan = buatSection("Catatan", "section-catatan");
const sectionCuaca = buatSection("Cuaca", "section-cuaca");

// MINGGU 9 — Validasi Input Global
function validasiInput(nilai, maksKarakter = 100) {
  if (nilai.trim() === "") {
    alert("Input tidak boleh kosong!");
    return false;
  }

  if (nilai.length > maksKarakter) {
    alert(`Input maksimal ${maksKarakter} karakter!`);
    return false;
  }

  return true;
}

// MINGGU 14 — Dark Mode
const headerEl = document.querySelector("header");

const tombolTema = document.createElement("button");
tombolTema.id = "toggle-tema";
tombolTema.textContent = "🌙 Dark Mode";

headerEl.appendChild(tombolTema);

tombolTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const modeAktif = document.body.classList.contains("dark-mode");
  localStorage.setItem("dailyboard_tema", modeAktif ? "gelap" : "terang");
  tombolTema.textContent = modeAktif ? "☀️ Light Mode" : "🌙 Dark Mode";
});

if (localStorage.getItem("dailyboard_tema") === "gelap") {
  document.body.classList.add("dark-mode");
  tombolTema.textContent = "☀️ Light Mode";
}