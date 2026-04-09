require_relative 'base_controller'
require_relative '../models/User'

class UsersController < BaseController

  post '/users' do
    data = JSON.parse(request.body.read)

    user = User.new(username: data['username'])
    user.password = data['password']

    if user.save
      user.to_json
    else
      status 400
      { message: "dados inválidos" }.to_json
    end
  end
end