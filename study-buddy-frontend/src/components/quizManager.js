class QuizManager {
    constructor(quiz){
        this.quiz = quiz
        this.renderQuiz()
    }

    renderQuiz(){
        const quizContainer = document.getElementById('quiz-container')
        quizContainer.classList.remove('hide')
        this.loadQuestion()
    }

    loadQuestion() {
        const quizContainer = document.getElementById('quiz-container')

        let questionCard = document.createElement('div')
        questionCard.classList.add('question-card')
        let quizTitle = document.createElement('h1')
        quizTitle.innerText = this.quiz.title
        questionCard.appendChild(quizTitle)
        quizContainer.appendChild(questionCard)
        
    }
}