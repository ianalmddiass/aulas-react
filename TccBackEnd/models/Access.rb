require 'mongoid'

class Access
    include Mongoid::Document
    field :access_token, type: String
    belongs_to :user
end