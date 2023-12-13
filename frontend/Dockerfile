FROM node:16-alpine as builder

WORKDIR /react
COPY . .

RUN yarn install
RUN yarn build

