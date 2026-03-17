require "sinatra"
require "sinatra/cors"
require "puma"
require "mongoid"
require "json"

Mongoid.load!('config/mongoid.yml')

set :allow_origin, "*"
set :allow_methods, "GET, POST, PUT, DELETE, HEAD"

class Post
    include Mongoid::Document
    field :title, type: String
    field :content, type: String
end

before do
    content_type :json
end


get "/" do
    {message: "bem vindo!01"}.to_json 
end

get '/posts' do
    @posts = Post.all
    @posts.to_json
end

get "/posts/:id" do
    @post = Post.find params[:id]
    halt 404, { message: "post not found"}.to_json unless @post
    @post.to_json 
end

post "/posts" do
    data = JSON.parse(request.body.read, symbolize_names: true)

    post = Post.new(data)

    if post.save
        post.to_json
    else
        status 400
        {message: "dados inválidos" }.to_json

    end
end

delete "/posts/:id" do
    post = Post.find params[:id]
    if post
        post.destroy
    else
        status 404
        {message: "post not found"}.to_json
    end
end
