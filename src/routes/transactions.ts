import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions')
      .where('amount', 1000)
      .select('*')

    return transactions
  })
  app.get('/transactions/searchAll', async (req, res) => {
    const transactions = await knex('transactions').select('*')
    return transactions
  })
}
