FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["node", "server.js"]