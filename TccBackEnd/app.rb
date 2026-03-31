require "sinatra"
require "rack/cors"
require "mongoid"
require "json"
require_relative './models/Post'
require_relative './models/User'
require_relative './models/Session'

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

# helpers do
#     def protected!
#         token = request.env['HTTP_AUTHORIZATION']&.split(' ')&.last
#         @current_user = User.where(access_token: token).first 
#         if token
#             halt 401, "not authorized" unless @current_user            
#         end
#     end  
# end


get "/" do
    {message: "bem vindo!"}.to_json 
end


# o url filtrando  funciona com "?q=x" onde o x é o parametro de pesquisa
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

# falta t autenticação
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

# falta autenticação
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
    data = JSON.parse(request.body.read)
    @user = User.new(data)
    
    if @user.save
        @user.to_json
    else
        status 400
        {message: "dados inválidos"}.to_json
    end
end

post '/session' do
    data = JSON.parse(request.body.read)
    @user = User.where(username: data['username'])
    @session = Session.where(user_id: @user._id)
    
    if @user
        if data['password'] == @user.password
            if @session
                status 422
                {message: "Usuário já conectado"}.to_json
            else
                @session = Session.new(data)
                @session.generate_token!
                @session.save
                status 201
                { access_token: @session.access_token, user_id: @session.user_id }.to_json
            end
        else
            status 422
            { message: "dados inválidos" }.to_json
        end
    else
        status 422
        { message: "dados inválidos" }.to_json
    end
end

delete '/session' do
      
end