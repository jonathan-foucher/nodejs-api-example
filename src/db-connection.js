import { Sequelize, DataTypes } from 'sequelize'
import * as logger from './utils/logger.js'

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)

try {
  await sequelize.authenticate()
  logger.info('Connected to the database')
} catch (error) {
  logger.error('Failed to connect to the database :')
  logger.error(error)
}

const movie = sequelize.define(
  'movie',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    tableName: 'movie'
  },
)

const getAllMovies = () => movie.findAll()

process.on('SIGTERM', () => sequelize.close()
    .then(() => logger.info('Database pool shut down')))

export { getAllMovies }
