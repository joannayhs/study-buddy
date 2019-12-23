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
        this.quizzes.forEach(quiz => new Subject(quiz.subject, quiz))
    }

}