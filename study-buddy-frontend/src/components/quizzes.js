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
        this.renderSubject()
        this.quizzes.forEach(quiz => {
            if(quiz.completed){
                new QuizAdapter().updateQuiz(quiz, false)
            }
        })
    }

    renderSubject() {
        const subjectContainer = document.getElementById('subject-container')
        

        this.subjects.forEach(subject => {
            let listItem = document.createElement('p')
            listItem.innerHTML = subject
            listItem.addEventListener('click', (e) => {
                let selection = e
                const quizSelectContainer = document.querySelectorAll('.quiz-select-container')
                quizSelectContainer.forEach(container =>  this.removeElement(container))
                
                const quizContainer = document.querySelectorAll('.quiz-container')
                const quizCard = document.querySelector('.quiz-card')
                if(quizContainer.length != 0){
                    this.renderAlert()
                    const alert = document.querySelector('.alert')
                    alert.addEventListener('click', (e) => {
                        if(e.target.innerText === 'yes'){
                            quizContainer.forEach(quiz => this.removeElement(quiz))
                            if (quizCard) {
                                this.removeElement(quizCard)
                             }
                            this.removeElement(alert)
                            this.renderQuizSelection(selection)
                        }else{
                            alert.parentElement.removeChild(alert)
                        }
                    })
                }else{
                    quizContainer.forEach(quiz => this.removeElement(quiz))
                    if (quizCard) {
                        this.removeElement(quizCard)
                    }
                    this.renderQuizSelection(selection)
                }

                
        })
        subjectContainer.appendChild(listItem)
        })
    }
    
    renderAlert(){
        let alert = document.createElement('div')
        const body = document.querySelector('body')
        body.appendChild(alert)
        alert.classList.add('alert')
        alert.innerHTML = '<p>Clicking a new subject will erase all quiz progress. Are you sure you want to do that?</p>'
        let yesButton = document.createElement('button')
        yesButton.innerText = "yes"
        let noButton = document.createElement('button')
        noButton.innerText = "no"
        alert.appendChild(yesButton)
        alert.appendChild(noButton)
    }

    renderQuizSelection(e) {
        const mainContainer = document.getElementById('main-container')
        let quizSelectContainer = document.createElement('div')
        quizSelectContainer.classList.add('quiz-select-container')
        mainContainer.appendChild(quizSelectContainer)

        let quizCards = document.querySelectorAll('.quiz-card')
        quizCards.forEach(card => this.removeElement(card))
        this.quizzes.forEach(quiz => {
            if(quiz.subject === e.target.innerText){
                this.createQuizCard(quiz)}
            })
    }

    createQuizCard(quiz) {
        const quizSelectContainer = document.querySelector('.quiz-select-container')        
        
        let quizCard = document.createElement('div')
        quizCard.classList.add('quiz-card')

        let text = document.createElement('p')
        text.innerText = quiz.title

        quizCard.appendChild(text)

        quizSelectContainer.appendChild(quizCard)

        quizCard.addEventListener('click', (e) => new QuizManager(quiz))
    }

    removeElement(element){
        element.parentElement.removeChild(element)
    }

}