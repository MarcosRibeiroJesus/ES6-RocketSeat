// Projeto do curso
import api from './api'

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('user-form');
        this.inputEl = document.querySelector('input[name=userInput]')
        this.listEl = document.getElementById('user-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Pesquisando no GitHub...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        this.setLoading();

        try {
            const userInput = this.inputEl.value;

            if (userInput.length === 0)
                return;

            // const res = await api.get(`/repos/${userInput}`)
            const res = await api.get(`/users/${userInput}`);

            const { name, bio, html_url, avatar_url } = res.data;

            this.repositories.push({
                name,
                bio,
                avatar_url,
                html_url
            })

            this.inputEl.value = '';

            this.render();
        } catch (error) {
            alert('Usuário inexistente!');
        }

        this.setLoading(false);
        this.setLoading.clear();
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {

            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let bioEl = document.createElement('p');
            bioEl.appendChild(document.createTextNode(repo.bio));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(bioEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();
