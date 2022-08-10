class Pessoa {
    constructor(nome, cpf, email, saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    depositar (valor){
        if (valor >0){
            this.saldo += valor
        }
    }

    sacar (valor){
        if (valor <= this.saldo){
            this.saldo -= valor
        }
    }

}

class ClientePoupanca extends Cliente {
    constructor (nome, cpf, email, saldo, saldoPoupanca){
        super(nome, cpf, email, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        if (valor >0){
            this.saldo += valor
        }
    }
}

