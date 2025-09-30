// ----------------------------------------------------
// 1. DATA: Lägg till dina växter här!
// ----------------------------------------------------
// OBS: Jag har döpt om arrayen till ALL_PLANT_CARDS för att skilja den från den dynamiska högen
const ALL_PLANT_CARDS = [
    {
        swedishName: "tysklönn",
        latinName: "Acer pseudoplatanus",
        image: "images/acer.jpg"
    },
    {
        swedishName: "gudaträd",
        latinName: "Ailanthus altissima",
        image: "images/XX.jpg"
    },
    {
        swedishName: "oxbär",
        latinName: "Cotoneaster sp.",
        image: "images/piceaabies.jpg"
    },
    {
        swedishName: "jätteloka",
        latinName: "Heracleum mantegazzianum",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "vattenpest",
        latinName: "Elodea canadensis",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "jättebalsamin",
        latinName: "Impatiens glandulifera",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "blomsterlupin",
        latinName: "Lupinus polyphyllus",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "gul skunkkalla",
        latinName: "Lysichiton americanus",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "sjögull",
        latinName: "Nymphoides peltatum",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "parkslide",
        latinName: "Reynoutria japonica",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "jätteslide",
        latinName: "Reynoutria sachalinensis",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "robinia",
        latinName: "Robinia pseudoacacia",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "vresros",
        latinName: "Rosa rugosa",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "armeniskt björnbär",
        latinName: "Rubus armeniacus",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "kanadensiskt gullris",
        latinName: "Solidago canadensis",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "höstgullris",
        latinName: "Solidago gigantea",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "klasespirea",
        latinName: "Spiraea × billardii",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "snöbär",
        latinName: "Symphoricarpus albus",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "häckberberis",
        latinName: "Berberis thunbergii",
        image: "images/quercusrobur.jpg"
    },
    {
        swedishName: "hybridslide",
        latinName: "Fallopia × bohemica",
        image: "images/taraxacum.jpg"
    }
];

// ----------------------------------------------------
// 2. LOGIK
// ----------------------------------------------------
let activeCards = [];      // Den kortlek vi aktivt studerar och tar bort kort från
let totalInitialCards = 0; // Totalt antal kort från början (används för framsteg)
let currentCardIndex = 0;
let isFlipped = false;

// Hämta HTML-element
const flashcard = document.getElementById('flashcard');
const cardImage = document.getElementById('card-image');
const swedishNameEl = document.getElementById('swedish-name');
const latinNameEl = document.getElementById('latin-name');

const progressTracker = document.getElementById('progress-tracker'); 
const showAnswerBtn = document.getElementById('show-answer-btn');
const answerControls = document.getElementById('answer-controls');
const failBtn = document.getElementById('fail-btn');
const successBtn = document.getElementById('success-btn');

// Funktion för att uppdatera framstegsräknaren
function updateProgress() {
    const completedCount = totalInitialCards - activeCards.length;
    
    // Visar totala framsteg (exempel: 5/20)
    let progressText = `Färdiga: ${completedCount} / Totalt: ${totalInitialCards}`;
    
    // Visar status i aktuell hög (exempel: Kort 1 av 15 kvar)
    if (activeCards.length > 0) {
        progressText += ` (Kort ${currentCardIndex + 1} av ${activeCards.length} kvar att öva på)`;
    }
    progressTracker.textContent = progressText;
}

// Funktion för att visa ett kort
function displayCard() {
    // Kollar om alla kort är klara
    if (activeCards.length === 0) {
        cardImage.src = "";
        swedishNameEl.textContent = "GRATTIS!";
        latinNameEl.textContent = "Alla kort är klara. Bra jobbat!";
        showAnswerBtn.style.display = 'none';
        answerControls.classList.remove('visible');
        updateProgress();
        return;
    }

    // Nollställ indexet om vi kommit till slutet av den aktiva högen
    if (currentCardIndex >= activeCards.length) {
        currentCardIndex = 0;
    }

    const card = activeCards[currentCardIndex];
    cardImage.src = card.image;
    
    // Döljer namnet på framsidan (sätter en hint)
    swedishNameEl.textContent = "Klicka för svar!";
    latinNameEl.textContent = "";

    // Återställ kortets tillstånd
    flashcard.classList.remove('flipped');
    isFlipped = false;
    showAnswerBtn.style.display = 'block'; // Visa "Visa Namn"
    answerControls.classList.remove('visible'); // Dölj Rätt/Fel-knappar

    updateProgress();
}

// Funktion för att vända kortet
function toggleFlip() {
    if (activeCards.length === 0) return;

    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);
    
    if (isFlipped) {
        // Visa svarstexten och Rätt/Fel-knapparna
        const card = activeCards[currentCardIndex];
        swedishNameEl.textContent = card.swedishName;
        latinNameEl.textContent = card.latinName;

        showAnswerBtn.style.display = 'none';
        answerControls.classList.add('visible');
    } else {
        // Göm svarstexten och Rätt/Fel-knapparna
        showAnswerBtn.style.display = 'block';
        answerControls.classList.remove('visible');
        
        // Återställ baksidans text till "Klicka för svar!"
        swedishNameEl.textContent = "Klicka för svar!";
        latinNameEl.textContent = "";
    }
}

// Hantera Rätt/Klar-knappen: Tar bort kortet från högen
function handleSuccess() {
    // Tar bort kortet från den aktiva högen
    activeCards.splice(currentCardIndex, 1);
    
    // Nollställ indexet om vi är vid slutet av högen
    if (currentCardIndex >= activeCards.length && activeCards.length > 0) {
        currentCardIndex = 0;
    }
    
    displayCard();
}

// Hantera Fel/Öva igen-knappen: Flyttar kortet till slutet av högen
function handleFail() {
    // Tar ut det misslyckade kortet
    const failedCard = activeCards.splice(currentCardIndex, 1)[0];
    
    // Bestämmer insättningspunkten (vi lägger det i slutet)
    const insertIndex = activeCards.length;
    
    // Lägger tillbaka kortet i högen (sist)
    activeCards.splice(insertIndex, 0, failedCard);
    
    // Vi behåller samma currentCardIndex eftersom nästa kort ska visas
    if (currentCardIndex >= activeCards.length) {
        currentCardIndex = 0;
    }
    
    displayCard();
}

// ----------------------------------------------------
// 3. HÄNDELSEHANTERARE (Klick på knappar)
// ----------------------------------------------------

// Vänd kortet när man klickar på "Visa Namn"-knappen (primärt)
showAnswerBtn.addEventListener('click', toggleFlip);

// Vänd kortet när man klickar på kortet (sekundärt, men bara om svaret är dolt)
flashcard.addEventListener('click', () => {
    if (showAnswerBtn.style.display === 'block') {
        toggleFlip();
    }
}); 

// Hantera Rätt/Klar
successBtn.addEventListener('click', handleSuccess);

// Hantera Fel/Öva igen
failBtn.addEventListener('click', handleFail);


// Starta appen
function initializeApp() {
    // 1. Kopiera alla kort till den aktiva högen
    activeCards = [...ALL_PLANT_CARDS];
    totalInitialCards = ALL_PLANT_CARDS.length;
    
    // 2. Blanda korten slumpmässigt
    activeCards.sort(() => Math.random() - 0.5);
    
    // 3. Visa det första kortet
    displayCard();
}

initializeApp();
