class GenresController < ApplicationController

  # def create
  #   genre = Genre.create( { genre: params[:genre]} )
  #   render ( json: genre)
  # end

  def index
    genres = Genre.all
    render :json => genres
  end

end