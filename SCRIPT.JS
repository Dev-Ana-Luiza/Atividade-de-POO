class Funcionario {
  #salario;

  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.#salario = salario;
  }

  apresentar() {
    console.log(`Olá! Meu nome é ${this.nome} e sou ${this.cargo}.`);
  }

  calcularBonus() {
    return this.#salario * 0.1;
  }

  verSalario() {
    return this.#salario;
  }

  aumentarSalario(valor) {
    if (valor > 0) {
      this.#salario += valor;
    }
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, cargo, salario, linguagem) {
    super(nome, cargo, salario);
    this.linguagem = linguagem;
  }

  calcularBonus() {
    return this.verSalario() * 0.2;
  }
}

class Designer extends Funcionario {
  constructor(nome, cargo, salario, ferramenta) {
    super(nome, cargo, salario);
    this.ferramenta = ferramenta;
  }

  calcularBonus() {
    return this.verSalario() * 0.15;
  }
}

// Funcionários

const dev = new Desenvolvedor(
  'Tralalero Tralala',
  'Desenvolvedor',
  3000,
  'JavaScript',
);

const designer = new Designer(
  'Ballerina Cappuccina',
  'Designer',
  5000,
  'Figma',
);

dev.apresentar();
console.log(`Linguagem: ${dev.linguagem}`);
console.log(`Salário Atual: R$ ${dev.verSalario()}`);
console.log(`Bônus Calculado: R$ ${dev.calcularBonus()}`);

designer.apresentar();
console.log(`Ferramenta: ${designer.ferramenta}`);
console.log(`Salário Atual: R$ ${designer.verSalario()}`);
console.log(`Bônus Calculado: R$ ${designer.calcularBonus()}`);

class Veiculo {
  #diaria;

  constructor(marca, modelo, diaria) {
    this.marca = marca;
    this.modelo = modelo;
    this.#diaria = diaria;
  }

  getDiaria() {
    return this.#diaria;
  }

  descricao() {
    return `Veículo: ${this.marca} ${this.modelo}`;
  }

  calcularAluguel(dias) {
    return this.#diaria * dias;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, diaria, portas) {
    super(marca, modelo, diaria);
    this.portas = portas;
  }

  descricao() {
    return `Carro: ${this.marca} ${this.modelo} - ${this.portas} portas`;
  }

  calcularAluguel(dias) {
    const valorBase = super.calcularAluguel(dias);
    return valorBase + 30;
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, diaria, cilindradas) {
    super(marca, modelo, diaria);
    this.cilindradas = cilindradas;
  }

  descricao() {
    return `Moto: ${this.marca} ${this.modelo} - ${this.cilindradas}cc`;
  }

  calcularAluguel(dias) {
    const valorBase = super.calcularAluguel(dias);
    return valorBase * 0.9;
  }
}

class Locadora {
  constructor() {
    this.veiculos = [];
  }

  adicionarVeiculo(veiculo) {
    this.veiculos.push(veiculo);
  }

  listarVeiculos() {
    this.veiculos.forEach((v) => {
      console.log(v.descricao());
    });
  }

  calcularTotal(dias) {
    let total = 0;

    for (let v of this.veiculos) {
      total += v.calcularAluguel(dias);
    }

    return total;
  }
}

const locadora = new Locadora();

const carro = new Carro('Volkswagen', 'Fusca', 100, 2);
const moto = new Moto('Honda', 'CG 125', 70, 125);

locadora.adicionarVeiculo(carro);
locadora.adicionarVeiculo(moto);

console.log('\nLOCADORA TUNG TUNG');

console.log('\nVeículos disponíveis:');
locadora.listarVeiculos();

console.log('\nVALOR DO ALUGUEL POR 3 DIAS');
console.log(`Carro: R$ ${carro.calcularAluguel(3)}`);
console.log(`Moto: R$ ${moto.calcularAluguel(3)}`);

console.log('\nVALOR TOTAL DA LOCADORA');
console.log(`Total: R$ ${locadora.calcularTotal(3)}`);
