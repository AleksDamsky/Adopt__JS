/*логика сущности вопросов*/
export class Question {
    static create(question) {
        return fetch('https://first-project-name-361f8-default-rtdb.europe-west1.firebasedatabase.app/question.json', {
            method : 'POST', //удаление
            body : JSON.stringify(question),
            headers : {
                'Content-Type' : 'application/json',

            } 
        })
        .then(response => response.json())
        .then(response => {
            question.id = response.name;
            return question;
        })
        .then(addToLocalStorage)
        .then(Question.renderList)
    }

    static renderList() {

        const question = getQuesFromLocStor();//рендерить на сайт. (выводить, короче, чтобы пользователь видел пул вопросов);
    
        const html = () => {
            if(question.lenght > 0) {
                return question;
            }else {
                alert('Вы пока ничего не спросили!')
            }
        }

        const list = document.querySelector('.main__list');
        // list.innerHTML = html;
    } 
    
}

function addToLocalStorage(question){
    let all = getQuesFromLocStor();
    all.push(question);
    localStorage.setItem('question', JSON.stringify(all));
};

function getQuesFromLocStor(){
    return JSON.parse(localStorage.getItem('question')  || '[]');
};

function toCard (qustion) {

}
