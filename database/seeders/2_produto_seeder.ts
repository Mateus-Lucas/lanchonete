import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Produto.createMany([
      { nome: 'Coca-cola lata', preco: 6.5, tamanho: "330 ml", tipoId: 1 },
      { nome: 'Coca-cola 2L', preco: 10, tamanho: "2l", tipoId: 1 },
      { nome: 'Coca-cola 600', preco: 8, tamanho: "600 ml", tipoId: 1 },
      { nome: 'Coca-cola ks', preco: 6.5, tamanho: "290 ml", tipoId: 1 },
      { nome: 'Pepsi lata', preco: 6.0, tamanho: "330 ml", tipoId: 1 },
      { nome: 'Pepsi 2L', preco: 9.5, tamanho: "2l", tipoId: 1 },
      { nome: 'Pepsi 600', preco: 7.5, tamanho: "600 ml", tipoId: 1 },
      { nome: 'Pepsi ks', preco: 6.0, tamanho: "290 ml", tipoId: 1 },
      { nome: 'Guaraná Antárctica lata', preco: 5.5, tamanho: "330 ml", tipoId: 1 },
      { nome: 'Guaraná Antárctica 2L', preco: 9.0, tamanho: "2l", tipoId: 1 },
      { nome: 'Guaraná Antárctica 600', preco: 7.0, tamanho: "600 ml", tipoId: 1 },
      { nome: 'Guaraná Antárctica ks', preco: 5.5, tamanho: "290 ml", tipoId: 1 },
      { nome: 'Fanta lata', preco: 6.0, tamanho: "330 ml", tipoId: 1 },
      { nome: 'Fanta 2L', preco: 9.0, tamanho: "2l", tipoId: 1 },
      { nome: 'Fanta 600', preco: 7.0, tamanho: "600 ml", tipoId: 1 },
      { nome: 'Fanta ks', preco: 6.0, tamanho: "290 ml", tipoId: 1 },
      { nome: 'Sprite lata', preco: 6.5, tamanho: "330 ml", tipoId: 1 },
      { nome: 'Sprite 2L', preco: 10, tamanho: "2l", tipoId: 1 },
      { nome: 'Sprite 600', preco: 8, tamanho: "600 ml", tipoId: 1 },
      { nome: 'Sprite ks', preco: 6.5, tamanho: "290 ml", tipoId: 1 },
      { nome: 'Hambúrguer Simples', preco: 12.5, tamanho: "150g", tipoId: 2 },
      { nome: 'Hambúrguer Duplo', preco: 18.5, tamanho: "300g", tipoId: 2 },
      { nome: 'Hambúrguer Vegetariano', preco: 14.0, tamanho: "200g", tipoId: 2 },
      { nome: 'Sorvete de Chocolate', preco: 8.0, tamanho: "150g", tipoId: 3 },
      { nome: 'Cheesecake de Morango', preco: 10.5, tamanho: "Fatia", tipoId: 3 },
      { nome: 'Mousse de Maracujá', preco: 6.5, tamanho: "Porção", tipoId: 3 },
      { nome: 'Hot Dog Simples', preco: 9.0, tamanho: "Normal", tipoId: 4 },
      { nome: 'Hot Dog Especial', preco: 12.0, tamanho: "Grande", tipoId: 4 },
      { nome: 'Hot Dog Vegetariano', preco: 10.0, tamanho: "Normal", tipoId: 4 },
      { nome: 'Batata Frita', preco: 8.0, tamanho: "Porção Individual", tipoId: 5 },
      { nome: 'Anéis de Cebola', preco: 7.5, tamanho: "Porção", tipoId: 5 },
      { nome: 'Nuggets de Frango', preco: 9.0, tamanho: "Porção Média", tipoId: 5 },
    ])


  }
}