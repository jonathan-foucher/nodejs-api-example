import express from 'express'
import * as logger from './utils/logger.js'

const port = process.env.HTTP_PORT || 8080
const app = express()
app.use(express.json())

app.get('/api/movies', (req, res) => {
    logger.info('Get all movies')
    res.end()
  })
  .post('/api/movies', (req, res) => {
    logger.info(`Post movie ${req.body}`)
    res.end()
  })
  .delete('/api/movies/:movieId', (req, res) => {
    logger.info(`Delete movie ${req.params.movieId}`)
    res.end()
  })

const server = app.listen(port, () => logger.info(`Application is listening on port ${port}`))

process.on('SIGTERM', () => server.close(() => logger.info('Http server closed')))
