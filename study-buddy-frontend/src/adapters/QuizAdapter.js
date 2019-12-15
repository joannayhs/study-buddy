class QuizAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/quizzes'
    }

    getQuizzes() {
        return fetch(baseUrl)
        .then(res => res.json())
        .then(json => console.log(json))
    }   

}