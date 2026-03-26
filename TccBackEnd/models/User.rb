require 'mongoid'

class User
    include Mongoid::Document
    field :username, type: String
    field :password, type: String
    has_one :access
end