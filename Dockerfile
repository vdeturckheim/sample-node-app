FROM node:14

WORKDIR /var/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY index.js .

CMD ["node", "index.js"]
