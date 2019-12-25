class QuestionAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/questions'
    }

    getQuestions() {
        return fetch(this.baseUrl).then(res => res.json())
    }  
}