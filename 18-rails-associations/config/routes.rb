Rails.application.routes.draw do
  resources :sheep
  resources :grandmas
  # get '/grandmas', to: 'grandmas#index', as: 'grandmas'
  # get '/grandmas/:id', to: 'grandmas#show', as: 'grandma'

  # get '/grandams/new', to: 'grandmas#new', as: 'new_grandma'
  # post '/grandmas', to: 'grandmas#create'

  # get '/grandmas/:id/edit', to: 'grandmas#edit', as: 'edit_grandma'
  # patch '/grandmas/:id', to: 'grandmas#update'
  # put '/grandmas/:id', to: 'grandmas#update'

  # delete '/grandmas/:id', to: 'grandmas#destroy'
end
