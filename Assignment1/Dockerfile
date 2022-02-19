FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4004

CMD [ "node", "index.js" ]