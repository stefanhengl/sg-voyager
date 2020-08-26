FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
CMD ["node", "server.js"]