// ----------------------------------------------------
// 1. DATA: Lägg till dina växter här!
// ----------------------------------------------------
const ALL_PLANT_CARDS = [
    {
        swedishName: "tysklönn",
        latinName: "Acer pseudoplatanus",
        imageFolder: "images/acer",
        description: "Tysklönn är ett europeiskt trädslag som introducerades till Sverige runt 1770, men är inte känd från svensk natur förrän runt mitten av 1800-talet. Arten odlas i stor utsträckning i trädgårdar, parker och urbana miljöer. På senare tid även i skogsplanteringar. Med ett varmare klimat bör arten kunna sprida sig norrut längs norrlandskusten men den verkar redan nu vara härdig långt norrut. Tysklönn utgör redan idag ett stort inslag i framför allt Skånes bördiga skogsområden. Där har arten i stor utsträckning ersatt alm efter almsjukan sägs konkurrera med andra trädslag även om inga studier har dock visat det. Arten är känslig för tätare trädskikt av mer högvuxna trädarter som ask och bok och kan hållas tillbaka eller helt försvinna i äldre skogsbestånd."
    },
    {
        swedishName: "gudaträd",
        latinName: "Ailanthus altissima",
        imageFolder: "images/ailanthus",
        description: "<b>EU listad invasiv växt, sedan 2019.</b>Är vanligen ett ganska litet, 6–10 meter högt träd men som kan nå 30 meter (CABI 2019). Kan vara mycket snabbväxande med en höjdtillväxt på upp till två meter per år under de första fyra åren (Wikipedia 2019). Bladen är sammansatta och stora (upp till 90 cm långa hos stubbskott) med 5 till 20 par småblad (Mitchell & Wilkinson 1983). <br></br> Arten växer normalt i friska, näringsrika och kalkrika miljöer men har visat sig ha en god förmåga att även tolerera och trivas i periodvis torra miljöer som medelhavsklimat. Trädet är också mycket tolerant mot luftföroreningar (planteras idag i Schweiz som stadsträd). <br></br> Gudaträdet förökar sig med hjälp av både rotskott och frön. Rotskotten kan dyka upp 20–30 m från moderträdet. Mycket svår att bli av med, då den har en enorm förmåga att skjuta nya skott från avkapade stubbar eller efter brand, och kan närmast beskrivas som trädens motsvarighet till parkslide."
    },
    {
        swedishName: "oxbär",
        latinName: "Cotoneaster sp.",
       imageFolder: "images/cotoneaster",
        description: "https://artfakta.se/taxa/1006564/information. <br></br>. I föreläsning 2 så används spärroxbär som exempel som underart. På artfakta finns 31 nämnda främmande arter i Sverige inom cotoeaster släktet. Och 34 under risklistan. Däremot har vi en art som är sårbar, Skånskt oxbär, Cotoneaster kullensis, som är med på rödlistan. <br></br>. Spärroxbär är stort problem på alvmarker, torrängar, hällmarker och tränger undan  värdväxter."
    },
    {
        swedishName: "jätteloka",
        latinName: "Heracleum mantegazzianum",
        imageFolder: "images/heracleum",
        description: "<b>EU listad invasiv växt, 2017.</b> Jätteloka är en mycket stor och vitblommig, flockblommig växt som <b>kan nå en höjd av 5 m</b>, med upp till 10 cm tjock stam, 50 cm breda blomflockar och vasst parflikiga blad som kan bli 3 m långa (Tiley m.fl. 1996, Fröberg 2010a). Jätteloka förväxlas lätt med två andra mycket storväxta lokor med förekomst i Sverige: tromsöloka H. persicum och hörsneloka H. platytaenium. <br></br> Jätteloka trivs bäst på relativt öppen, näringsrik och gärna fuktig mark. I Sverige förekommer den främst i anslutning till tätorter, längs vägar, på ruderatmarker och ohävdade gräsmarker, i parker och trädgårdar, samt på fuktängar och stränder. <br></br> Växtsaften hos jätteloka, liksom hos palsternacka Pastinaca sativa, tromsöloka Heracleum persicum och flera andra flockblommiga växter, innehåller furanokumariner som är fototoxiska: när de kommer i kontakt med huden, och därefter med solens UV-ljus, kan de orsaka svårläkta brännsårslika hudskador (Fröberg 2010c) <br></br> <b>2-4m hög. 10 000 - 100 000 frön/planta. bekämpas med uppgrävning av pålrötter. förväxlas med inhemsk björnloka, kvanne och strätta</b>"
    },
    {
        swedishName: "vattenpest",
        latinName: "Elodea canadensis",
        imageFolder: "images/elodea",
        description: "Vattenpest är en flerårig men kortlivad vattenväxt som härstammar från tempererade delar av Nordamerika. Den växer helt nedsänkt under vattnet och kan både växa fritt flytande och rotfast. Den kan växa ner till ett par meters djup. Den bildar långa slingor med tätt sittande, smala någon cm långa blad. Växten är dioik (har skilda han- och honplantor). Arten har även asexuell reproduktion. Vattenpest kom till Europa under 1830-tal. Första noteringen om vattenpest i Sverige är från Skara 1873. Numera vanligt förekommande i sjöar och vattendrag från Skåne till Dalarna, mer sällsynt längre norrut. Vattenpest bildar täta mattor och konkurrerar ut mycket annan vattenvegetation, inklusive sällsyntare inhemska arter. Den täta vegetationen kan även ha effekt på förekomst av fisk och andra vattenlevande djur."
    },
    {
        swedishName: "jättebalsamin",
        latinName: "Impatiens glandulifera",
        imageFolder: "images/impatiens",
        description: "<b>EU listad invasiv växt, 2017.</b> Jättebalsamin är en upp till 3 m hög, ettårig ört. Växten är kal med 5–18 cm långa, lansettlika, två motsatta eller tre kransställda, blad med utdragen bladspets (Beerling & Perrins 1993). <br></br> Arten kan knappast förväxlas med någon annan svensk art när den blommar – de två övriga relativt vanliga svenska balsaminerna, springkorn Impatiens noli-tangere och blekbalsamin I. parviflora, är betydligt mer småväxta och har mörkgula respektive ljusgula blommor. <br></br> Jättebalsamin kan bilda utbredda och täta bestånd på fuktig, näringsrik mark längs vattendrag, sjöar, dammar och i diken samt på ruderatmarker kring bebyggelse. Den kan även förekomma på hyggen, i fuktig skog, främst alsumpskog, samt någon gång i kärr. Områden längs vattendrag som översvämmas regelbundet har visat sig ha dubbelt så mycket jättebalsamin som icke översvämmade områden, sannolikt som en följd av effektiv fröspridning med vatten, höga näringshalter och återkommande störning som skapar vegetationsluckor vilka gynnar fröetableringen i de periodvis översvämmade delarna (Cuda m.fl. 2017) <br></br> <b> 300-800 frön per planta, frön kan flyga 5-7m iväg. Blir 1-1,5m hög. Bekämpa med slåtter eller uppdragning. Slåtter utförs 4ggr/år på tillväxtpunkten med 4 veckors mellanrum. Kan förväxlas med blekbalsamin. Kort växtperiod (3 månader)</b>.
    },
    {
        swedishName: "blomsterlupin",
        latinName: "Lupinus polyphyllus",
        imageFolder: "images/lupinus",
        description: "är en flerårig ört som tillhör familjen ärtväxter. Blomsterlupin är en relativt stor och spektakulär art. Den har en tilltryckt hårig stjälk som står upprätt och kan bli över en meter hög. Blomsterlupinen växer i stora mängder längs med vägar och banvallar vilka fungerar som spridningskorridorer i landskapet. <br></br> Varje individ kan producera flera hundra frön som dessutom är långlivade. Arten lever i symbios med kvävefixerande bakterier vilket ökar dess konkurrenskraft men också förändrar markkemin där den fäller sin förna. <br></br> <b> Perenn, sprider sig med frön och rotdelar. Bekämpas med slåtter eller uppgräving. Binder kväve till jorden och missgynnar inhemska ängsväxter.</b>"
    },
    {
        swedishName: "gul skunkkalla",
        latinName: "Lysichiton americanus",
        imageFolder: "images/lysichiton",
        description: "<b>EU listad invasiv växt, 2016.</b> Skunkkalla är en långlivad perenn ört som blommar i maj med talrika små gulgröna blommor samlade i en avlång blomkolv som omges av ett klargult, 3–4 dm långt, hölsterblad. Blommorna luktar sötaktigt och lite kvalmigt (Anderberg & Anderberg 2003). Frukterna är små gröna bär, med två frön per bär, som är mogna i juli–augusti. Bladen, som vid blomningen håller på att utvecklas, har en kort stjälk, är tunglika, glansiga samt läderartade och blir upp till 1,5 m långa. Bladen sitter samlade i stora rosetter som kan bilda täta bestånd. <br></br> Arten kan förväxlas med vit skunkkalla L. camtschatcensis som härstammar från nordöstra Asien. Skunkkalla växer i näringsrika sumpskogar (klibbalkärr), dammar, på stränder längs vattendrag och diken samt i kärr (BSBI 2016, CABI 2016). I sitt ursprungsområde växer den i liknande, fuktiga–blöta miljöer, och har ett brett toleransspektrum vad gäller jordmån och ljusförhållanden, från tät skugga till solexponerade miljöer (Klingenstein & Alberternst 2010). Arten sprider sig både vegetativt, genom långsam tillväxt av jordstammen eller med avbrutna stamdelar, och med talrika frön (omkring 1 000 per blomställning).<br></br> <b> Kraftig bladskärm. Bekämpas med uppgrävning av hela jordplatan och jordstammar. Blad blir upp till 1m. Sprids med frö och jordstamdelar.</b>"
    },
    {
        swedishName: "sjögull",
        latinName: "Nymphoides peltatum (peltata)",
        imageFolder: "images/nymphoides",
        description: "Sjögull är en flerårig vattenväxt som tillhör familjen vattenklöverväxter (Menyanthaceae). Flytbladen liknar små näckrosblad och den har attraktiva gula blommor som sitter en och en på skaft som sticker upp någon decimeter ovan vattenytan. <br></br> Sjögull kan växa på upp till 3 meters djup. Sjögull bildar täta mattor på vattenytan som inte släpper igenom något ljus. Arten konkurrerar ut all annan vegetation. Den täta vegetationen orsakar syrebrist på botten och påverkar även djurlivet. Sjögull introducerades i Sverige under 1870-tal. Arten planteras dels för prydnad i trädgårdsdammar och i vattendrag vid strandtomter. Arten har även planterats med syftet att den täta vegetationen skulle ge skydd åt fiskyngel och därmed ge bättre fiskproduktion. "
    },
    {
        swedishName: "parkslide",
        latinName: "Reynoutria japonica",
        imageFolder: "images/reynoutriaj",
        description: "<b>EU listad invasiv växt, sedan 2025.</b>Parkslide Reynoutria japonica är en flerårig, storväxt, bambu-liknande ört. Den har ett grönt bladverk hela sommaren. Parkslide blommar sent på säsongen, i september–oktober. Arten är skildkönad och endast honindivider är kända från Sverige. Parkslide kan delas in i två varieteter: vanligt parkslide var. japonica och rosenslide var. compacta. Vanligt parkslide var. japonica är den varietet som är storvuxen och problematisk. Vanligt parkslide var. japonica har blad som är cirka 1 decimeter med utdragen spets och tvär bas. <br></br> I Sverige förekommer parkslide i ängsmark, skogsbryn och på kulturpåverkad mark. I en studie från Norge har man funnit att parkslide främst finns i ruderatmarker eller livsmiljöer som är störda av människan, såsom vägbankar och diken, ödetomter, skogsmarker och runt bostäder. Parkslide har ofta tagit sig dit som rymlingar från trädgårdar eller som rotskott som följt med jordtransporter.<br></br> <b> Bekämpas kemiskt, schakta bort, täckning. Påverkar fåglar, groddjur, insekter och fiskar. Ändrar jordstruktur och använder själv kemisk krigsföring mot andra växter. Extremt svårbekämpad vid strand och vatten lägen där den är etablerad. Prickig röd stam.</b>"
    },
    {
        swedishName: "jätteslide",
        latinName: "Reynoutria sachalinensis",
        imageFolder: "images/reynoutrias",
        description: "<b>EU listad invasiv växt, sedan 2025.</b> Jätteslide är en flerårig, storväxt ört med bambu-liknande stam som är grov, ihålig och sträcker sig upp till fyra meters höjd. Stammen är ljusgrön eller rödtonad. Stambladen är ganska tunna och stora (20-40 cm långa, ofta 1,5 gånger längre än breda) trubbigt tillspetsade med en markant hjärtformad bas. På bladundersidans nerver finns hår som är upp till 1 mm långa (med upp till 14 celler), böjliga och jämnsmala. Blomningen sker sent på säsongen, i oktober-november, med grönvita blommor. Arten har antingen tvåkönade eller honindivid. <br></br> Klarar av att växa i många olika jordmåner men föredrar frisk till fuktig mark. Förekommer i Sverige främst i ansluning till trädgårdar och infrastukturmiljöer, men förkommer även på sötvattensstränder och i skogsbryn. Jätteslide sprider sig främst vegetativt, klonalt genom expansion av befintliga bestånd eller genom etablering av lösa växtdelar i jordmassor eller rinnande vatten. <br></br> <b> Rätt lik skador och bekämpning av parkslide: bekämpas kemiskt, schakta bort, täckning. Påverkar fåglar, groddjur, insekter och fiskar. Bladen är blir upp mot 40 centimeter stora. ljusgrön stam</b>"
    },
    {
        swedishName: "robinia",
        latinName: "Robinia pseudoacacia",
        imageFolder: "images/robinia",
        description: "Populationen är ännu 2024 inte speciellt stor men kan potentiellt, med tanke på klimatförändringar, bli ett problem. Robinia är spridningsbenägen, konkurrenskraftig och orsakar långsiktiga ekologiska effekter. Robinia är ett långlivat träd inom familjen ärtväxter som härstammar från östra Nordamerika. Robinia fördes till Europa på tidigt 1600-tal som prydnadsväxt. Första svenska rapporten om ett förvildat exemplar kom 1921 från Blekinge. Robinia bedöms ha en hög invasionspotential. Fröplantor har observerats i allt mer naturliga miljöer. "
    },
    {
        swedishName: "vresros",
        latinName: "Rosa rugosa",
        imageFolder: "images/rosa",
        description: "Vresros är en rikt grenig och tätt taggig ros med stora (upp till 9 cm breda) vita till mörkt rosa blommor samt stora (2-3 cm breda), från ändarna plattade nypon. Bladen är tjocka och rynkiga, på ovansidan blankt mörkgröna och kala, på undersidan tätt håriga. Foderbladen är hela och kala. Taggarna är oliklånga och raka med luddhårig bas. Den kan bli drygt två meter hög. <br></br> Arten producerar frukter, nypon, som sprids med fåglar och längs vattendrag. Den reproducerar sig även vegetativt med rhizom och rotfragment. Frukterna sprids lätt med vatten då de tål både söt- och saltvatten. <br></br> Frukterna från denna art har bättre flytförmåga än många av dess släktingar, detta gör det möjligt för den att sprida sig långa sträckor. Väl rotad bildar den täta bestånd med hjälp av rotskott som också kan bilda nya plantor om de skulle gå av och spridas med, till exempel, vattendrag.<br></br> <b> Bekämpas med slåtter eller uppgrävning. Täta taggar, stora nypon som kan flyta långt, glansiga blad. </b>"
    },
    {
        swedishName: "armeniskt björnbär",
        latinName: "Rubus armeniacus",
        imageFolder: "images/rubus",
        description: "Ett storvuxet (upp till 4 m högt), delvis vintergrönt äkta björnbär med upp till 3 cm grova och 5 m långa, rödstrimmiga samt bågböjda årsskott som har rikligt med stora (6-11 mm långa), nästan raka, röda taggar. Arten bildar ofta stora, ogenomträngliga snår. <br></br> Armeniskt björnbär kan förväxlas med många av våra inhemska björnbär. Växer på många typer av öppen till halvöppen, gärna näringsrik mark, som vägkanter, ruderatmarker, gräsmarker, skogsbryn och skogar. Förökar sig snabbt genom både klonal tillväxt (bland annat genom att grenspetsar som når marken rotar sig) och genom de talrika fröna som sprids effektivt med fåglar och mindre däggdjur. <br></br> Omkring 10 000 frön kan produceras per kvadratmeter och år. Fröna kan överleva flera år men kräver relativt ljusöppna förhållanden för att gro (Florin 2015 och referenser däri). Arten är besvärlig att utrota då den har mycket mycket vasst taggiga skott, ett djupt rotsystem och att mindre jordstamsfragment kan ge upphov till nya plantor."
    },
    {
        swedishName: "kanadensiskt gullris",
        latinName: "Solidago canadensis",
        imageFolder: "images/solidagoc",
        description: "Kanadensiskt gullris är en flerårig, beståndsbildande ört som kan bli upp till 2 meter hög. Stjälken är styvt upprätt och hårig åtminstone upptill. Rosettblad saknas. Längs stjälken sitter rikligt med strödda, kort- eller oskaftade blad. Bladen är smalt lansettlika med sågad kant. <br></br> Kanadensiskt gullris är mycket anpassningsbar och kan växa i områden som har skilda närings- och fuktighetsnivåer (Wissman m.fl. 2015). Detta gör att arten kan etablera sig i ett mycket brett spann av habitat, allt från fuktiga strandskogar till torra stäppbiotoper (Nolf m.fl. 2014). Arten kan bli dominant i övergivna åkrar, ängar och dikade våtmarker.  <br></br> <b> 2m hög. perenn. bekämpas med slåtter eller uppdragning. Kan förväxlas med inhemsk gullris, Solidago virguarea.</b>"
    },
    {
        swedishName: "höstgullris",
        latinName: "Solidago gigantea",
        imageFolder: "images/solidagog",
        description: "Höstgullris är en flerårig, beståndsbildande ört som blir upp till 2–3 meter hög. Stjälken är styvt upprätt, kal och ofta något blådaggig under blomställningen. Rosettblad saknas. Längs stjälken sitter rikligt av strödda, kort- eller oskaftade blad. Bladen är smalt lansettlika med sågad eller nästan helbräddad kant.Höstgullris är mycket anpassningsbar och kan växa i områden som har skilda närings- och fuktighetsnivåer. Detta gör att arten kan etablera sig i ett mycket brett spann av habitat och hittas i bland annat ohävdade gräsmarker, skogsbryn, längs vattendrag och i ruderata miljöer såsom vägkanter och urbana miljöer (CABI 2025). Övergivna ängar och trädgårdar koloniseras snabbt. "
    },
    {
        swedishName: "klasespirea",
        latinName: "Spiraea × billardii",
        imageFolder: "images/spiraea",
        description: "5e bilden är tagen av McClure. <br></br> Klasespirea är en 1-2 meter hög buske med rosa blommor i en avlång topp. Arten har asexuell reproduktion. Klasespirea bedöms ha en låg till måttlig ekologisk effekt. Trots att den är väl spridd i landet förekommer den huvudsakligen i människopåverkade miljöer. Den huvudsakliga spridningen till mer naturliga miljöer sker genom utkast av trädgårdsmaterial. Där arten förekommer bildar den täta buskage genom rotskott. Detta lär påverka framför allt öppna miljöer när planterade eller utkastade buskar expanderar ut i omgivande miljöer. "
    },
    {
        swedishName: "snöbär",
        latinName: "Symphoricarpus albus",
        imageFolder: "images/symp",
        description: "Snöbär är 1-3 meter hög buske med vita bär. Bären äts inte av fåglar, troligen på grund av att de smakar illa och har en oattraktiv färg. Arten har måttligt hög ekologisk effekt, den bildar täta bestånd och tål både skugga och solöppet. Den sprider sig allt mer ut i naturliga miljöer. Snöbär har en negativ ekologisk effekt då den bildar täta bestånd och som tål både skugga och sol. Busksnår kan bli mycket stora och konkurrerar med inhemska arter om utrymme. <br></br> <b> Tränger bort markfloran. Oätliga bär. Bildar täta bestånd i bryn, påverkar mångfalden.</b>"
    },
    {
        swedishName: "häckberberis",
        latinName: "Berberis thunbergii",
        imageFolder: "images/berberis",
        description: "Vanligen upp till 1 m hög lövfällande buske med enkla, strödda blad på kala grenar och enkla tornar nedanför bladfästena. Arten sprider sig både klonalt, med trädgårdsavfall och med frön. <br></br> Frukterna äts av fåglar som därmed kan sprida fröna över större avstånd. Då stora mängder frön kan produceras årligen (upp till 35 000 frukter på en planta; Brand m.fl. 2012), i kombination med en hög grobarhet (ca 90 %), så finns det en stor spridningspotential. Den ekologiska effekten består av att enskilda buskar konkurrerar om växtplatsen med andra arter. Om ett förändrat klimat skulle gynna häckberberis och göra att den kan förekomma i tätare bestånd kan effekten bli större i framtiden."
    },
    {
        swedishName: "hybridslide",
        latinName: "Fallopia × bohemica (Reynoutria x bohemica)",
        imageFolder: "images/fallopia",
        description: "Hybridslide är en flerårig, storväxt ört med bambu-liknande stam och som är intermediär i de flesta karaktärer mellan föräldraarterna vanligt parkslide Reynoutria japonica var. japonica och jätteslide R. sachalinensis. Stjälkarna är grova, ihåliga och sträcker sig upp till fyra meters höjd. Stammen är ljusgrön med brunröda fläckar. Stambladen är ganska styva och stora (20–35 cm långa, ofta 1,5 gånger längre än breda) med oftast grunt hjärtformad bas och en utdragen bladspets. <br></br> Hybridslide skiljer sig från vanligt parkslide genom att ha större blad, vanligen 20–35 cm långa, och tydligt längre än breda, mot 5–15 cm hos parkslide (rosenslide var. compacta har ännu mindre blad som är ca 6 cm långa och lika långa som breda). Bladen har ofta en grunt hjärtformad bas (men kan även vara tvär som hos parkslide)"
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
const descriptionSection = document.querySelector('.description-section');

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
    descriptionEl.innerHTML = card.description; // Använd innerHTML för att <br> ska fungera
    descriptionSection.classList.remove('visible'); // <-- LÄGG TILL: Återställer till stängt läge

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

// LÄGG TILL DETTA BLOCK: Hanterar klick för att visa/dölja beskrivning
descriptionSection.addEventListener('click', () => {
    descriptionSection.classList.toggle('visible');
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
