class Question {
    constructor(quiz){
        this.adapter = new QuestionAdapter()
        this.quiz = quiz
        this.quizQuestions = undefined
        this.fetchAndloadQuestion()
        this.currentQuestionIndex = 0
    }
    fetchAndloadQuestion() {
        return this.adapter.getQuestions()
            .then(questions => {
                this.quizQuestions = questions.filter(question => question.quiz_id === this.quiz.id)
                this.renderQuestion(this.quizQuestions)
            })
    }

    renderQuestion(questionArray)  {
        const quizContainer = document.querySelector('.quiz-container')

        let questionCard = document.createElement('div')
        questionCard.classList.add('question-card')
        quizContainer.appendChild(questionCard)

        this.nextQuestion(questionArray[this.currentQuestionIndex])
    }
    
    nextQuestion(question){
        let questionCard = document.querySelector('.question-card')

        questionCard.innerText = ""
        questionCard.classList.remove('correct')
        questionCard.classList.remove('incorrect')

        questionCard.innerText = question.text
        this.loadOptions(question)

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
                let optionButtons = document.querySelectorAll('.option-button')
                optionButtons.forEach(button => button.parentElement.removeChild(button)) 
                this.checkAnswer(e, options)
            })
        })
    }

    checkAnswer(e, options){
        let questionCard = document.querySelector('.question-card')
        let selectedAnswer = options.find(option => option.text === e.target.innerText)
        let correctAnswer = options.find(option => option.correct === true)
        if(selectedAnswer === correctAnswer){
            questionCard.classList.add('correct')
            this.checkIfComplete()
        }else{
            questionCard.classList.add('incorrect')
            this.checkIfComplete()
        }
    }

        checkIfComplete(){
            let questionCard = document.querySelector('.question-card')
            if (this.quizQuestions.length > this.currentQuestionIndex) {
                let nextButton = document.createElement('button')
                nextButton.innerText = "Next Question"
                questionCard.appendChild(nextButton)
                nextButton.addEventListener('click', (e) => {
                    this.nextQuestion(this.quizQuestions[this.currentQuestionIndex])
                })
            } else {
                let completeQuizButton = document.createElement('button')
                completeQuizButton.innerText = "Complete Quiz"
                questionCard.appendChild(completeQuizButton)
            }
        }
        
}