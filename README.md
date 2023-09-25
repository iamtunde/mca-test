

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
- [Mailtrap](https://mailtrap.io/)
## Installation & Setup

```bash
# create .env file from example file
$ cp .env.example .env
```
<p>Create an account on Mailtrap and supply your API 'user' and 'pass' credentials in the .env file<p>

<p>Modify the .env file with your smtp mail configuration</p>

```bash
$ npm install
```
## Docker Setup
```bash
# build the docker image
$ docker compose build [$NAME]
```

## Database & Setup
```bash
# build the database docker image
$ docker compose build -d mycoverai-db

# start the database docker service
$ docker compose up -d mycoverai-db
```
## Migrations & Seeds
```bash
# run migrations on the database
$ npm run db:migrate

# run database seed data
$ npm run db:seed:all
```
## Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# run in docker
$ docker compose up -d [$NAME]
```

## Stay in touch
- Author - [Túndé Yusuf](https://github.com/iamtunde)

## License
Nest is [MIT licensed](LICENSE).
