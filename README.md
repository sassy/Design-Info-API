# Design Info API
デザイン情報の情報源を取得するAPI
- GraphQL

## Example Query

```
query {
  desiginInfo {
    id,
    title,
    url
	}
}
```

## Local URL
`http://localhost:3202/graphql`



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License
MIT


  used by 
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>

