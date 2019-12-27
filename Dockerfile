FROM node:13.5.0-alpine3.11

WORKDIR /var/www

COPY . .

RUN npm install

ENTRYPOINT ["node", "/var/www/index.js"]

