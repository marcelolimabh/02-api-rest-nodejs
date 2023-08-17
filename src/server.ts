import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'
import { env } from './env'

const app = fastify()

app.get('/hello', async (req, res) => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste 4',
      amount: 1000,
    })
    .returning('*')
  return transaction
})
app.get('/transactions/searchAll', async (req, res) => {
  const transactions = await knex('transactions').select('*')
  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('listening on port 3333')
  })
