import pg from 'pg'
const { Pool } = pg
import * as logger from './utils/logger.js'

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

const getAllMovies = () => {
  const query = `select * from movie;`
  return pool.query(query)
    .then((results) => results.rows)
    .catch((error) => { throw error })
}

process.on('SIGTERM', () => {
  pool.end()
  logger.info('Database pool shut down')
})

export { getAllMovies }
