import Ingrediente from '#models/ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Ingrediente.createMany([
      { nome: 'Tomate', descricao: 'Tomate vermelho suculento, ótimo para saladas e molhos.' },
      { nome: 'Cebola', descricao: 'Cebola amarela fresca, adiciona sabor e aroma a diversos pratos.' },
      { nome: 'Cenoura', descricao: 'Cenoura crocante e doce, rica em betacaroteno e nutrientes.' },
      { nome: 'Batata', descricao: 'Batata branca versátil, perfeita para fritar, assar ou cozinhar.' },
      { nome: 'Pimentão', descricao: 'Pimentão verde fresco, ótimo para saladas, refogados e grelhados.' },
      { nome: 'Abacaxi', descricao: 'Abacaxi maduro e suculento, excelente fonte de vitamina C.' },
      { nome: 'Morango', descricao: 'Morango fresco e doce, ideal para sobremesas e lanches.' },
      { nome: 'Uva', descricao: 'Uva roxa suculenta, perfeita para consumir in natura ou em sucos.' },
      { nome: 'Pêssego', descricao: 'Pêssego suculento e aromático, delicioso como lanche ou em sobremesas.' },
      { nome: 'Kiwi', descricao: 'Kiwi verde refrescante, rico em vitamina C e fibras.' },
      { nome: 'Pera', descricao: 'Pera suculenta e doce, ideal para comer fresca ou em saladas.' },
      { nome: 'Maçã', descricao: 'Maçã vermelha crocante, ótima como lanche ou em receitas assadas.' },
      { nome: 'Laranja', descricao: 'Laranja suculenta e refrescante, fonte de vitamina C e antioxidantes.' },
      { nome: 'Banana', descricao: 'Banana madura e doce, rica em potássio e energia.' },
      { nome: 'Frango', descricao: 'Peito de Frango Congelado.' },
      { nome: 'Melão', descricao: 'Melão fresco e suculento, excelente opção para saladas e sobremesas.' },
      { nome: 'Limão', descricao: 'Limão amarelo cítrico, usado para temperar pratos e preparar bebidas refrescantes.' },
      { nome: 'Pepino', descricao: 'Pepino fresco e crocante, ótimo para saladas e conservas.' },
      { nome: 'Brócolis', descricao: 'Brócolis verde nutritivo, rico em vitaminas e minerais essenciais.' },
      { nome: 'Espinafre', descricao: 'Espinafre fresco e folhoso, ótima fonte de ferro e fibras.' }
    ])
  }
}