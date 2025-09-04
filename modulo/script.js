class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco{
    constructor(estado, cidade, rua, numero){    
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

class Cliente{
    #cpf;
    constructor(nome, cpf, endereco){
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }
}

class Empresa{
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }
}

export {Telefone, Endereco, Cliente, Empresa};