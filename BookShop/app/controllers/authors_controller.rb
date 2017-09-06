class AuthorsController < ApplicationController

  # def create
  #   genre = Genre.create( { genre: params[:genre]} )
  #   render ( json: genre)
  # end

  def index
    authors = Author.all
    render :json => authors
  end

end