class Subject {
    constructor(subject) {
        this.subject = subject
        this.quizzes = []
        this.renderSubject()
    }

    renderSubject(){
        const subjectContainer = document.getElementById('subject-container')
        
        let listItem = document.createElement('p')
        listItem.innerHTML = this.subject
        listItem.addEventListener('click', (e) => renderQuizSelection(e.target.innerText))
        subjectContainer.appendChild(listItem) 

        function renderQuizSelection(subject) {
            const quizSelectContainer = document.getElementById('quiz-select-container')
            console.log(subject)
        }
    }

    

}