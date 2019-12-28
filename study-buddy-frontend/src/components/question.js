class Question {
    constructor(quiz){
        this.adapter = new QuestionAdapter()
        this.quiz = quiz
        this.fetchAndloadQuestion()
        this.currentQuestionIndex = 0
    }
    fetchAndloadQuestion() {
        return this.adapter.getQuestions()
            .then(questions => {
                let quizQuestions = questions.filter(question => question.quiz_id === this.quiz.id)
                this.renderQuestion(quizQuestions)
            })
    }

    renderQuestion(questionArray)  {
        const quizContainer = document.querySelector('.quiz-container')

        let questionCard = document.createElement('div')
        questionCard.classList.add('question-card')
        questionCard.innerText = questionArray[this.currentQuestionIndex].text
        quizContainer.appendChild(questionCard)
        this.loadOptions(questionArray[this.currentQuestionIndex])

    }
    
    loadOptions(question) {
        const questionCard = document.querySelector('.question-card')
        let options = []
        question.options.forEach(option => {
            options.push(option)
            let optionButton = document.createElement('button')
            optionButton.classList.add('option-button')
            optionButton.innerText = option.text 
            questionCard.appendChild(optionButton)
            optionButton.addEventListener('click', (e) => {
                this.currentQuestionIndex++ 
                this.checkAnswer(e, options)
            })
        })
    }

    checkAnswer(e, options){
        console.log(options.find(option => option.text === e.target.innerText))
        

    }
}