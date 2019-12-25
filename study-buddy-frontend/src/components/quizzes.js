class Quizzes {
    constructor(){
        this.quizzes = []
        this.adapter = new QuizAdapter()
        this.subjects = []
        this.fetchAndLoadQuizzes()
    }

    fetchAndLoadQuizzes() {
        return this.adapter.getQuizzes()
        .then(quiz => {
            quiz.forEach(quiz => {
                this.quizzes.push(quiz)
                if(!this.subjects.includes(quiz.subject)){
                    this.subjects.push(quiz.subject)
                }
            })
        }).then(() => this.render())
    }

    render() {
        this.renderSubject()
    }

    renderSubject() {
        const subjectContainer = document.getElementById('subject-container')

        this.subjects.forEach(subject => {
        let listItem = document.createElement('p')
        listItem.innerHTML = subject
        listItem.addEventListener('click', (e) => this.renderQuizSelection())
        subjectContainer.appendChild(listItem)
        })
    }

    renderQuizSelection() {
        let quizCards = document.querySelectorAll('.quiz-card')
        quizCards.forEach(card => card.parentElement.removeChild(card))
        this.quizzes.forEach(quiz => this.createQuizCard(quiz))
    }


    createQuizCard(quiz) {
        const quizSelectContainer = document.getElementById('quiz-select-container')
        quizSelectContainer.classList.remove('hide')

        let quizCard = document.createElement('div')
        quizCard.classList.add('quiz-card')

        let text = document.createElement('p')
        text.innerText = quiz.title
        quizCard.appendChild(text)
        quizSelectContainer.appendChild(quizCard)
        quizCard.addEventListener('click', (e) => {
            new QuizManager(quiz)
            quizCard.parentElement.removeChild(quizCard)
            const subjectContainer = document.getElementById('subject-container')
            console.log(subjectContainer)
        })
    }

}