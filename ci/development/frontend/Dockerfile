FROM node:16-alpine


ENV CYPRESS_INSTALL_BINARY=0


RUN apk --no-cache add curl

RUN apk add --no-cache bash

# Install PNPM
RUN curl -f https://get.pnpm.io/v6.7.js | node - add --global pnpm@6 && pnpm config set store-dir ~/.pnpm-store

# Install Firebase

RUN pnpm add --global firebase-tools


# Deps node

ADD package.json /tmp/package.json
ADD pnpm-lock.yaml /tmp/pnpm-lock.yaml
RUN cd /tmp && pnpm install 
RUN mkdir app && cp -a /tmp/node_modules /app 

# Build node

COPY . /app
RUN cd /app && pnpx nx run frontend:export -y


WORKDIR /app

ADD ./ci/development/frontend/firebase.json .
ADD ./ci/development/frontend/.firebaserc .


RUN chmod +x scripts/parse_env_var.bash

RUN firebase deploy --token=$(. scripts/parse_env_var.bash FIREBASE_TOKEN) --project=coffee-and-feel --only=hosting 


ENV PORT=8080
EXPOSE 8080

WORKDIR /app/dist/apps/frontend


CMD ["npm", "start", "--", "--port", "8080"]



