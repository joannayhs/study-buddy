Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do
      resources :quizzes do 
        resources :questions 
      end 
    
      resources :questions do 
        resources :options 
      end 
      
    end 
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
