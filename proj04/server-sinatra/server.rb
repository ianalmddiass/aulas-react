require 'sinatra'
require 'rack/cors'
require 'json'
require_relative 'content'

# CONFIGURAÇÕES DO SINATRA
set :port, '4000'
#set :bind, '200.100.0.52'

# CONFIGURAÇÕES DO CORS
use Rack::Cors do
    allow do
        origins '*'
        resource '*', headers: :any, methods: [:get] 
    end 
end

get '/' do
    content_type :json
    return { mensagem: 'Olá mundo'}.to_json
end

get '/api' do
    content_type :json
    b = get_book
    p b
    return b.to_json
end

get '/api/:amount' do
    content_type :json
    b = get_books(params[:amount].to_i)
    p b
    return b.to_json
end