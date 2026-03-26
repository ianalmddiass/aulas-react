require 'mongoid'

class Post
    include Mongoid::Document
    field :title, type: String
    field :content, type: String
    field :sport, type: String
end