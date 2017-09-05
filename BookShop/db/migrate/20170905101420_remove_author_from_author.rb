class RemoveAuthorFromAuthor < ActiveRecord::Migration
  def change
    remove_column :authors, :author, :string
  end
end
