require "sinatra"
require "rack/cors"
require "mongoid"

require_relative './controllers/posts_controller'
require_relative './controllers/users_controller'
require_relative './controllers/auth_controller'

use Rack::Cors do
  allow do
    origins "*"
    resource "*", headers: :any, methods: [:get, :post, :put, :delete]
  end
end

Mongoid.load!('config/mongoid.yml')

# monta controllers
use PostsController
use UsersController
use AuthController

get "/" do
  { message: "bem vindo!" }.to_json
end