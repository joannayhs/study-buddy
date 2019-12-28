class QuizAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/quizzes'
    }

    getQuizzes() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    updateQuiz(quiz, value) {
        return fetch(`${this.baseUrl}/${quiz.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                completed: value
            })
        })
            .then(res => res.json())
    }
}