import Comanda from '#models/comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Comanda.createMany([
      {
        mesa: '15',
        funcionarioId: 2,
        clienteId: 5,
        dataPagamento: '2024-05-12T04:15:55.000+00:00',
        data: '2024-05-12T04:15:55.000+00:00'
      },
      {
        mesa: '20',
        funcionarioId: 8,
        clienteId: 6,
        dataPagamento: '2024-05-12T04:15:55.000+00:00',
        data: '2024-05-12T04:15:55.000+00:00'
      },
      {
        mesa: '25',
        funcionarioId: 2,
        clienteId: 7,
        dataPagamento: '2024-05-12T05:30:00.000+00:00',
        data: '2024-05-12T04:15:55.000+00:00'
      },
      {
        mesa: '15',
        funcionarioId: 2,
        clienteId: 8,
        dataPagamento: '2024-05-16T04:15:55.000+00:00',
        data: '2024-05-12T04:15:55.000+00:00'
      },
      {
        mesa: '30',
        funcionarioId: 8,
        clienteId: 9,
        dataPagamento: '2024-05-12T04:15:55.000+00:00',
        data: '2024-05-12T04:15:55.000+00:00'
      },
      {
        mesa: '35',
        funcionarioId: 8,
        clienteId: 10,
        dataPagamento: '2024-05-18T12:45:30.000+00:00',
        data: '2024-05-12T04:15:55.000+00:00'
      },
      {
        mesa: '15',
        funcionarioId: 2,
        clienteId: 11,
        dataPagamento: '2024-05-12T06:20:10.000+00:00',
        data: '2024-05-12T04:15:55.000+00:00'
      },
      {
        mesa: '40',
        funcionarioId: 8,
        clienteId: 12,
        dataPagamento: '2024-05-12T04:15:55.000+00:00',
        data: '2024-05-20T08:30:00.000+00:00'
      }
    ])

  }
}