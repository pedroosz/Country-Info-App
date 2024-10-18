###### Country Info App (BACKEND)

## Getting started

### Installing dependencies

To install all dependencies, run:

```bash
npm install
```

### Checking environment variables

Make sure your `.env` looks like this:

```
# Port where it will be available
PORT=3001

# API used to get information basic about the countries
DATE_NAGER_API="https://date.nager.at/api/v3"

# API used to get information the population and flags from countries
COUNTRIES_NOW_API="https://countriesnow.space/api/v0.1/countries"
```

### Running the application

To run, you can use the following command:

```
npm run dev
```

And it should log `API Listening at port: 3001`

## Available routes

```
(GET) /countries
| > Lists all countries available

(GET) /countries/:countryCode
| > Get information about a specific country, with its neighbours and flag if available
```
