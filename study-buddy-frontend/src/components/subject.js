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
    console.log(this)
    this.quizzes.forEach(quiz => createQuizCard(quiz))
    console.log(subject)
   }

    createQuizCard(quiz) {
        const quizSelectContainer = document.getElementById('quiz-select-container')

        quizCard = document.createElement('div')
        quizCard.classList = "quiz-card"
        let text = quizCard.createElement('p')
        text.innerText = quiz.title
        quizCard.appendChild(text)
        quizSelectContainer.appendChild(quizCard)
    }

}