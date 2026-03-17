//705.484.450-52 070.987.720-03
/*
7x 0x 5x 4x 4x 8x 4x 5x 0x
10 9 8 7 6 5 4 3 2
70 0 40 28 24 40 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro dígito)

7x 0x  5x  4x  4x  8x  4x  5x 0x 5x
11 10  9  8   7   6   5   4   3  2
77 0  45  32  56  24  20  20  0  10 = 284

11 - (284 % 11) = 2 (primeiro dígito)
Se o numero digito for maior que 9, considera-se 0.

*/


function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {    
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;

    // CPF com todos os dígitos iguais (por exemplo "11111111111") é inválido
    const todosIguais = this.cpfLimpo.split('').every((d) => d === this.cpfLimpo[0]);
    if (todosIguais) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.CriaDigito(cpfParcial);
    const digito2 = this.CriaDigito(cpfParcial + digito1);
    console.log (digito2);

    return true
}

ValidaCPF.prototype.CriaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};


const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());

if(cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}   