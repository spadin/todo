Rails.application.routes.draw do
  root to: 'application#index'

  resources :todo_items, only: [:index, :new, :create, :update, :destroy]

  namespace :api do
    resources :todo_items, only: [:index, :create, :update, :destroy]
  end
end
