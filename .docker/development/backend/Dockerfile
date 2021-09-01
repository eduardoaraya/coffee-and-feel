FROM node:16-alpine


ENV CYPRESS_INSTALL_BINARY=0

RUN apk --no-cache add curl
# Install PNPM
RUN curl -f https://get.pnpm.io/v6.7.js | node - add --global pnpm@6 && pnpm config set store-dir ~/.pnpm-store

# Deps node

ADD ./package.json /tmp/package.json
RUN cd /tmp && pnpm install 
RUN mkdir app && cp -a /tmp/node_modules /app

# Build node

COPY . /app
RUN cd /app && pnpx nx run backend:build


ENV PORT=8080
EXPOSE 8080

WORKDIR /app/dist/apps/backend

CMD ["node", "main.js"]
