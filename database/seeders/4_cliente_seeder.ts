import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Cliente.createMany([
      {nome: 'Ana Silva', cpf: '123.456.789-10', telefone: '(11) 98765-4321', email: 'ana.silva@email.com'},
      {nome: 'Pedro Santos', cpf: '234.567.890-21', telefone: '(21) 99876-5432', email: 'pedro.santos@email.com'},
      {nome: 'Maria Oliveira', cpf: '345.678.901-32', telefone: '(31) 98765-4321', email: 'maria.oliveira@email.com'},
      {nome: 'João Souza', cpf: '456.789.012-43', telefone: '(41) 99876-5432', email: 'joao.souza@email.com'},
      {nome: 'Juliana Pereira', cpf: '567.890.123-54', telefone: '(51) 98765-4321', email: 'juliana.pereira@email.com'},
      {nome: 'Lucas Santos', cpf: '678.901.234-65', telefone: '(61) 99876-5432', email: 'lucas.santos@email.com'},
      {nome: 'Carla Lima', cpf: '789.012.345-76', telefone: '(71) 98765-4321', email: 'carla.lima@email.com'},
      {nome: 'Fernando Silva', cpf: '890.123.456-87', telefone: '(81) 99876-5432', email: 'fernando.silva@email.com'},
      {nome: 'Laura Mendes', cpf: '901.234.567-98', telefone: '(91) 98765-4321', email: 'laura.mendes@email.com'},
      {nome: 'Roberto Pereira', cpf: '012.345.678-09', telefone: '(01) 99876-5432', email: 'roberto.pereira@email.com'},
      {nome: 'Mariana Oliveira', cpf: '123.456.789-01', telefone: '(12) 98765-4321', email: 'mariana.oliveira@email.com'},
      {nome: 'Rafaela Santos', cpf: '234.567.890-12', telefone: '(22) 99876-5432', email: 'rafaela.santos@email.com'},
      {nome: 'Gabriel Almeida', cpf: '345.678.901-23', telefone: '(32) 98765-4321', email: 'gabriel.almeida@email.com'},
      {nome: 'Camila Lima', cpf: '456.789.012-34', telefone: '(42) 99876-5432', email: 'camila.lima@email.com'},
      {nome: 'André Fernandes', cpf: '567.890.123-45', telefone: '(52) 98765-4321', email: 'andre.fernandes@email.com'},
      {nome: 'Patrícia Santos', cpf: '678.901.234-56', telefone: '(62) 99876-5432', email: 'patricia.santos@email.com'},
      {nome: 'Diego Oliveira', cpf: '789.012.345-67', telefone: '(72) 98765-4321', email: 'diego.oliveira@email.com'},
      {nome: 'Amanda Silva', cpf: '890.123.456-78', telefone: '(82) 99876-5432', email: 'amanda.silva@email.com'},
      {nome: 'Ricardo Pereira', cpf: '901.234.567-89', telefone: '(92) 98765-4321', email: 'ricardo.pereira@email.com'},
      {nome: 'Fernanda Oliveira', cpf: '012.345.678-90', telefone: '(02) 99876-5432', email: 'fernanda.oliveira@email.com'}
    ])

  }
}
