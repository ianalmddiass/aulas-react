require "sinatra"
require "sinatra/cors"
require "mongoid"
require "json"

Mongoid.load!('config/mongoid.yml', :development)

set :allow_origin, '*'
set :allow_methods, 'GET, POST, PUT, DELETE, HEAD'
set :allow_headers, 'content-type, if-modified-since'
set :expose_headers, 'location, link'

class Product
    include Mongoid::Document
    field :preco, type: Numeric
    field :marca, type: String
    field :modelo, type: String
    field :descricao, type: String
    field :promocao, type: Boolean
    
    embeds_many :images
    accepts_nested_attributes_for :images, allow_destroy: true
end

class Image
    include Mongoid::Document
    field :url, type: String

    embedded_in :product
end

before do
    content_type :json 
end

get "/" do
    @Produtos = Product.all
    @Produtos.to_json
end

get "/:id" do
    @Produto = Product.find_by(_id: params[:id])
    halt 404, { message: "Product not found" }.to_json unless @Produto
    @Produto.to_json
end

post "/" do
    data = JSON.parse request.body.read

    produto = Product.new(data)

    if produto.save!
        produto.to_json
    else
        status 400
        { message: 'Dados inválidos' }.to_json
    end
end

put "/:id" do
    Produto = Product.find_by _id: params[:id]
    if Produto
        data = JSON.parse request.body.read
        if Produto.update data
            Produto.to_json
        else
            status 422
            {error: Produto.errors.full_messages}.to_json
        end
    else
        status 404
        {error: "Product not found"}.to_json
    end
end

delete "/:id" do
    Produto = Product.find_by _id: params[:id]
    if Produto
        Produto.destroy
        status 204
    else
        status 404
        {error: "Product not found"}.to_json
    end
end