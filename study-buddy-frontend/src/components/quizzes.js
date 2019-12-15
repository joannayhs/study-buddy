class Quizzes {
    constructor(){
        this.quizzes = []
        this.adapter = new QuizAdapter()
        // this.bindEventListeners
        this.fetchAndLoadQuizzes()
    }

    fetchAndLoadQuizzes() {
        return this.adapter.getQuizzes()
        .then(quiz => console.log(quiz))
    }
}