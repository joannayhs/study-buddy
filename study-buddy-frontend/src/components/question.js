class Question {
    constructor(quiz){
        this.adapter = new QuestionAdapter()
        this.questions =  []
        this.quiz = quiz
        this.fetchAndloadQuestion()
    }
    fetchAndloadQuestion() {
        return this.adapter.getQuestions()
            .then(questions => {
                let quizQuestions = questions.filter(question => question.quiz_id === this.quiz.id)
                quizQuestions.forEach(question => console.log(question))
            })
    }

    renderQuestion()  {
        const quizContainer = document.getElementById('quiz-container')
        const startButton = document.getElementById('start-button')
        startButton.classList.add('hide')

        let questionCard = document.createElement('div')
        questionCard.classList.add('question-card')
        questionCard.innerText = this.text
        this.loadOptions()
        quizContainer.appendChild(questionCard)

    }

    loadOptions() {
        const questionCard = document.querySelector('.question-card')
        console.log(questionCard)
        // this.options.forEach(option => {
        //     const button = document.createElement('button')
        //     button.innerText = option.text
        //     questionCard.appendChild(button)
        // })
    }
}