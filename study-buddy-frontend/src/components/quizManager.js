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
        let startButton =  document.createElement('button')
        startButton.id = "start-button"
        startButton.innerText = "start quiz"
        startButton.addEventListener('click', (e) => this.loadQuestion())
        quizContainer.appendChild(quizTitle)
        quizContainer.appendChild(startButton)
        

    }

    loadQuestion() {
        const quizContainer = document.getElementById('quiz-container')
        const startButton = document.getElementById('start-button')
        startButton.classList.add('hide')
        let questionCard = document.createElement('div')
        questionCard.classList.add('question-card')
        this.questions.forEach(question => {
            let questionText = document.createElement('p')
            questionText.innerText = question.text
            questionCard.appendChild(questionText)
            this.loadOptions(question)
        })
        quizContainer.appendChild(questionCard)
        
    }

    loadOptions(question){
        
    }
}