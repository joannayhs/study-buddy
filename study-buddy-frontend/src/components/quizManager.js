class QuizManager {
    constructor(quiz){
        this.quiz = quiz
        this.questions = quiz.questions
        this.renderQuiz()
    }

    renderQuiz(){
        const quizContainer = document.getElementById('quiz-container')
        quizContainer.classList.remove('hide')
        let quizTitle = document.createElement('h1')
        quizTitle.innerText = this.quiz.title
        quizContainer.appendChild(quizTitle)
        this.loadQuestion()
    }

    loadQuestion() {
        const quizContainer = document.getElementById('quiz-container')
        let questionCard = document.createElement('div')
        questionCard.classList.add('question-card')
        quizContainer.appendChild(questionCard)
        
    }
}