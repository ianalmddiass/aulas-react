require "sinatra"
require "mongoid"
require "json"

Mongoid.load! (
    File.join(
        File.dirname(__FILE__), "config", "mongoid.yml"
    )
)

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
    halt 404, { message: "User not found" }.to_json unless item
    @user.to_json
end

post "/" do
    # data = JSON.parse(request.body.read)
    data = request.body.read
    puts "--->> #{data}"
    @user = Usuario.create(data)
    puts "--->> #{@user}"
    
    status 201
    @user.to_json
end