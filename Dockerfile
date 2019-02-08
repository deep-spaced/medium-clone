FROM node:10-alpine
WORKDIR /usr/src/app

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./
RUN npm install
COPY . .

CMD [ “npm”, “start” ]
