###### Country Info App (FRONTEND)

## Getting started

### Installing dependencies

To install all dependencies, run:

```bash
npm install
```

### Checking environment variables

Make sure your `.env` looks like this:

```
# Address of our backend
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

> Also make sure this port is the same as the backend one.

### Running the application

To run, you can use the following command:

```
npm run dev
```

Once it starts, you can navigate to http://localhost:3000/countries

This will run the application in dev mode, which is slower than a production build.

### Running on production mode

To run as production, first build the application using:

```
npm run build
```

and then

```
npm run start
```

Once it starts, you can navigate to http://localhost:3000/countries
