FROM node:14-alpine

WORKDIR /usr/app/email

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]