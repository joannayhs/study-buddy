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
        quizContainer.appendChild(quizTitle)
        this.loadQuestion()
    }

    loadQuestion() {
        const quizContainer = document.getElementById('quiz-container')
        let questionCard = document.createElement('div')
        questionCard.classList.add('question-card')
        this.questions.forEach(question => {
            let questionText = document.createElement('p')
            questionText.innerText = question.text
            questionCard.appendChild(questionText)
            console.log(this)
            this.loadOptions(question)
        })
        quizContainer.appendChild(questionCard)
        
    }

    loadOptions(question){
        
    }
}