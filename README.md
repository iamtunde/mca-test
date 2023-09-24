

## Description

A developer test for MCA.
<br>
The program fetch user records and send an email notification requesting feedback on their most recent purchase.
<br>

### Technologies
- NestJS
- Docker
- SequelizeORM
- Postgres

### Dependencies
- Mailtrap

## Installation & Setup

```bash
# create .env file from example file
$ cp .env.example .env
```

<p>Modify the .env file with your smtp mail configuration</p>

```bash
$ npm install
```

```bash
# run migrations on the database
$ npm run db:migrate
```

```bash
# run database seed data
$ npm run db:seed:all
```
## Docker Setup
```bash
# build the docker image
$ docker compose build
```
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# run in docker
$ docker compose up -d
```

## Stay in touch

- Author - [Túndé Yusuf](https://github.com/iamtunde)

## License

Nest is [MIT licensed](LICENSE).
