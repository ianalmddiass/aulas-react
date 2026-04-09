require 'mongoid'
require 'bcrypt'

class User
  include Mongoid::Document
  include BCrypt

  field :username, type: String
  field :password_digest, type: String
  field :admin, type: Boolean, default: false

  has_many :sessions

  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true

  def password=(new_password)
    self.password_digest = Password.create(new_password)
  end

  def authenticate(password)
    Password.new(self.password_digest) == password
  end
end