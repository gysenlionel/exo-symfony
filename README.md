## Run Locally

Clone the project

```bash
  git clone https://github.com/gysenlionel/exo-symfony
```

### Server Side

Go to the project directory

```bash
  cd exo-symfony/server/
```

Install dependencies

```bash
  composer install
```

Use mysql as db. Set up the .env. with your config. By default this .env is updated as follows mysql://root:@127.0.0.1:3306/fav_little_guest?serverVersion=5.7&charset=utf8mb4

Create the db

```bash
php bin/console doctrine:database:create
```

Migrations: Creating the Database Tables/Schema

```bash
php bin/console make:migration
```

```bash
php bin/console doctrine:migrations:migrate
```

load the fixtures and run the migrations again.

```bash
php bin/console doctrine:fixtures:load
```

```bash
php bin/console make:migration
```

```bash
php bin/console doctrine:migrations:migrate
```

Start the server

```bash
  symfony serve
```

PHP version : 7.4.26

### Client Side

```bash
  cd exo-symfony/client/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

To change the client-side user go to client/.env
