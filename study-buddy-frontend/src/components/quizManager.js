class QuizManager {
    constructor(quiz){
        this.quiz = quiz
        this.id = quiz.id
        this.renderQuiz()
    }

    renderQuiz(){
        const quizContainer = document.getElementById('quiz-container')
        quizContainer.classList.remove('hide')
        let quizTitle = document.createElement('h1')
        quizTitle.innerText = this.quiz.title
        let startButton =  document.createElement('button')
        startButton.id = "start-button"
        startButton.innerText = "start quiz"
        startButton.addEventListener('click', (e) => new Question(this.quiz))
        quizContainer.appendChild(quizTitle)
        quizContainer.appendChild(startButton)  

    }

}