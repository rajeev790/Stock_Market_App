# Backend Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY server/package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
