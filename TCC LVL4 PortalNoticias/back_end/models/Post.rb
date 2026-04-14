require 'mongoid'

class Post
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :content, type: String
  field :sport, type: String

  belongs_to :user

  validates :title, presence: true
  validates :content, presence: true
  validates :sport, presence: true
end