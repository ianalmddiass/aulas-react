require 'mongoid'

class Session
    include Mongoid::Document

    field :user_id, type: String
    field :access_token, type: String
    field :expires_at, type: Time

    def expired?
        Time.now > self.expires_at
    end

    def generate_token!
        nrand = Random.new
        self.access_token = "#{user_id}#{Time.now.strftime('%d%m%Y%S%M%H')}#{nrand.rand(10000)}"
    end
end