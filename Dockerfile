FROM node:10-alpine
RUN mkdir -p ~/eMasters-connection-api
WORKDIR ~/eMasters-connection-api
COPY . .
RUN npm install 
EXPOSE 80
CMD [ "node", "index.js" ]
