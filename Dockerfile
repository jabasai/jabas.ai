FROM node:latest as base

# Install dependencies
RUN apt update && \
    apt install -y nginx && \
    rm -rf /var/cache/apk/* && \
    rm -rf /usr/share/nginx/html/*

FROM base as dep
WORKDIR /app

COPY package*.json ./
RUN npm install

FROM dep as full
COPY . .
RUN npm run build
RUN npm install -g http-serve

EXPOSE 8080

CMD ["http-serve", "/app/dist/", "-p" , "8080"]