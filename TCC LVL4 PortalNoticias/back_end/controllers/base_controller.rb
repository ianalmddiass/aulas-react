require 'sinatra/base'
require_relative '../models/User'
require_relative '../models/Session'

class BaseController < Sinatra::Base
  before do
    content_type :json
  end

  def authenticate!
    token = request.env["HTTP_AUTHORIZATION"]

    halt 401, { message: "token não fornecido" }.to_json unless token

    session = Session.where(access_token: token).first
    halt 401, { message: "não autorizado" }.to_json unless session
    halt 401, { message: "sessão expirada" }.to_json if session.expired?

    @current_user = session.user
  end

  def authorize_admin!
    halt 403, { message: "acesso negado" }.to_json unless @current_user.admin
  end
end