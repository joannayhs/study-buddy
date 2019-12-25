class QuizManager {
    constructor(quiz){
        this.quiz = quiz
        this.id = quiz.id
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
            .then(questions => {
                let quizQuestions = questions.filter(question => question.quiz_id === this.id)
                console.log(quizQuestions)
                quizQuestions.forEach(question => new Question(question))
            })
        }
}