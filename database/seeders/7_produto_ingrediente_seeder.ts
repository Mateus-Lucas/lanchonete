import ProdutoIngrediente from '#models/produto_ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    return await ProdutoIngrediente.createMany([

      // Hot Dog Vegetariano
      {produtoId: 28, ingredienteId: 1},
      {produtoId: 28, ingredienteId: 2},
      {produtoId: 28, ingredienteId: 4},
      {produtoId: 28, ingredienteId: 5},

      // Batata Frita
      {produtoId: 29, ingredienteId: 4},

      // Nuggets de Frango
      {produtoId: 32, ingredienteId: 2},
      {produtoId: 32, ingredienteId: 14}

    ])
  }
}