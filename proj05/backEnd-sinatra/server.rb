require "sinatra"
require "sinatra/cors"
require "mongoid"
require "json"

Mongoid.load!('config/mongoid.yml', :development)

set :allow_origin, '*'
set :allow_methods, 'GET, POST, PUT, DELETE, HEAD'
set :allow_headers, 'content-type, if-modified-since'
set :expose_headers, 'location, link'

class Usuario 
    include Mongoid::Document
    field :nome, type: String
    field :email, type: String
    field :senha, type: String
    # field :nascimento, type: Date
end

before do
    content_type :json 
end

get "/" do
    @users = Usuario.all
    @users.to_json
end

get "/:id" do
    @user = Usuario.find_by(_id: params[:id])
    halt 404, { message: "User not found" }.to_json unless @user
    @user.to_json
end

post "/" do
    # data = JSON.parse(request.body.read)
    data = JSON.parse request.body.read
    @user = Usuario.new(data)
    if @user.save!
        status 201
        @user.to_json
    else
        status 400
        { message: 'Dados inválidos' }.to_json
    end
end

put "/:id" do
    user = Usuario.find_by _id: params[:id]
    if user
        data = JSON.parse request.body.read
        if user.update data
            user.to_json
        else
            status 422
            {error: user.errors.full_messages}.to_json
        end
    else
        status 404
        {error: "user not found"}.to_json
    end
end

delete "/:id" do
    user = Usuario.find_by _id: params[:id]
    if user
        user.destroy
        status 204
    else
        status 404
        {error: "user not found"}.to_json
    end
end