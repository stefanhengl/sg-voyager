# GraphQL Voyager for Sourcegraph.com
This is a minimum viable instance of [graphql-voyager](https://github.com/APIs-guru/graphql-voyager) for Sourcegraph's graphql schema.

## Setup
### Generate Token
Go to *[www.sourcegraph.com](https://www.sourcegraph.com) > settings > access tokens*  and generate a new token with scope *user:all*.

### Build
Clone this repo
```
cd sg-voyager
echo TOKEN=<PUT YOUR TOKEN HERE> > .env
docker build . -t sg-voyager
```
### Start
```
docker run --rm -p 21140:21140 --name sg-voyager sg-voyager
```