FROM node:16-alpine

RUN apk --no-cache add curl

RUN apk add --no-cache bash

# Install PNPM
RUN curl -f https://get.pnpm.io/v6.7.js | node - add --global pnpm@6 && pnpm config set store-dir ~/.pnpm-store

# Install Firebase

RUN pnpm add --global firebase-tools


# Deps node

ADD package.json /tmp/package.json
RUN cd /tmp && pnpm install 
RUN mkdir app && cp -a /tmp/node_modules /app

# Build node

COPY . /app
RUN cd /app && pnpx nx run admin:build


WORKDIR /app

ADD ./ci/development/admin/firebase.json .
ADD ./ci/development/admin/.firebaserc .


RUN chmod +x scripts/parse_env_var.bash

RUN firebase deploy --token=$(. scripts/parse_env_var.bash FIREBASE_TOKEN) --project=coffee-and-feel --only=hosting






