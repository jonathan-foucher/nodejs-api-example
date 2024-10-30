import express from 'express'
import * as logger from './utils/logger.js'
import * as dbConnection from './db-connection.js'

const port = process.env.HTTP_PORT || 8080
const app = express()
app.use(express.json())

app.get('/api/movies', (req, res) => {
    logger.info('Get all movies')
    dbConnection.getAllMovies()
      .then(movies => res.json(movies))
  })
  .post('/api/movies', (req, res) => {
    logger.info(`Post movie with id ${req.body.id}`)
    dbConnection.saveMovie(req.body)
      .then(() => res.end())
  })
  .delete('/api/movies/:movieId', (req, res) => {
    logger.info(`Delete movie with id ${req.params.movieId}`)
    dbConnection.deleteMoveById(req.params.movieId)
      .then(() => res.end())
  })

const server = app.listen(port, () => logger.info(`Application is listening on port ${port}`))

process.on('SIGTERM', () => server.close(() => logger.info('Http server closed')))
