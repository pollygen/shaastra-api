FROM node:18-alpine

WORKDIR /sudip

COPY . .

RUN npm install

RUN npx tsc

CMD ["node", "./src/index.js"]