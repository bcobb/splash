Splash::Application.routes.draw do
  root to: 'interested_users#new'
  post '/' => 'interested_users#create'
end
