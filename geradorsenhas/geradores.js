const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 90));
const geraMinuscula = () => String.fromCharCode(rand(97, 122));
const geraNumero = () => String.fromCharCode(rand(48, 57));
const simbolos = ',.;:!?@#$%&*()_+-=';
const geraSimbolo = () => simbolos[rand(0, simbolos.length - 1)];

export default function geraSenha(qtde, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtde = Number(qtde);  

    for (let i = 0; i < qtde; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('');
}