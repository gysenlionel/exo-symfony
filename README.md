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

Start the server

```bash
  symfony serve
```

Use mysql as db.
Set up the .env, create the db, load the fixtures and run the migrations.

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

To change the client-side user go to client/src/utils/User.ts
