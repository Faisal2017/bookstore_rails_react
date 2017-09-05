class BooksController < ApplicationController

  def index
    books = Book.all
    #render :json => books
    render :json => books.as_json( 
    { include: [{genre: {only: :name}}, {author: {only: :name}}] } 
    )
  end

  def show
    book = Book.find( params[:id] )
    render :json => book.as_json( 
      { include: [{genre: {only: :name}}, {author: {only: :name}}] } 
    )
  end

  # def create
  #   book = Book.create({ title: params[:title], quantity: params[:quantity], genre_id: params[genre_id], author_id[author_id] })
  # end
  
end