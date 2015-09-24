Rails.application.routes.draw do
  root to: 'application#index'

  resources :todo_items, only: [:index, :new, :create, :update, :destroy]
end
