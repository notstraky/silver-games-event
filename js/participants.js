// Supongamos que este es tu archivo JSON cargado en una variable
const participantsData = [
    {
        "number": 1,
        "name": "Tamara1001",
        "image": "images/participants/jugador1.png"
    },
    {
        "number": 2,
        "name": "Aizaxl",
        "image": "images/participants/jugador2.png"
    },
    {
        "number": 3,
        "name": "vickycordini",
        "image": "images/participants/jugador3.png"
    },
    {
        "number": 4,
        "name": "duuhart",
        "image": "images/participants/jugador4.png"
    },
    {
        "number": 5,
        "name": "alewang",
        "image": "images/participants/jugador5.png"
    },
    {
        "number": 6,
        "name": "priyita",
        "image": "images/participants/jugador6.png"
    },
    {
        "number": 7,
        "name": "UPGodzi",
        "image": "images/participants/jugador7.png"
    },
    {
        "number": 8,
        "name": "tano",
        "image": "images/participants/jugador8.png"
    },
    {
        "number": 9,
        "name": "tadeou06",
        "image": "images/participants/jugador9.png"
    },
    {
        "number": 10,
        "name": "Drufete",
        "image": "images/participants/jugador10.png"
    },
    {
        "number": 11,
        "name": "urugodd",
        "image": "images/participants/jugador11.png"
    },
    {
        "number": 12,
        "name": "nicolavorato",
        "image": "images/participants/jugador12.png"
    },
    {
        "number": 13,
        "name": "torehh",
        "image": "images/participants/jugador13.png"
    },
    {
        "number": 14,
        "name": "tassu",
        "image": "images/participants/jugador14.png"
    },
    {
        "number": 15,
        "name": "danitaxz_",
        "image": "images/participants/jugador15.png"
    },
    {
        "number": 16,
        "name": "wickuu",
        "image": "images/participants/jugador16.png"
    },
    {
        "number": 17,
        "name": "imvickky",
        "image": "images/participants/jugador17.png"
    },
    {
        "number": 18,
        "name": "chiletian_cl",
        "image": "images/participants/jugador18.png"
    },
    {
        "number": 19,
        "name": "micubarone",
        "image": "images/participants/jugador19.png"
    },
    {
        "number": 20,
        "name": "fabribanana",
        "image": "images/participants/jugador20.png"
    },
    {
        "number": 21,
        "name": "eletetv",
        "image": "images/participants/jugador21.png"
    },
    {
        "number": 22,
        "name": "adalokumura",
        "image": "images/participants/jugador22.png"
    },
    {
        "number": 23,
        "name": "lopezcb4",
        "image": "images/participants/jugador23.png"
    },
    {
        "number": 24,
        "name": "jjuaquito",
        "image": "images/participants/jugador24.png"
    },
    {
        "number": 25,
        "name": "guadalibrandi",
        "image": "images/participants/jugador25.png"
    },
    {
        "number": 26,
        "name": "ruviola",
        "image": "images/participants/jugador26.png"
    },
    {
        "number": 27,
        "name": "polli",
        "image": "images/participants/jugador27.png"
    },
    {
        "number": 28,
        "name": "ismoos",
        "image": "images/participants/jugador28.png"
    },
    {
        "number": 29,
        "name": "warriordrl",
        "image": "images/participants/jugador29.png"
    },
    {
        "number": 30,
        "name": "gussy_gng",
        "image": "images/participants/jugador30.png"
    },
    {
        "number": 31,
        "name": "facha",
        "image": "images/participants/jugador31.png"
    },
    {
        "number": 32,
        "name": "nicomnu",
        "image": "images/participants/jugador32.png"
    },
    {
        "number": 33,
        "name": "blue_army33",
        "image": "images/participants/jugador33.png"
    },
    {
        "number": 34,
        "name": "santi_roggiano",
        "image": "images/participants/jugador34.png"
    },
    {
        "number": 35,
        "name": "arriooo",
        "image": "images/participants/jugador35.png"
    },
    {
        "number": 36,
        "name": "tongx_",
        "image": "images/participants/jugador36.png"
    },
    {
        "number": 37,
        "name": "meelooh",
        "image": "images/participants/jugador37.png"
    },
    {
        "number": 38,
        "name": "diewoo",
        "image": "images/participants/jugador38.png"
    },
    {
        "number": 39,
        "name": "itsvortexuy",
        "image": "images/participants/jugador39.png"
    },
    {
        "number": 40,
        "name": "inatillas",
        "image": "images/participants/jugador40.png"
    },
    {
        "number": 41,
        "name": "bottodea",
        "image": "images/participants/jugador41.png"
    },
    {
        "number": 42,
        "name": "centu",
        "image": "images/participants/jugador42.png"
    },
    {
        "number": 43,
        "name": "enzorisso13",
        "image": "images/participants/jugador43.png"
    },
    {
        "number": 44,
        "name": "zeki",
        "image": "images/participants/jugador44.png"
    },
    {
        "number": 45,
        "name": "aqumadre",
        "image": "images/participants/jugador45.png"
    },
    {
        "number": 46,
        "name": "ivan86121",
        "image": "images/participants/jugador46.png"
    },
    {
        "number": 47,
        "name": "rixlod",
        "image": "images/participants/jugador47.png"
    },
    {
        "number": 48,
        "name": "isuei",
        "image": "images/participants/jugador48.png"
    },
    {
        "number": 49,
        "name": "chazsad",
        "image": "images/participants/jugador49.png"
    },
    {
        "number": 50,
        "name": "lenarrr",
        "image": "images/participants/jugador50.png"
    },
    {
        "number": 51,
        "name": "nawel",
        "image": "images/participants/jugador51.png"
    },
    {
        "number": 52,
        "name": "taffitaa",
        "image": "images/participants/jugador52.png"
    },
    {
        "number": 53,
        "name": "speekth",
        "image": "images/participants/jugador53.png"
    },
    {
        "number": 54,
        "name": "soys1k3r",
        "image": "images/participants/jugador54.png"
    },
    {
        "number": 55,
        "name": "ttaaato",
        "image": "images/participants/jugador55.png"
    },
    {
        "number": 56,
        "name": "angelsg__",
        "image": "images/participants/jugador56.png"
    },
    {
        "number": 57,
        "name": "baconsitoo",
        "image": "images/participants/jugador57.png"
    },
    {
        "number": 58,
        "name": "chabon",
        "image": "images/participants/jugador58.png"
    },
    {
        "number": 59,
        "name": "penma4",
        "image": "images/participants/jugador59.png"
    },
    {
        "number": 60,
        "name": "ulisex3",
        "image": "images/participants/jugador60.png"
    },
    {
        "number": 61,
        "name": "thiago_gj",
        "image": "images/participants/jugador61.png"
    },
    {
        "number": 62,
        "name": "agusttincho",
        "image": "images/participants/jugador62.png"
    },
    {
        "number": 63,
        "name": "mativera07",
        "image": "images/participants/jugador63.png"
    },
    {
        "number": 64,
        "name": "ulisesdaka",
        "image": "images/participants/jugador64.png"
    },
    {
        "number": 65,
        "name": "erickiwi",
        "image": "images/participants/jugador65.png"
    },
    {
        "number": 66,
        "name": "Shadoune666",
        "image": "images/participants/jugador66.png"
    },
    {
        "number": 67,
        "name": "srcornettouy",
        "image": "images/participants/jugador67.png"
    },
    {
        "number": 68,
        "name": "OrigithGames",
        "image": "images/participants/jugador68.png"
    },
    {
        "number": 69,
        "name": "ddgoficial",
        "image": "images/participants/jugador69.png"
    },
    {
        "number": 70,
        "name": "KinoFrizza",
        "image": "images/participants/jugador70.png"
    },
    {
        "number": 71,
        "name": "YoSoySecond",
        "image": "images/participants/jugador71.png"
    },
    {
        "number": 72,
        "name": "camigarayy",
        "image": "images/participants/jugador72.png"
    },
    {
        "number": 73,
        "name": "delfigraanata",
        "image": "images/participants/jugador73.png"
    },
    {
        "number": 74,
        "name": "luki_klk",
        "image": "images/participants/jugador74.png"
    },
    {
        "number": 75,
        "name": "valenn_molina",
        "image": "images/participants/jugador75.png"
    },
    {
        "number": 76,
        "name": "MrPolled",
        "image": "images/participants/jugador76.png"
    },
    {
        "number": 77,
        "name": "iarrowdeath",
        "image": "images/participants/jugador77.png"
    },
    {
        "number": 78,
        "name": "chilltv",
        "image": "images/participants/jugador78.png"
    },
    {
        "number": 79,
        "name": "doduzen",
        "image": "images/participants/jugador79.png"
    },
    {
        "number": 80,
        "name": "soysaddey",
        "image": "images/participants/jugador80.png"
    },
    {
        "number": 81,
        "name": "kappa_hanzaki_",
        "image": "images/participants/jugador81.png"
    },
    {
        "number": 82,
        "name": "",
        "image": "images/participants/jugador822222.png"
    },
    {
        "number": 83,
        "name": "miqui7l",
        "image": "images/participants/jugador83.png"
    },
    {
        "number": 84,
        "name": "camilanga",
        "image": "images/participants/jugador84.png"
    },
    {
        "number": 85,
        "name": "haedcolor",
        "image": "images/participants/jugador85.png"
    },
    {
        "number": 86,
        "name": "saiico2000",
        "image": "images/participants/jugador86.png"
    },
    {
        "number": 87,
        "name": "fernandavaal",
        "image": "images/participants/jugador87.png"
    },
    {
        "number": 88,
        "name": "marexitoo",
        "image": "images/participants/jugador88.png"
    },
    {
        "number": 89,
        "name": "mmaxo_",
        "image": "images/participants/jugador89.png"
    },
    {
        "number": 90,
        "name": "seikiee_",
        "image": "images/participants/jugador90.png"
    },
    {
        "number": 91,
        "name": "maaarkotv",
        "image": "images/participants/jugador91.png"
    },
    {
        "number": 92,
        "name": "tutogamesmiguel",
        "image": "images/participants/jugador92.png"
    },
    {
        "number": 93,
        "name": "cruzterr",
        "image": "images/participants/jugador93.png"
    },
    {
        "number": 94,
        "name": "quaait",
        "image": "images/participants/jugador94.png"
    },
    {
        "number": 95,
        "name": "allmerce",
        "image": "images/participants/jugador95.png"
    },
    {
        "number": 96,
        "name": "mathimanson",
        "image": "images/participants/jugador96.png"
    },
    {
        "number": 97,
        "name": "montoyatr",
        "image": "images/participants/jugador97.png"
    },
    {
        "number": 98,
        "name": "chaterbox",
        "image": "images/participants/jugador98.png"
    },
    {
        "number": 99,
        "name": "luisvuk",
        "image": "images/participants/jugador99.png"
    },
    {
        "number": 100,
        "name": "chacoide",
        "image": "images/participants/jugador100.png"
    },
    {
        "number": 101,
        "name": "Slend00",
        "image": "images/participants/jugador101.png"
    },
    {
        "number": 102,
        "name": "alan2k2tv",
        "image": "images/participants/jugador102.png"
    },
    {
        "number": 103,
        "name": "rageylo0",
        "image": "images/participants/jugador103.png"
    },
    {
        "number": 104,
        "name": "Nombre Ciento Cuatro",
        "image": "images/participants/jugador104.png"
    },
    {
        "number": 105,
        "name": "Nombre Ciento Cinco",
        "image": "images/participants/jugador105.png"
    },
    {
        "number": 106,
        "name": "Nombre Ciento Seis",
        "image": "images/participants/jugador106.png"
    },
    {
        "number": 107,
        "name": "diffrent",
        "image": "images/participants/jugador107.png"
    },
    {
        "number": 108,
        "name": "TiroLoco",
        "image": "images/participants/jugador108.png"
    },
    {
        "number": 109,
        "name": "Nombre Ciento Nueve",
        "image": "images/participants/jugador109.png"
    },
    {
        "number": 110,
        "name": "Nombre Ciento Diez",
        "image": "images/participants/jugador110.png"
    }
];

// Seleccionamos la sección donde se colocarán las tarjetas
const section = document.getElementById('participants-section');

// Función para crear cada card
participantsData.forEach(participant => {
    const card = document.createElement('div');
    card.classList.add('card');

    // Formatear el número para que siempre tenga tres dígitos
    const formattedNumber = String(participant.number).padStart(3, '0');

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <span class="minecraft-font">${formattedNumber}</span>
            </div>
            <div class="card-back">
                <img src="${participant.image}" alt="${participant.name}">
                <span class="minecraft-font">${participant.name}</span>
                <span class="minecraft-font">${formattedNumber}</span>
            </div>
        </div>
    `;

    // Evento para voltear el card
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    section.appendChild(card);
});
