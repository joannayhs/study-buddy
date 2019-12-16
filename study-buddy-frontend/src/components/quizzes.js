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

    render(){
        const quizSelectContainer = document.getElementById('quiz-select-container')
        const quizContainer = document.getElementById('quiz-container')

    }

    renderSubjectList() {
        const subjectContainer = document.getElementById('subject-container')

        let subjects = []
        this.quizzes.map(quiz => subjects.push(quiz.subject))
        let listItem = document.createElement('p')
        subjects.forEach(subject => listItem.innerHTML = subject)
        subjectContainer.appendChild(listItem)
    }
}