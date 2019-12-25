class Question {
    constructor(question){
        this.text = question.text 
        this.options = question.options
        this.renderQuestion()
    }

    renderQuestion()  {
        const quizContainer = document.getElementById('quiz-container')
        const startButton = document.getElementById('start-button')
        startButton.classList.add('hide')

        let questionCard = document.createElement('div')
        questionCard.classList.add('question-card')
        console.log(this)
        quizContainer.appendChild(questionCard)

    }

    loadOptions(question) {
        const questionCard = document.querySelector('.question-card')
        console.log(question.options)
        question.options.forEach(option => {
            const button = document.createElement('button')
            button.innerText = option.text
            questionCard.appendChild(button)
        })
    }
}