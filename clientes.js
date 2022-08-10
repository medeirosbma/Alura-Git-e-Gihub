function pulaLinha(){
    console.log()
    console.log("__________________________________")
    console.log()
}
function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.consultaSaldo = function(){
        return `Seu saldo é de R$ ${this.saldo.toFixed(2)}`
    }
    this.depositar = function(valor){
        if ( valor > 0 ){
            this.saldo += valor
            return  `Depósito efetuado. Saldo atual: R$${this.saldo.toFixed(2)}.`
        } else {
            return "Valor para depósito não permitido."
        }
    }
    this.sacar = function(valor){
        if (valor <= this.saldo){
            this.saldo -= valor
            return `Saque no valor de R$ ${valor.toFixed(2)} efetuado, saldo atual: R$${this.saldo.toFixed(2)}.`
        } else {
            return "Saldo insuficiente."
        }
    }
}


function ClientePoupanca (nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this,nome, cpf, email, saldo )
    this.saldoPoup = saldoPoup
}


//criando método "Despositar Poupança" para 'ClientePoupanca'
ClientePoupanca.prototype.depositarPoup = function (valor){
    this.saldoPoup += valor
}



//Criação de cliente Comum
const matheus = new Cliente ( "Matheus", "123456789012" , "mbmedeiros23@gmail.com", 0 )

//Criação de cliente Poupança
const valeska = new Cliente ( "Matheus", "123456789012" , "mbmedeiros23@gmail.com", 0 )



//Teste Cliente comum
console.log(matheus)

console.log(matheus.depositar(-1))
pulaLinha()
console.log(matheus.depositar(100))
pulaLinha()
console.log(matheus.consultaSaldo())
pulaLinha()
console.log(matheus.sacar(150))
pulaLinha()
console.log(matheus.sacar(50))
pulaLinha()

//Teste Cliente Poupança
console.log(valeska)

console.log(valeska.depositar(-1))
pulaLinha()
console.log(valeska.depositar(100))
pulaLinha()
console.log(valeska.consultaSaldo())
pulaLinha()
console.log(valeska.sacar(150))
pulaLinha()
console.log(valeska.sacar(50))
pulaLinha()