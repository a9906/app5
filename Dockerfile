FROM node:7
WORKDIR /app5
COPY package.json /app5
COPY swagger.json /app5
VOLUME ["/app5"]
RUN npm install
COPY . /app5
CMD node index.js
EXPOSE 4000