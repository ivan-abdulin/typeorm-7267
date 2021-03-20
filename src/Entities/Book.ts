import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('books')
class Book {
  @PrimaryGeneratedColumn()
  public readonly id: number

  @Column()
  public name: string
}

export default Book
