import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Cargo.createMany([
      {nome: 'Zelador'},
      {nome: 'Cozinheiro'},
      {nome: 'Garçom'},
      {nome: 'Gerente'},
      {nome: 'Entregador'},
      {nome: 'Recepcionista'}
    ])
    
  }
}