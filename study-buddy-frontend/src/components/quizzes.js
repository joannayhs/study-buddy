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
        this.subjects.forEach(subject => new Subject(subject))
    }

}