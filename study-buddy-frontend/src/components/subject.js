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
        listItem.addEventListener('click', (e) => renderQuizSelection(e.target.innerText))
        subjectContainer.appendChild(listItem) 

    }

}