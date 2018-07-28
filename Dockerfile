cat > Dockerfile <<EOF
FROM node:10-alpine
RUN mkdir -p ~/eMasters-connection-api
WORKDIR ~/eMasters-connection-api
COPY . .
EXPOSE 80
CMD [ "node", "index.js" ]
EOF
