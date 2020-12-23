FROM node:15.4.0

COPY . /app
WORKDIR /app
RUN npm install

ENTRYPOINT ["node", "/app/test.js"]
