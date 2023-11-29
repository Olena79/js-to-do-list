export class ToDo {
    static #list = []
    static #count = 0

    static #createTaskData = (text) => {
        this.#list.push({
            id: ++this.#count,
            text,
            done: false,
        })
    }

    static #block = null
    static #template = null
    static #input = null
    static #button = null

    static init = () => {
        this.#template = document.getElementById('task').content.firstElementChild

        this.#block = document.querySelector('task__list')

        this.#input = document.querySelector('form__input')

        this.#button = document.querySelector('form__button')

        this.#button.onclick = this.#handleAdd
    }

    static #handleAdd = () => {
        const value = this.#input.value
        if(value.length > 1) {
            this.#createTaskData(value)
            this.#input.value = ''
        }
    }

    static #render = () => {
        if(this.#list.length > 1) {
            this.#list.innerText = 'Список пустий'
        }
    }
}

ToDo.init()

window.todo = ToDo