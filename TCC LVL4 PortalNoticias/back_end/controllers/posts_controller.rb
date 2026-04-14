require_relative 'base_controller'
require_relative '../models/Post'

class PostsController < BaseController

  get '/posts' do
    q = params[:q]

    posts = if q
      Post.or(
        { sport: /#{q}/i },
        { title: /#{q}/i },
        { content: /#{q}/i }
      )
    else
      Post.all
    end

    posts.to_json
  end

  get '/posts/:id' do
    post = Post.find(params[:id])
    halt 404, { message: "post not found" }.to_json unless post
    post.to_json
  end

  post '/posts' do
    authenticate!
    authorize_admin!

    data = JSON.parse(request.body.read, symbolize_names: true)

    post = Post.new(
      title: data[:title],
      content: data[:content],
      sport: data[:sport],
      user: @current_user
    )

    if post.save
      post.to_json
    else
      status 400
      { message: "dados inválidos" }.to_json
    end
  end

  delete '/posts/:id' do
    authenticate!
    authorize_admin!

    post = Post.find(params[:id])
    halt 404, { message: "post not found" }.to_json unless post

    post.destroy
    { message: "deletado com sucesso" }.to_json
  end
end