FROM node:alpine

WORKDIR /app

COPY package.json ./

COPY . .

ENV PORT=3000

EXPOSE 3000

RUN npm install

CMD ["npm", "run", "start"]