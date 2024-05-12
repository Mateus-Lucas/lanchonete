// import type { HttpContext } from '@adonisjs/core/http'

import ProdutoIngrediente from "#models/produto_ingrediente";
import { HttpContext } from "@adonisjs/core/http";

export default class ProdutoIngredienteController {

    // Paginação de ProdutoIngredientes
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await ProdutoIngrediente.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await ProdutoIngrediente.findOrFail(params.id)
    }

    // Método para criar algum ProdutoIngrediente pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['produtoId', 'ingredienteId'])
        return await ProdutoIngrediente.create(dados)
    }

    async update({params, request}: HttpContext){
        const produtosIngrediente = await ProdutoIngrediente.findOrFail(params.id)
        const dados = request.only(['produtoId', 'ingredienteId'])
        
        produtosIngrediente.merge(dados)
        return await produtosIngrediente.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const produtosIngrediente = await ProdutoIngrediente.findOrFail(params.id)

        await produtosIngrediente.delete()
        return { msg: 'Registro deletado com sucesso', produtosIngrediente }

    }
}