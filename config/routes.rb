Rails.application.routes.draw do
  root "statics#index"
  resources :movies, only: :index
end
