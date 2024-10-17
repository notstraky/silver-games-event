// Supongamos que este es tu archivo JSON cargado en una variable
const participantsData = [
    {
        "number": 1,
        "name": "Nombre Uno",
        "image": "images/participants/jugador1.png"
    },
    {
        "number": 2,
        "name": "Nombre Dos",
        "image": "images/participants/jugador2.png"
    },
    {
        "number": 3,
        "name": "Nombre Tres",
        "image": "images/participants/jugador3.png"
    },
    {
        "number": 4,
        "name": "Nombre Cuatro",
        "image": "images/participants/jugador4.png"
    },
    {
        "number": 5,
        "name": "Nombre Cinco",
        "image": "images/participants/jugador5.png"
    },
    {
        "number": 6,
        "name": "Nombre Seis",
        "image": "images/participants/jugador6.png"
    },
    {
        "number": 7,
        "name": "Nombre Siete",
        "image": "images/participants/jugador7.png"
    },
    {
        "number": 8,
        "name": "Nombre Ocho",
        "image": "images/participants/jugador8.png"
    },
    {
        "number": 9,
        "name": "Nombre Nueve",
        "image": "images/participants/jugador9.png"
    },
    {
        "number": 10,
        "name": "Drufete",
        "image": "images/participants/jugador10.png"
    },
    {
        "number": 11,
        "name": "Nombre Once",
        "image": "images/participants/jugador11.png"
    },
    {
        "number": 12,
        "name": "Nombre Doce",
        "image": "images/participants/jugador12.png"
    },
    {
        "number": 13,
        "name": "Nombre Trece",
        "image": "images/participants/jugador13.png"
    },
    {
        "number": 14,
        "name": "Nombre Catorce",
        "image": "images/participants/jugador14.png"
    },
    {
        "number": 15,
        "name": "Nombre Quince",
        "image": "images/participants/jugador15.png"
    },
    {
        "number": 16,
        "name": "Nombre Dieciséis",
        "image": "images/participants/jugador16.png"
    },
    {
        "number": 17,
        "name": "Nombre Diecisiete",
        "image": "images/participants/jugador17.png"
    },
    {
        "number": 18,
        "name": "Nombre Dieciocho",
        "image": "images/participants/jugador18.png"
    },
    {
        "number": 19,
        "name": "Nombre Diecinueve",
        "image": "images/participants/jugador19.png"
    },
    {
        "number": 20,
        "name": "Nombre Veinte",
        "image": "images/participants/jugador20.png"
    },
    {
        "number": 21,
        "name": "Nombre Veintiuno",
        "image": "images/participants/jugador21.png"
    },
    {
        "number": 22,
        "name": "Nombre Veintidós",
        "image": "images/participants/jugador22.png"
    },
    {
        "number": 23,
        "name": "Nombre Veintitrés",
        "image": "images/participants/jugador23.png"
    },
    {
        "number": 24,
        "name": "Nombre Veinticuatro",
        "image": "images/participants/jugador24.png"
    },
    {
        "number": 25,
        "name": "Nombre Veinticinco",
        "image": "images/participants/jugador25.png"
    },
    {
        "number": 26,
        "name": "Nombre Veintiséis",
        "image": "images/participants/jugador26.png"
    },
    {
        "number": 27,
        "name": "Nombre Veintisiete",
        "image": "images/participants/jugador27.png"
    },
    {
        "number": 28,
        "name": "Nombre Veintiocho",
        "image": "images/participants/jugador28.png"
    },
    {
        "number": 29,
        "name": "Nombre Veintinueve",
        "image": "images/participants/jugador29.png"
    },
    {
        "number": 30,
        "name": "Nombre Treinta",
        "image": "images/participants/jugador30.png"
    },
    {
        "number": 31,
        "name": "Nombre Treinta y Uno",
        "image": "images/participants/jugador31.png"
    },
    {
        "number": 32,
        "name": "Nombre Treinta y Dos",
        "image": "images/participants/jugador32.png"
    },
    {
        "number": 33,
        "name": "Nombre Treinta y Tres",
        "image": "images/participants/jugador33.png"
    },
    {
        "number": 34,
        "name": "Nombre Treinta y Cuatro",
        "image": "images/participants/jugador34.png"
    },
    {
        "number": 35,
        "name": "Nombre Treinta y Cinco",
        "image": "images/participants/jugador35.png"
    },
    {
        "number": 36,
        "name": "Nombre Treinta y Seis",
        "image": "images/participants/jugador36.png"
    },
    {
        "number": 37,
        "name": "Nombre Treinta y Siete",
        "image": "images/participants/jugador37.png"
    },
    {
        "number": 38,
        "name": "Nombre Treinta y Ocho",
        "image": "images/participants/jugador38.png"
    },
    {
        "number": 39,
        "name": "Nombre Treinta y Nueve",
        "image": "images/participants/jugador39.png"
    },
    {
        "number": 40,
        "name": "Nombre Cuarenta",
        "image": "images/participants/jugador40.png"
    },
    {
        "number": 41,
        "name": "Nombre Cuarenta y Uno",
        "image": "images/participants/jugador41.png"
    },
    {
        "number": 42,
        "name": "Nombre Cuarenta y Dos",
        "image": "images/participants/jugador42.png"
    },
    {
        "number": 43,
        "name": "Nombre Cuarenta y Tres",
        "image": "images/participants/jugador43.png"
    },
    {
        "number": 44,
        "name": "Nombre Cuarenta y Cuatro",
        "image": "images/participants/jugador44.png"
    },
    {
        "number": 45,
        "name": "Nombre Cuarenta y Cinco",
        "image": "images/participants/jugador45.png"
    },
    {
        "number": 46,
        "name": "Nombre Cuarenta y Seis",
        "image": "images/participants/jugador46.png"
    },
    {
        "number": 47,
        "name": "Nombre Cuarenta y Siete",
        "image": "images/participants/jugador47.png"
    },
    {
        "number": 48,
        "name": "Nombre Cuarenta y Ocho",
        "image": "images/participants/jugador48.png"
    },
    {
        "number": 49,
        "name": "Nombre Cuarenta y Nueve",
        "image": "images/participants/jugador49.png"
    },
    {
        "number": 50,
        "name": "Nombre Cincuenta",
        "image": "images/participants/jugador50.png"
    },
    {
        "number": 51,
        "name": "Nombre Cincuenta y Uno",
        "image": "images/participants/jugador51.png"
    },
    {
        "number": 52,
        "name": "Nombre Cincuenta y Dos",
        "image": "images/participants/jugador52.png"
    },
    {
        "number": 53,
        "name": "Nombre Cincuenta y Tres",
        "image": "images/participants/jugador53.png"
    },
    {
        "number": 54,
        "name": "Nombre Cincuenta y Cuatro",
        "image": "images/participants/jugador54.png"
    },
    {
        "number": 55,
        "name": "Nombre Cincuenta y Cinco",
        "image": "images/participants/jugador55.png"
    },
    {
        "number": 56,
        "name": "Nombre Cincuenta y Seis",
        "image": "images/participants/jugador56.png"
    },
    {
        "number": 57,
        "name": "Nombre Cincuenta y Siete",
        "image": "images/participants/jugador57.png"
    },
    {
        "number": 58,
        "name": "Nombre Cincuenta y Ocho",
        "image": "images/participants/jugador58.png"
    },
    {
        "number": 59,
        "name": "Nombre Cincuenta y Nueve",
        "image": "images/participants/jugador59.png"
    },
    {
        "number": 60,
        "name": "Nombre Sesenta",
        "image": "images/participants/jugador60.png"
    },
    {
        "number": 61,
        "name": "Nombre Sesenta y Uno",
        "image": "images/participants/jugador61.png"
    },
    {
        "number": 62,
        "name": "Nombre Sesenta y Dos",
        "image": "images/participants/jugador62.png"
    },
    {
        "number": 63,
        "name": "Nombre Sesenta y Tres",
        "image": "images/participants/jugador63.png"
    },
    {
        "number": 64,
        "name": "Nombre Sesenta y Cuatro",
        "image": "images/participants/jugador64.png"
    },
    {
        "number": 65,
        "name": "Nombre Sesenta y Cinco",
        "image": "images/participants/jugador65.png"
    },
    {
        "number": 66,
        "name": "Shadoune666",
        "image": "images/participants/jugador66.png"
    },
    {
        "number": 67,
        "name": "Nombre Sesenta y Siete",
        "image": "images/participants/jugador67.png"
    },
    {
        "number": 68,
        "name": "Nombre Sesenta y Ocho",
        "image": "images/participants/jugador68.png"
    },
    {
        "number": 69,
        "name": "Nombre Sesenta y Nueve",
        "image": "images/participants/jugador69.png"
    },
    {
        "number": 70,
        "name": "Nombre Setenta",
        "image": "images/participants/jugador70.png"
    },
    {
        "number": 71,
        "name": "Nombre Setenta y Uno",
        "image": "images/participants/jugador71.png"
    },
    {
        "number": 72,
        "name": "Nombre Setenta y Dos",
        "image": "images/participants/jugador72.png"
    },
    {
        "number": 73,
        "name": "Nombre Setenta y Tres",
        "image": "images/participants/jugador73.png"
    },
    {
        "number": 74,
        "name": "Nombre Setenta y Cuatro",
        "image": "images/participants/jugador74.png"
    },
    {
        "number": 75,
        "name": "Nombre Setenta y Cinco",
        "image": "images/participants/jugador75.png"
    },
    {
        "number": 76,
        "name": "Nombre Setenta y Seis",
        "image": "images/participants/jugador76.png"
    },
    {
        "number": 77,
        "name": "Nombre Setenta y Siete",
        "image": "images/participants/jugador77.png"
    },
    {
        "number": 78,
        "name": "Nombre Setenta y Ocho",
        "image": "images/participants/jugador78.png"
    },
    {
        "number": 79,
        "name": "Nombre Setenta y Nueve",
        "image": "images/participants/jugador79.png"
    },
    {
        "number": 80,
        "name": "Nombre Ochenta",
        "image": "images/participants/jugador80.png"
    },
    {
        "number": 81,
        "name": "Nombre Ochenta y Uno",
        "image": "images/participants/jugador81.png"
    },
    {
        "number": 82,
        "name": "Nombre Ochenta y Dos",
        "image": "images/participants/jugador82.png"
    },
    {
        "number": 83,
        "name": "Nombre Ochenta y Tres",
        "image": "images/participants/jugador83.png"
    },
    {
        "number": 84,
        "name": "Nombre Ochenta y Cuatro",
        "image": "images/participants/jugador84.png"
    },
    {
        "number": 85,
        "name": "Nombre Ochenta y Cinco",
        "image": "images/participants/jugador85.png"
    },
    {
        "number": 86,
        "name": "Nombre Ochenta y Seis",
        "image": "images/participants/jugador86.png"
    },
    {
        "number": 87,
        "name": "Nombre Ochenta y Siete",
        "image": "images/participants/jugador87.png"
    },
    {
        "number": 88,
        "name": "Nombre Ochenta y Ocho",
        "image": "images/participants/jugador88.png"
    },
    {
        "number": 89,
        "name": "Nombre Ochenta y Nueve",
        "image": "images/participants/jugador89.png"
    },
    {
        "number": 90,
        "name": "Nombre Noventa",
        "image": "images/participants/jugador90.png"
    },
    {
        "number": 91,
        "name": "Nombre Noventa y Uno",
        "image": "images/participants/jugador91.png"
    },
    {
        "number": 92,
        "name": "Nombre Noventa y Dos",
        "image": "images/participants/jugador92.png"
    },
    {
        "number": 93,
        "name": "Nombre Noventa y Tres",
        "image": "images/participants/jugador93.png"
    },
    {
        "number": 94,
        "name": "Nombre Noventa y Cuatro",
        "image": "images/participants/jugador94.png"
    },
    {
        "number": 95,
        "name": "Nombre Noventa y Cinco",
        "image": "images/participants/jugador95.png"
    },
    {
        "number": 96,
        "name": "Nombre Noventa y Seis",
        "image": "images/participants/jugador96.png"
    },
    {
        "number": 97,
        "name": "Nombre Noventa y Siete",
        "image": "images/participants/jugador97.png"
    },
    {
        "number": 98,
        "name": "Nombre Noventa y Ocho",
        "image": "images/participants/jugador98.png"
    },
    {
        "number": 99,
        "name": "Nombre Noventa y Nueve",
        "image": "images/participants/jugador99.png"
    },
    {
        "number": 100,
        "name": "Nombre Cien",
        "image": "images/participants/jugador100.png"
    },
    {
        "number": 101,
        "name": "Nombre Ciento Uno",
        "image": "images/participants/jugador101.png"
    },
    {
        "number": 102,
        "name": "Nombre Ciento Dos",
        "image": "images/participants/jugador102.png"
    },
    {
        "number": 103,
        "name": "Nombre Ciento Tres",
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
        "name": "Nombre Ciento Siete",
        "image": "images/participants/jugador107.png"
    },
    {
        "number": 108,
        "name": "Nombre Ciento Ocho",
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