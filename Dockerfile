FROM node:20-slim

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm install