FROM node:20.11-alpine
WORKDIR /frontend

COPY /prestamosFront/package.json ./
COPY /prestamosFront/package-lock.json ./


RUN npm install

COPY /prestamosFront ./

EXPOSE 5173

CMD ["npm", "run" ,"dev"]