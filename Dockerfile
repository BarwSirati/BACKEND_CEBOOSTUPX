FROM node:16 as base

RUN mkdir -p /app/api
WORKDIR /app/api
COPY package*.json ./

RUN npm install
COPY . .

ENV MONGO_URI DATABASE_URI
ENV TOKEN_SECRET AUTH_KEY
ENV URL ALLOW_URL
ENV PORT PORT

EXPOSE $PORT
CMD [ "node","server.js" ]
