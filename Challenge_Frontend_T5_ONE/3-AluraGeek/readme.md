## 3 Challenge Front End AluraGeek

No desafio do AluraGeek está disponível onde desenvolverá um e-commerce! Para apoiar nesta tarefa dividimos este desafio em duas sprints: Sprint 2, onde será focada na estilização e na sprint 3, focará nas funcionalidades, usando javascript.

Também disponibilizamos dois vídeos explicativos que ensinam o uso do json-server para simular uma API, como iniciar o CRUD da sua aplicação e como criar produtos para o seu e-commerce utilizando o método POST.

### Informações para desenvolver esse projeto

- [Orientações para completar o Challenge ONE Front End AluraGeek, um e-commerce](https://www.alura.com.br/challenges/oracle-one-front-end/alurageek)
    - [ ] [Figma | Design do AluraGeek](https://www.figma.com/file/itJpWbvHxSUcUeMPy1lmof/AluraGeek?node-id=0%3A1&mode=dev)
    - [ ] [Sprint 2 - Aprofundando em HTML, CSS e JavaScript](https://www.alura.com.br/challenges/oracle-one-front-end/alurageek/alurageek-sprint02)
      - [ ] [Trello | Gestão de Projetos do Sprint 2](https://trello.com/b/bxHIfqKl/sprint-2)
    - [ ] [Sprint 3 - Tópicos avançados de JavaScript: DOM, CRUD e Fetch API](https://www.alura.com.br/challenges/oracle-one-front-end/alurageek/alurageek-sprint03)
      - [ ] [Trello | Gestão de Projetos do Sprint 3](https://trello.com/b/2Oo43Lwt/sprint-3)
      - [ ] [Resolução parte 1](https://www.youtube.com/watch?v=nn6TcAkSsgY)
      - [ ] [Resolução parte 2](https://www.youtube.com/watch?v=0mjdQEiQQhs)
    - [Entregar o Challenge Alura Geek](https://lp.alura.com.br/alura-latam-entrega-challenge-one-portugues-front-end)

### Tarefas

- [ ] **Sprint 2 - Aprofundando em HTML, CSS e JavaScript**
  - [x] json-server: `npm install -g json-server`
  - [x] fake api: criar `db.json`
    - [x] executar `json-server --watch db.json`
  - [x] criar estrutura de pastas de serviços para o CRUD
    - [x] services/`products.json`
    - [x] controllers/`products.json`
    - [x] views/
  - [x] criar a lógica para o CRUD com services, views, controllers

- [ ] **Sprint 3 - Tópicos avançados de JavaScript: DOM, CRUD e Fetch API**
  - [ ] Uma página inicial que contenha um botão "iniciar sessão" e um buscador de produtos oferecidos pela empresa.
  - [ ] Um banner que contenha descontos, promoções, ou informações relevantes do momento.
  - [ ] Uma galeria com as informações dos produtos como: a imagem, o nome do produto, o preço e um link que leva até a página de descrição do produto.
  - [ ] Uma página do produto que contenha a imagem, o nome, a descrição e o preço.
  - [ ] Um rodapé com formulário para contato e outras informações relevantes.
  - [ ] Menu administrador para eles conseguirem adicionar, editar, buscar ou eliminar produtos da loja. 
  - [ ] É muito importante que o site seja responsivo para dar aos clientes a facilidade de comprar através de dispositivos mobiles.

````json
{
    "produtos": [
        {
            "name": "Alura",
            "imageUrl": "https://source.unsplash.com/6FDXGY9J6y4",
            "price":"101.02",
            "id": 10,
            "alt":"Product",
            "section":"Star Wars",
            "description":"volution csr"
        }
    ]
}
````