FROM node:16-alpine as builder


WORKDIR '/app'
COPY front/package.json .
RUN yarn
COPY . .
RUN yarn dev


