require_relative 'base_controller'

class AuthController < BaseController

  post '/session' do
    data = JSON.parse(request.body.read)

    user = User.find_by(username: data['username'])
    halt 422, { message: "dados inválidos" }.to_json unless user

    if user.authenticate(data['password'])
      Session.where(user: user).destroy_all

      session = Session.new(user: user)
      session.generate_token!
      session.save

      {
        access_token: session.access_token,
        user_id: user.id,
        admin: user.admin
      }.to_json
    else
      status 422
      { message: "dados inválidos" }.to_json
    end
  end

  delete '/session' do
    authenticate!

    Session.where(user: @current_user).destroy_all

    { message: "logout realizado" }.to_json
  end
end