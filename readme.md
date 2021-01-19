1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/matheuspdias/nodejs-sequelize-base.git
```

2. Executando a Aplicação:

```sh

  $ cd nodejs-sequelize-base
  # Instalando as dependências do projeto.
  $ yarn ou npm install
  # Inicie a aplicação com o nodemon
  $ npm run startdev
  # Configura o seu banco de dados na pasta database
  $ const connection = new sequelize('DB_NAME', 'USER_NAME', 'USER_PASS', {
    host: 'localhost',
    dialect: 'mysql'
});
```
