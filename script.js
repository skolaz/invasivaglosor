// ----------------------------------------------------
// 1. DATA: Lägg till dina växter här!
// ----------------------------------------------------
const ALL_PLANT_CARDS = [
    {
        swedishName: "tysklönn",
        latinName: "Acer pseudoplatanus",
        imageFolder: "images/acer",
        description: "Höjd: 15–25 m. Blommar i maj. Sprids via vingförsedda frön. Aggressiv invasiv art i vissa områden."
    },
    {
        swedishName: "gudaträd",
        latinName: "Ailanthus altissima",
        imageFolder: "images/ailanthus",
        description: "xx"
    },
    {
        swedishName: "oxbär",
        latinName: "Cotoneaster sp.",
       imageFolder: "images/cotoneaster",
        description: "https://artfakta.se/taxa/1006564/information"
    },
    {
        swedishName: "jätteloka",
        latinName: "Heracleum mantegazzianum",
        imageFolder: "images/heracleum",
        description: "är en mycket stor och vitblommig, flockblommig växt som kan nå en höjd av 5 m, med upp till 10 cm tjock stam, 50 cm breda blomflockar och vasst parflikiga blad som kan bli 3 m långa (Tiley m.fl. 1996, Fröberg 2010a). Jätteloka förväxlas lätt med två andra mycket storväxta lokor med förekomst i Sverige: tromsöloka H. persicum och hörsneloka H. platytaenium. <br></br> Jätteloka trivs bäst på relativt öppen, näringsrik och gärna fuktig mark. I Sverige förekommer den främst i anslutning till tätorter, längs vägar, på ruderatmarker och ohävdade gräsmarker, i parker och trädgårdar, samt på fuktängar och stränder. <br></br> Växtsaften hos jätteloka, liksom hos palsternacka Pastinaca sativa, tromsöloka Heracleum persicum och flera andra flockblommiga växter, innehåller furanokumariner som är fototoxiska: när de kommer i kontakt med huden, och därefter med solens UV-ljus, kan de orsaka svårläkta brännsårslika hudskador (Fröberg 2010c)"
    },
    {
        swedishName: "vattenpest",
        latinName: "Elodea canadensis",
        imageFolder: "images/elodea",
        description: "xx"
    },
    {
        swedishName: "jättebalsamin",
        latinName: "Impatiens glandulifera",
        imageFolder: "images/impatiens",
        description: "xx"
    },
    {
        swedishName: "blomsterlupin",
        latinName: "Lupinus polyphyllus",
        imageFolder: "images/lupinus",
        description: "xx"
    },
    {
        swedishName: "gul skunkkalla",
        latinName: "Lysichiton americanus",
        imageFolder: "images/lysichiton",
        description: "xx"
    },
    {
        swedishName: "sjögull",
        latinName: "Nymphoides peltatum",
        imageFolder: "images/nymphoides",
        description: "xx"
    },
    {
        swedishName: "parkslide",
        latinName: "Reynoutria japonica",
        imageFolder: "images/reynoutriaj",
        description: "xx"
    },
    {
        swedishName: "jätteslide",
        latinName: "Reynoutria sachalinensis",
        imageFolder: "images/reynoutrias",
        description: "xx"
    },
    {
        swedishName: "robinia",
        latinName: "Robinia pseudoacacia",
        imageFolder: "images/robinia",
        description: "xx"
    },
    {
        swedishName: "vresros",
        latinName: "Rosa rugosa",
        imageFolder: "images/rosa",
        description: "xx"
    },
    {
        swedishName: "armeniskt björnbär",
        latinName: "Rubus armeniacus",
        imageFolder: "images/rubus",
        description: "xx"
    },
    {
        swedishName: "kanadensiskt gullris",
        latinName: "Solidago canadensis",
        imageFolder: "images/solidagoc",
        description: "xx"
    },
    {
        swedishName: "höstgullris",
        latinName: "Solidago gigantea",
        imageInBuffer: "images/solidagog",
        description: "xx"
    },
    {
        swedishName: "klasespirea",
        latinName: "Spiraea × billardii",
        imageFolder: "images/spiraea",
        description: "xx"
    },
    {
        swedishName: "snöbär",
        latinName: "Symphoricarpus albus",
        imageFolder: "images/symp",
        description: "xx"
    },
    {
        swedishName: "häckberberis",
        latinName: "Berberis thunbergii",
        imageFolder: "images/berberis",
        description: "Vanligen upp till 1 m hög lövfällande buske med enkla, strödda blad på kala grenar och enkla tornar nedanför bladfästena. Arten sprider sig både klonalt, med trädgårdsavfall och med frön. Frukterna äts av fåglar som därmed kan sprida fröna över större avstånd. Då stora mängder frön kan produceras årligen (upp till 35 000 frukter på en planta; Brand m.fl. 2012), i kombination med en hög grobarhet (ca 90 %), så finns det en stor spridningspotential"
    },
    {
        swedishName: "hybridslide",
        latinName: "Fallopia × bohemica (Reynoutria x bohemica)",
        imageFolder: "images/fallopia",
        description: "Hybridslide är en flerårig, storväxt ört med bambu-liknande stam och som är intermediär i de flesta karaktärer mellan föräldraarterna vanligt parkslide Reynoutria japonica var. japonica och jätteslide R. sachalinensis. Stjälkarna är grova, ihåliga och sträcker sig upp till fyra meters höjd. Stammen är ljusgrön med brunröda fläckar. Stambladen är ganska styva och stora (20–35 cm långa, ofta 1,5 gånger längre än breda) med oftast grunt hjärtformad bas och en utdragen bladspets. Hybridslide skiljer sig från vanligt parkslide genom att ha större blad, vanligen 20–35 cm långa, och tydligt längre än breda, mot 5–15 cm hos parkslide (rosenslide var. compacta har ännu mindre blad som är ca 6 cm långa och lika långa som breda). Bladen har ofta en grunt hjärtformad bas (men kan även vara tvär som hos parkslide)"
    }
];

// ----------------------------------------------------
// 2. LOGIK
// ----------------------------------------------------
let activeCards = [];      
let totalInitialCards = 0; 
let currentCardIndex = 0;
let isFlipped = false;
let currentImageIndex = 1; 

// Hämta HTML-element
const flashcard = document.getElementById('flashcard');
const cardImage = document.getElementById('card-image');
const swedishNameEl = document.getElementById('swedish-name');
const latinNameEl = document.getElementById('latin-name');
const descriptionEl = document.getElementById('description-text'); 

const progressTracker = document.getElementById('progress-tracker'); 
const showAnswerBtn = document.getElementById('show-answer-btn');
const answerControls = document.getElementById('answer-controls');
const failBtn = document.getElementById('fail-btn');
const successBtn = document.getElementById('success-btn');

// Karusell-knappar
const prevImageBtn = document.getElementById('prev-image-btn');
const nextImageBtn = document.getElementById('next-image-btn');

// Funktion för att uppdatera framstegsräknaren
function updateProgress() {
    const completedCount = totalInitialCards - activeCards.length;
    let progressText = `Färdiga: ${completedCount} / Totalt: ${totalInitialCards}`;
    
    if (activeCards.length > 0) {
        progressText += ` (Kort ${currentCardIndex + 1} av ${activeCards.length} kvar att öva på)`;
    }
    progressTracker.textContent = progressText;
}

// Funktion för att ladda en specifik bild i karusellen
function loadImage(index) {
    if (activeCards.length === 0) return;
    const card = activeCards[currentCardIndex];
    const imagePath = `${card.imageFolder}/${index}.jpg`;
    
    const img = new Image();
    img.onload = () => {
        cardImage.src = imagePath;
        currentImageIndex = index;
    };
    img.onerror = () => {
        if (index > currentImageIndex) {
             currentImageIndex = index - 1; 
        } else if (index < currentImageIndex) {
             currentImageIndex = 1; 
        }
    };
    img.src = imagePath;
}

// Funktion för att visa ett kort
function displayCard() {
    if (activeCards.length === 0) {
        cardImage.src = "";
        swedishNameEl.textContent = "GRATTIS!";
        latinNameEl.textContent = "Alla kort är klara. Bra jobbat!";
        descriptionEl.textContent = ""; 
        showAnswerBtn.style.display = 'none';
        answerControls.classList.remove('visible');
        prevImageBtn.style.display = 'none'; 
        nextImageBtn.style.display = 'none';
        updateProgress();
        return;
    }

    if (currentCardIndex >= activeCards.length) {
        currentCardIndex = 0;
    }

    const card = activeCards[currentCardIndex];
    
    currentImageIndex = 1;
    loadImage(currentImageIndex); 

    // Sätter in beskrivning (Visas under kortet)
    descriptionEl.textContent = card.description;

    // Återställ kortets tillstånd
    flashcard.classList.remove('flipped');
    isFlipped = false;
    showAnswerBtn.style.display = 'block'; 
    answerControls.classList.remove('visible'); 
    
    // GÖR TEXTEN PÅ BAKSIDAN TOM NÄR KORTET VISAR BILDEN
    swedishNameEl.textContent = ""; 
    latinNameEl.textContent = "";

    updateProgress();
}

// Funktion för att vända kortet
function toggleFlip() {
    if (activeCards.length === 0) return;

    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);
    
    if (isFlipped) {
        const card = activeCards[currentCardIndex];
        // KORT VÄNDT: Fyll i namn
        swedishNameEl.textContent = card.swedishName;
        latinNameEl.textContent = card.latinName;

        showAnswerBtn.style.display = 'none';
        answerControls.classList.add('visible');
    } else {
        // KORT VÄNDS TILLBAKA TILL BILDEN: Rensa namnet
        swedishNameEl.textContent = ""; 
        latinNameEl.textContent = "";

        showAnswerBtn.style.display = 'block';
        answerControls.classList.remove('visible');
    }
}

// Hantera Rätt/Klar-knappen: Tar bort kortet från högen
function handleSuccess() {
    activeCards.splice(currentCardIndex, 1);
    
    if (currentCardIndex >= activeCards.length && activeCards.length > 0) {
        currentCardIndex = 0;
    }
    
    displayCard();
}

// Hantera Fel/Öva igen-knappen: Flyttar kortet till slutet av högen
function handleFail() {
    const failedCard = activeCards.splice(currentCardIndex, 1)[0];
    const insertIndex = activeCards.length;
    
    activeCards.splice(insertIndex, 0, failedCard);
    
    if (currentCardIndex >= activeCards.length) {
        currentCardIndex = 0;
    }
    
    displayCard();
}


// ----------------------------------------------------
// 3. HÄNDELSEHANTERARE (Klick på knappar och karusell)
// ----------------------------------------------------

showAnswerBtn.addEventListener('click', toggleFlip);

// Hanterar nästa bild i karusellen
nextImageBtn.addEventListener('click', () => {
    loadImage(currentImageIndex + 1);
}); 

// Hanterar föregående bild i karusellen
prevImageBtn.addEventListener('click', () => {
    if (currentImageIndex > 1) {
        loadImage(currentImageIndex - 1);
    }
});

successBtn.addEventListener('click', handleSuccess);
failBtn.addEventListener('click', handleFail);


// Starta appen
function initializeApp() {
    activeCards = [...ALL_PLANT_CARDS];
    totalInitialCards = ALL_PLANT_CARDS.length;
    
    activeCards.sort(() => Math.random() - 0.5);
    
    displayCard();
}

initializeApp();
