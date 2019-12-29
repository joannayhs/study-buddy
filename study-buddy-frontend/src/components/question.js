class Question {
    constructor(quiz){
        this.quiz = quiz
        this.questions = quiz.questions
        this.currentQuestionIndex = 0
        this.responses = []
        this.renderQuestion(this.questions)
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

        let text = document.createElement('p')
        questionCard.appendChild(text)
        text.innerText = ""
        questionCard.classList.remove('correct')
        questionCard.classList.remove('incorrect')

        text.innerText = question.text
        this.loadOptions(question)

    }

    loadOptions(question) {
        const questionCard = document.querySelector('.question-card')
        let options = this.quiz.options.filter(option => question.id === option.question_id)
        options.forEach(option => {
            let optionButton = document.createElement('button')
            optionButton.classList.add('option-button')
            optionButton.innerText = option.text 
            questionCard.appendChild(optionButton)
            optionButton.addEventListener('click', (e) => {
                this.currentQuestionIndex++
                let optionButtons = document.querySelectorAll('.option-button')
                optionButtons.forEach(button => this.removeElement(button)) 
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
            this.responses.push(selectedAnswer.correct)
            this.checkIfComplete()
        }else{
            questionCard.classList.add('incorrect')
            this.responses.push(selectedAnswer.correct)
            this.checkIfComplete()
        }
    }

        checkIfComplete(){
            let questionCard = document.querySelector('.question-card')
            if (this.questions.length > this.currentQuestionIndex) {
                let nextButton = document.createElement('button')
                nextButton.innerText = "Next Question"
                questionCard.appendChild(nextButton)
                nextButton.addEventListener('click', (e) => {
                    this.nextQuestion(this.questions[this.currentQuestionIndex])
                })
            } else {
                let completeQuizButton = document.createElement('button')
                completeQuizButton.innerText = "Complete Quiz"
                questionCard.appendChild(completeQuizButton)
                completeQuizButton.addEventListener('click', (e) => {
                    this.quiz.completed = true
                    new QuizAdapter().updateQuiz(this.quiz, true)
                    this.renderQuizResults()
                })
            }
        }

        renderQuizResults(){
            const questionCard = document.querySelector('.question-card')
            const quizContainer = document.querySelector('.quiz-container')

            let results = document.createElement('div')
            results.classList.add('results')
            results.innerText = `You got ${this.responses.filter(response => response === true).length}/${this.responses.length} correct.`
            this.removeElement(questionCard)            
            quizContainer.appendChild(results)

            const nextQuiz = document.createElement('button')
            nextQuiz.innerText = "Take Another Quiz"
            results.appendChild(nextQuiz)
            nextQuiz.addEventListener('click', (e) => {
                const mainContainer = document.getElementById('main-container')
                mainContainer.removeChild(quizContainer)
            })
        }

        removeElement(element){
            element.parentElement.removeChild(element)
        }
        
}