class Api::V1::QuizzesController < ApplicationController

    def index 
        quizzes = Quiz.all 
        render json: quizzes, include:[:questions, :options]
    end 

    def show  
        @quiz = Quiz.find(params[:id])
        render json: @quiz, include:[:questions, :options]
    end 

    def create
        @quiz = Quiz.create(quiz_params)
        render json: @quiz, include:[:questions, :options]
    end 

    def update 
        @quiz = Quiz.find(params[:id])
        @quiz.update(quiz_params)
        render json: @quiz
    end

    def destroy 
        @quiz = Quiz.find(params[:id])
        @quiz.destroy 
    end

    private 

    def quiz_params 
        params.require(:quiz).permit(:title, :subject, :completed)
    end 
end
