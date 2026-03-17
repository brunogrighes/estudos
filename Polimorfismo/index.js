//SuperClass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);      
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);      
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};


function CP(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;




const CP = new CP(12, 33, 0, 50);
CP.depositar(10);
CP.sacar(60);
CP.sacar(20);

console.log();

const CC = new CC(14, 50, 0);
CC.depositar(10);
CC.sacar(110);
CC.sacar(20);

console.log();

const contaCorrente2 = new CC(11, 22, 0);
contaCorrente2.depositar(10);
contaCorrente2.sacar(110);
contaCorrente2.sacar(20);