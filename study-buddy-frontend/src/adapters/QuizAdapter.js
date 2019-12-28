class QuizAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/quizzes'
    }

    getQuizzes() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    updateQuiz() {
        return fetch(this.baseUrl, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({

            })
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }
}