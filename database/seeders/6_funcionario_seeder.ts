import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Funcionario.createMany([
      {
        nome: 'José Comer',
        cpf: '123.456.789-12',
        endereco: 'Rua 5 Valadares',
        sexo: 'M',
        telefone: '(11) 98765-4321',
        cargoId: 5 // Entregador
      },
      {
        nome: 'João Santos',
        cpf: '987.654.321-10',
        endereco: 'Av. Central, 123',
        sexo: 'M',
        telefone: '(11) 12345-6789',
        cargoId: 3 // Garçom
      },
      {
        nome: 'Maria Oliveira',
        cpf: '456.789.123-10',
        endereco: 'Rua das Flores, 456',
        sexo: 'F',
        telefone: '(11) 55555-5555',
        cargoId: 6 // Recepcionista
      },
      {
        nome: 'José Pereira',
        cpf: '321.654.987-10',
        endereco: 'Rua do Comércio, 789',
        sexo: 'M',
        telefone: '(11) 77777-7777',
        cargoId: 2 // Cozinheiro
      },
      {
        nome: 'Carla Silva',
        cpf: '111.222.333-44',
        endereco: 'Rua da Amizade, 321',
        sexo: 'F',
        telefone: '(11) 99999-9999',
        cargoId: 4 // Gerente
      },
      {
        nome: 'Rafaela Souza',
        cpf: '555.666.777-88',
        endereco: 'Rua dos Passarinhos, 789',
        sexo: 'F',
        telefone: '(11) 33333-3333',
        cargoId: 1 // Zelador
      },
      {
        nome: 'Carlos Oliveira',
        cpf: '999.888.777-66',
        endereco: 'Av. das Árvores, 456',
        sexo: 'M',
        telefone: '(11) 44444-4444',
        cargoId: 5 // Entregador
      },
      {
        nome: 'Fernanda Costa',
        cpf: '222.333.444-55',
        endereco: 'Rua do Sol, 789',
        sexo: 'F',
        telefone: '(11) 66666-6666',
        cargoId: 3 // Garçom
      },
      {
        nome: 'Paulo Mendes',
        cpf: '777.888.999-00',
        endereco: 'Av. da Praia, 123',
        sexo: 'M',
        telefone: '(11) 22222-2222',
        cargoId: 6 // Recepcionista
      },
      {
        nome: 'Renata Silva',
        cpf: '444.555.666-77',
        endereco: 'Rua das Pedras, 987',
        sexo: 'F',
        telefone: '(11) 88888-8888',
        cargoId: 2 // Cozinheiro
      },
      
    ])
  }
}
