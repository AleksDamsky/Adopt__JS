import { Question } from './question';
import { isValid } from 'ipaddr.js';
import './CSS/style.css';

const form = document.getElementById('form');
const addBtn = document.getElementById('btn1');
const addInput = form.querySelector('#question'); // можно не запрашивать глобально, а найти необходимый элемент через родителя

form.addEventListener('submit', submitFormHendler); //"submit" - это нативное событие, которое отслеживает нажати на кнопку мыши или на Enter;

form.addEventListener('input', () => {
    addBtn.disabled = !isValid(addInput.value);
})

function submitFormHendler(event){
    event.preventDefault();

    if(isValid(addInput.value)){
        let getObject = {
            text : addInput.value.trim(), // .trim() -  это свойсство, которое удаляет лишние пробелы.
            date : new Date().toJSON()
        }

        addBtn.disabled = true;

        Question.create(getObject).then(() => {
        
            addInput.value = '';
            addInput.className = '';

            addBtn.disabled = false;

        });

    }
}