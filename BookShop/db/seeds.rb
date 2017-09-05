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

a1 = Author.create({ name: "Patrick Rothfuss" })
a2 = Author.create({ name: "David Gunn" })

book1 = Book.create({ title: "The Name of the Wind", quantity: 10, genre_id: g1.id, author_id: a1.id})

book2 = Book.create({ title: "Death's Head", quantity: 5, genre_id: g2.id, author_id: a2.id})