class QuizManager {
    constructor(quiz){
        this.quiz = quiz
        this.adapter = new QuestionAdapter()
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
        startButton.addEventListener('click', (e) => this.fetchAndloadQuestion())
        quizContainer.appendChild(quizTitle)
        quizContainer.appendChild(startButton)  

    }

    fetchAndloadQuestion() {
        return this.adapter.getQuestions()
            .then(question => {
                question.forEach(question => {
                    new Question(question)
                })
            }).then(() => this.loadOptions())
        }

    loadOptions(question){
        const questionCard = document.querySelector('.question-card')
        console.log(question.options)
        question.options.forEach(option => {
            const button = document.createElement('button')
            button.innerText = option.text
            questionCard.appendChild(button)
        })
    }
}