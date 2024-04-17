# Containerização de Aplicação Node.js e PostgreSQL com Docker

A aplicação Node.js possui duas dependências de produção:

- prisma: ORM para conexão com o banco de dados.
- express: Framework HTTP para gerenciamento de rotas.

O arquivo package.json contém dois scripts:

- build: Compila o código TypeScript para JavaScript.
- start: Executa as migrações no banco de dados e executa o build.

O arquivo Dockerfile é responsável por armazenar as informações para o Docker gerar o build e executar a aplicação em um container.

O arquivo docker-compose.yml automatiza o processo de criação de imagens e execução de containers.

### Guia Prático: Containerização de Aplicação Node.js e PostgreSQL com Docker

- [Guia](https://medium.com/@marcosparreiras98/guia-pr%C3%A1tico-containeriza%C3%A7%C3%A3o-de-aplica%C3%A7%C3%A3o-node-js-e-postgresql-com-docker-0803ad6e32b3)

## Execução

Certifique-se de ter o Docker instalado em sua máquina antes de prosseguir.

- [Docker](https://www.docker.com/)

Para executar a aplicação e seu banco de dados em container basta abrir um terminal, navegar até o diretório raiz do projeto e executar o seguinte comando:

```
docker compose up --build -d
```
