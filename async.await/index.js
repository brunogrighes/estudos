function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg.toUpperCase() + `- Passei na Promisse`);
        }, tempo);
    });
}

// esperaAi('Frase 1', rand(0, 3))
//     .then(valor => {
//         console.log(valor);
//         return esperaAi(`Frase 2`, rand());
// })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi(`Frase 3`, rand());

//     })
//     .then(fase => {
//         console.log(`Terminamos na Fase:`, fase);
//         return fase;
// })
// .then()
// .catch(e => console.log(e));


async function executa() {
    const fase1 = await esperaAi('Frase 1', rand());
    const fase2 = await esperaAi('Frase 1', rand());
    const fase3 = await esperaAi('Frase 1', rand());

    console.log(fase1);
    console.log(fase2);
    console.log(fase3);

}

executa();