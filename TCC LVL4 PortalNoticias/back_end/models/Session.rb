require 'mongoid'
require 'securerandom'

class Session
  include Mongoid::Document
  include Mongoid::Timestamps

  field :access_token, type: String
  field :expires_at, type: Time

  belongs_to :user

  index({ access_token: 1 }, { unique: true })

  def generate_token!
    self.access_token = SecureRandom.hex(32)
    self.expires_at = Time.now + 60 * 60 * 24
  end

  def expired?
    Time.now > self.expires_at
  end
end