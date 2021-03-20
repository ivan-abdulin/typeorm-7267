import 'reflect-metadata'
// import { Container } from 'typedi'
import { Container } from 'typeorm-typedi-extensions'
import { useContainer, ConnectionManager, getConnectionOptions, getRepository } from 'typeorm'
import Book from './Entities/Book'

async function main () {
  useContainer(Container)

  const connectionOptions = await getConnectionOptions('default')
  if (typeof connectionOptions.entities !== 'undefined' && connectionOptions.entities.length === 0) {
    connectionOptions.entities.push(Book)
  }

  await Container
    .get(ConnectionManager)
    .create(connectionOptions)
    .connect()

  const bookRepo = getRepository(Book)
  const books = await bookRepo.find()

  console.table(books)
}

main()
