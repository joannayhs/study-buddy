class QuizManager {
    constructor(quiz){
        this.quiz = quiz
        this.id = quiz.id
        this.renderQuiz()
    }

    renderQuiz(){
        const quizSelectContainer = document.querySelector('.quiz-select-container')

        if (quizSelectContainer) {
            quizSelectContainer.parentElement.removeChild(quizSelectContainer)
        }

        const mainContainer = document.getElementById('main-container')
        const quizContainer = document.createElement('div')
        quizContainer.classList.add('quiz-container')
        mainContainer.appendChild(quizContainer)

        let quizTitle = document.createElement('h1')
        quizTitle.innerText = this.quiz.title

        let startButton =  document.createElement('button')
        startButton.id = "start-button"
        startButton.innerText = "start quiz"

        startButton.addEventListener('click', (e) => {
            startButton.parentElement.removeChild(startButton)
            new Question(this.quiz)
        })

        quizContainer.appendChild(quizTitle)
        quizContainer.appendChild(startButton)  
    }

}