const app = document.getElementById('app');

// PAGE ACCUEIL : toutes les cartes pays
function showHome() {
  app.innerHTML = `
    <h2 class="text-2xl font-bold mb-6 fade-in text-white drop-shadow-lg">Les pays de l'Afrique de l'Ouest</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 fade-in">
      ${window.countries.map((c, i) => `
        <div class="bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group" onclick="window.showCountry(${i})">
          <img src="${c.photo}" alt="Photo ${c.name}" class="w-full h-40 object-cover group-hover:brightness-110 transition">
          <div class="flex items-center gap-2 p-4">
            <img src="${c.flag}" class="w-8 h-6 rounded shadow">
            <span class="font-bold text-lg text-blue-900 dark:text-blue-200">${c.name}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// PAGE GRILLE CRÉATIVE : nom + image capitale
function showCountriesCapitals() {
  app.innerHTML = `
    <h2 class="text-2xl font-bold mb-6 fade-in text-blue-900 dark:text-blue-200">Capitale de chaque pays</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 fade-in">
      ${window.countries.map((c, i) => `
        <div class="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-orange-100 via-blue-100 to-green-100 dark:from-gray-800 dark:via-blue-900 dark:to-green-900 group hover:scale-105 transition-all duration-300 cursor-pointer"
          onclick="window.showCountry(${i})">
          <img src="${c.capitalPhoto}" alt="Photo de ${c.capital}" class="w-full h-36 object-cover opacity-90 group-hover:opacity-100 transition">
          <div class="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-2 px-3 flex flex-col items-center">
            <span class="font-bold text-lg tracking-wide">${c.name}</span>
            <span class="italic text-sm">Capitale : ${c.capital}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="flex justify-center mt-8">
      <button onclick="window.showHome()" class="bg-blue-900 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded shadow transition-all duration-300">Retour à l'accueil</button>
    </div>
  `;
}

// FICHE DÉTAILLÉE D'UN PAYS
function showCountry(idx) {
  const c = window.countries[idx];
  // Change le fond du site pour l'image du monument
  document.getElementById('bg-img').style.backgroundImage = `url('${c.monumentPhoto || c.photo}')`;

  app.innerHTML = `
    <button onclick="window.resetBg();window.showHome()" class="mb-4 text-blue-500 hover:underline"><i class="fas fa-arrow-left"></i> Retour</button>
    <div class="fade-in">
      <h2 class="country-title-anim text-4xl md:text-5xl font-extrabold text-center mb-8 text-white drop-shadow-lg">${c.name}</h2>
      <div class="flex flex-col md:flex-row gap-8 items-start">
        <div class="w-full md:w-1/2 flex flex-col items-center">
          <img src="${c.flag}" alt="Drapeau ${c.name}" class="w-20 h-14 mb-4 rounded shadow-lg">
          <img src="${c.photo}" alt="Photo ${c.name}" class="w-full max-w-md h-56 object-cover rounded shadow-lg mb-4">
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <section class="bg-white/80 dark:bg-gray-900/80 rounded p-4 shadow">
            <h3 class="text-xl font-bold mb-2 text-blue-900 dark:text-blue-200">Capitale</h3>
            <p>${c.capital}</p>
          </section>
          <section class="bg-white/80 dark:bg-gray-900/80 rounded p-4 shadow">
            <h3 class="text-xl font-bold mb-2 text-blue-900 dark:text-blue-200">Population & Langues</h3>
            <p><b>Population :</b> ${c.population}</p>
            <p><b>Langues :</b> ${c.languages.join(', ')}</p>
          </section>
          <section class="bg-white/80 dark:bg-gray-900/80 rounded p-4 shadow">
            <h3 class="text-xl font-bold mb-2 text-blue-900 dark:text-blue-200">Monuments</h3>
            <p>${c.monuments.join(', ')}</p>
          </section>
          <section class="bg-white/80 dark:bg-gray-900/80 rounded p-4 shadow">
            <h3 class="text-xl font-bold mb-2 text-blue-900 dark:text-blue-200">Culture & Traditions</h3>
            <p>${c.culture}</p>
          </section>
          <section class="bg-white/80 dark:bg-gray-900/80 rounded p-4 shadow">
            <h3 class="text-xl font-bold mb-2 text-blue-900 dark:text-blue-200">Gastronomie</h3>
            <p>${c.gastronomy}</p>
          </section>
          <section class="bg-white/80 dark:bg-gray-900/80 rounded p-4 shadow">
            <h3 class="text-xl font-bold mb-2 text-blue-900 dark:text-blue-200">Musique & Loisirs</h3>
            <p>${c.music}</p>
          </section>
          <section class="bg-white/80 dark:bg-gray-900/80 rounded p-4 shadow">
            <h3 class="text-xl font-bold mb-2 text-blue-900 dark:text-blue-200">Économie</h3>
            <p>${c.economy}</p>
          </section>
          <section class="bg-white/80 dark:bg-gray-900/80 rounded p-4 shadow">
            <h3 class="text-xl font-bold mb-2 text-blue-900 dark:text-blue-200">Politique</h3>
            <p>${c.politics}</p>
          </section>
          <section class="bg-white/80 dark:bg-gray-900/80 rounded p-4 shadow">
            <h3 class="text-xl font-bold mb-2 text-orange-600">Fun fact</h3>
            <p>${c.funfact}</p>
          </section>
        </div>
      </div>
    </div>
  `;
}

// MINI QUIZ
function showQuiz() {
  const questions = [
    {
      q: "Quelle est la capitale du Ghana ?",
      options: ["Accra", "Lomé", "Abuja", "Bamako"],
      answer: 0
    },
    {
      q: "Quel pays est célèbre pour le thiéboudienne ?",
      options: ["Sénégal", "Bénin", "Guinée", "Côte d'Ivoire"],
      answer: 0
    }
  ];
  let score = 0, current = 0;
  function render() {
    if (current >= questions.length) {
      app.innerHTML = `<div class="fade-in text-center">
        <h2 class="text-2xl font-bold mb-4">Score : ${score} / ${questions.length}</h2>
        <button onclick="window.showQuiz()" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">Rejouer</button>
        <button onclick="window.showHome()" class="ml-4 text-blue-500 underline">Retour</button>
      </div>`;
      return;
    }
    const q = questions[current];
    app.innerHTML = `<div class="fade-in">
      <h2 class="text-xl font-bold mb-4">${q.q}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${q.options.map((opt, i) => `
          <button class="bg-sand-50 dark:bg-gray-700 px-4 py-2 rounded shadow hover:bg-orange-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
            onclick="window.quizAnswer(${i})">${opt}</button>
        `).join('')}
      </div>
      <div class="mt-6 text-gray-500">Question ${current + 1} / ${questions.length}</div>
    </div>`;
    window.quizAnswer = (i) => {
      if (i === q.answer) score++;
      current++;
      render();
    }
  }
  render();
}

// Gestion du thème clair/sombre
const themeBtn = document.getElementById('toggle-theme');
themeBtn.onclick = () => {
  document.documentElement.classList.toggle('dark');
  themeBtn.innerHTML = document.documentElement.classList.contains('dark')
    ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};

// Affichage initial
showHome();
window.showHome = showHome;
window.showCountry = showCountry;
window.showQuiz = showQuiz;
window.showCountriesCapitals = showCountriesCapitals;
document.getElementById('btn-countries').onclick = () => showCountriesCapitals();
document.getElementById('btn-quiz').onclick = () => showQuiz();

// Image de fond
document.getElementById('bg-img').style.backgroundImage =
  "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80')";

window.resetBg = function() {
  document.getElementById('bg-img').style.backgroundImage =
    "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80')";
};