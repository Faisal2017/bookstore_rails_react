# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Genre.delete_all()
Author.delete_all()
Book.delete_all()

g1 = Genre.create({ name: "Fantasy" })
g2 = Genre.create({ name: "Science Fiction" })

g3 = Genre.create({ name: "Children's Fiction" })
g4 = Genre.create({ name: "Mystery" })

g5 = Genre.create({ name: "Classical" })
g6 = Genre.create({ name: "Crime" })

a1 = Author.create({ name: "Patrick Rothfuss" })
a2 = Author.create({ name: "David Gunn" })

a3 = Author.create({ name: "JK Rowling"})
a4 = Author.create({ name: "Dan Brown"})

a5 = Author.create({ name: "Charles Dickens"})
a6 = Author.create({ name: "Thomas Harris"})

book1 = Book.create({ title: "The Name of the Wind", quantity: 10, genre_id: g1.id, author_id: a1.id})

book2 = Book.create({ title: "Death's Head", quantity: 5, genre_id: g2.id, author_id: a2.id})

book3 = Book.create({ title: "Harry Potter Series", quantity: 20, genre_id: g3.id, author_id: a3.id})

book4 = Book.create({ title: "Angels & Demons", quantity: 16, genre_id: g4.id, author_id: a4.id})

book5 = Book.create({ title: "A Tale of Two Cities", quantity: 7, genre_id: g5.id, author_id: a5.id})

book5 = Book.create({ title: "Red Dragon", quantity: 13, genre_id: g6.id, author_id: a6.id})