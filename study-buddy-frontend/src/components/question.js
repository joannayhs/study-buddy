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

        questionCard.innerText = ''
        questionCard.classList.remove('correct')
        questionCard.classList.remove('incorrect')

        questionCard.innerText = question.text
        this.loadOptions(question)

    }

    loadOptions(question) {
        const questionCard = document.querySelector('.question-card')
        let optionContainer = document.createElement('div')
        optionContainer.classList.add('option-container')
        questionCard.appendChild(optionContainer)
        let options = this.quiz.options.filter(option => question.id === option.question_id)
        options.forEach(option => {
            let optionButton = document.createElement('button')
            optionButton.classList.add('option-button')
            optionButton.innerText = option.text 
            optionContainer.appendChild(optionButton)
            optionButton.addEventListener('click', (e) => {
                this.currentQuestionIndex++
                this.checkAnswer(e, options)
            })
        })
    }

    checkAnswer(e, options){
        const optionButtons = document.querySelectorAll('.option-button')
        const questionCard = document.querySelector('.question-card')
        let selectedAnswer = options.find(option => option.text === e.target.innerText)
        let correctAnswer = options.find(option => option.correct === true)
        let buttonArray = Array.from(optionButtons)
        let correctButton = buttonArray.find(button => button.innerHTML === correctAnswer.text)
        let incorrectButton = buttonArray.find(button => button.innerHTML === selectedAnswer.text)
    

        if(selectedAnswer === correctAnswer){
            correctButton.classList.add('correct')
            questionCard.classList.add('correct')
            buttonArray.forEach(button => button.disabled = true)
            this.responses.push(selectedAnswer.correct)
            this.checkIfComplete()
        }else{
            correctButton.classList.add('correct')
            questionCard.classList.add('incorrect')
            incorrectButton.classList.add('incorrect')
            buttonArray.forEach(button => button.disabled = true)
            this.responses.push(selectedAnswer.correct)
            this.checkIfComplete()
        }
    }

        checkIfComplete(){
            let questionCard = document.querySelector('.question-card')
            if (this.questions.length > this.currentQuestionIndex) {
                let nextButton = document.createElement('button')
                let p = document.createElement('p')
                p.appendChild(nextButton)
                nextButton.classList.add('next-button')
                nextButton.innerHTML = "Next Question"
                questionCard.appendChild(p)
                nextButton.addEventListener('click', (e) => {
                    this.nextQuestion(this.questions[this.currentQuestionIndex])
                })
            } else {
                let completeQuizButton = document.createElement('button')
                completeQuizButton.innerText = "Complete Quiz"
                completeQuizButton.classList.add('complete-quiz')
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
            let correctAnswers = this.responses.filter(response => (response === true)).length
            let totalQuestions = this.responses.length
            results.innerHTML = `You got ${correctAnswers}/${totalQuestions} correct.<br>`
            this.removeElement(questionCard)            
            quizContainer.appendChild(results)

            const nextQuiz = document.createElement('button')
            nextQuiz.innerText = "Take Another Quiz"
            nextQuiz.classList.add('next-quiz')
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