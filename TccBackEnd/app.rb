require "sinatra"
require "rack/cors"
require "mongoid"
require "json"
require_relative './models/Post'
require_relative './models/User'
require_relative './models/Access'

use Rack::Cors do
    allow do
        origins "*"
        resource "*", headers: :any, methods: [:get, :post, :put, :delete, :head, :options]
    end
end

set :bind, '200.100.0.37'
set :port, 80

Mongoid.load!('config/mongoid.yml')

before do
    content_type :json
end


get "/" do
    {message: "bem vindo!01"}.to_json 
end


# o url filtrando  funciona com "?q=x" onde o x é o paramêtro de pesquisa
get '/posts' do
    @q = params[:q]
    puts ">>> #{@q}"
    if @q
        @posts = Post.where( sport: /#{@q}/i )
        @posts = @posts + Post.where( title: /#{@q}/i )
        @posts = @posts + Post.where( content: /#{@q}/i )

    else
        @posts = Post.all
    end
    @posts = @posts.uniq(&:title)
    @posts.to_json
end

get "/posts/:id" do
    @post = Post.find params[:id]
    halt 404, { message: "post not found"}.to_json unless @post
    @post.to_json 
end

# get "/posts/:q" do
#     @post = Posts.where( sport: params[:q] )
#     halt 404, { message: "posts not found"}.to_json unless @post
#     @post.to_json 
# end

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


post "/users" do
    puts ">>> 1) #{request.body.read}"
    puts ">>> 2) #{params}"
    data = JSON.parse(request.body.read, symbolize_names: true)
    @user = User.new(data)
    
    if @user.save
        @user.to_json
    else
        status 400
        {message: "dados inválidos"}.to_json
    end
end
        
get "/users" do
    @q = params[:q]
    
    if @q
        @users = User.where(username: /#{@q}/)
    else
        @users = User.all
    end
    @users.to_json
end