class Quizzes {
    constructor(){
        this.quizzes = []
        this.adapter = new QuizAdapter()
        this.fetchAndLoadQuizzes()
    }

    fetchAndLoadQuizzes() {
        return this.adapter.getQuizzes()
        .then(quiz => {
            quiz.forEach(quiz => this.quizzes.push(quiz))
        }).then(() => this.render())
    }

    render() {
        const quizContainer = document.getElementById('quiz-container')
        this.quizzes.forEach(quiz => new Subject(quiz.subject, quiz))
        }

    renderQuizSelection(subject) {
        this.quizzes.forEach(quiz => this.createQuizCard(quiz))
        hideQuizSelection()
    }

    hideQuizSelection() {

    }


    createQuizCard(quiz) {
        const quizSelectContainer = document.getElementById('quiz-select-container')
        quizSelectContainer.classList.remove('hide')

        let quizCard = document.createElement('div')
        quizCard.classList = "quiz-card"

        let text = document.createElement('p')
        text.innerText = quiz.title
        quizCard.appendChild(text)
        quizSelectContainer.appendChild(quizCard)
    }
}