// aula 01
// import ClasseUsuario from './functions';
// import Usuario, { idade as IdadeUsuario } from './functions';

// console.log(ClasseUsuario.info());
// console.log(Usuario.info());
// console.log(Id

// aula 02
// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);
// });

// ES6 - Promise
// minhaPromise()
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })

// ES8 - async await 
// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();

// aula 03
// import axios from 'axios';

// class Api {
//     static async getUserInfo(username) {
//         try {
//             const res = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(res);
//         } catch (err) {
//             console.warn('Erro na API');
//         }
//     }
// }

// Api.getUserInfo('MarcosRibeiroJesus');
// Api.getUserInfo('MarcosRi909909909');

// Desafio 01
// Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }

// async function umPorSegundo() {

//     await delay();
//     console.log('1s');

//     await delay();
//     console.log('2s');

//     await delay();
//     console.log('3s');
// }

// umPorSegundo();

// Desafio 02
import axios from 'axios';

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}

async function getUserFromGithub(user) {
    try {
        const res = await axios.get(`https://api.github.com/users/${user}`);

        console.log(res.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub('MarcosRibeiroJesus');
getUserFromGithub('diego3g124123');

// Desafio 03
// class Github {
// static getRepositories(repo) {
//     axios.get(`https://api.github.com/repos/${repo}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Repositório não existe');
//         })


// }

//     static async getRepositories(repo) {
//         try {
//             await axios.get(`https://api.github.com/repos/${repo}`);
//             console.log(response.data);
//         } catch (error) {
//             console.log('Repositório não existe');
//         }
//     }
// }

// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

// Desafio 04
// const buscaUsuario = usuario => {
//     try {
//         axios.get(`https://api.github.com/users/${username}`);
//         console.log(response.data);
//     } catch (error) {
//         console.log('Usuário não existe!!!');
//     }
// }
// buscaUsuario('MarcosRibeiroJesus');

// Projeto do curso
import api from './api'

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this .addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
        return;

        const res = await api.get(`/repos/${repoInput}`)

        const { name, description, html_url, owner: { avatar_url } } = res.data;

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url
        })

        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();
