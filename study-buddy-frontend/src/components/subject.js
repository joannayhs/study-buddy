class Subject {
    constructor(subject, quiz) {
        this.subject = subject
        this.quizzes = []
        this.quizzes.push(quiz)
        this.renderSubject()
    }

    renderSubject(){
        const subjectContainer = document.getElementById('subject-container')
        
        let listItem = document.createElement('p')
        listItem.innerHTML = this.subject
        listItem.addEventListener('click', (e) => this.renderQuizSelection(e.target.innerText))
        subjectContainer.appendChild(listItem) 

    }

   renderQuizSelection(subject) {
    this.quizzes.forEach(quiz => this.createQuizCard(quiz))
   }

    createQuizCard(quiz) {
        const quizSelectContainer = document.getElementById('quiz-select-container')

        let quizCard = document.createElement('div')
        quizCard.classList = "quiz-card"
        let text = document.createElement('p')
        text.innerText = quiz.title
        quizCard.appendChild(text)
        quizSelectContainer.appendChild(quizCard)
    }

}