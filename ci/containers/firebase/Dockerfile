FROM node:16-alpine

# Install curl
RUN apk --no-cache add curl
# Install bash
RUN apk add --no-cache bash

RUN npm i -g firebase-tools
ADD firebase.bash /usr/bin
RUN chmod +x /usr/bin/firebase.bash

ENTRYPOINT ["/usr/bin/firebase.bash"]