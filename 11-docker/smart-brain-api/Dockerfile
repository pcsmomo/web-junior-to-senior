FROM node:14-alpine

WORKDIR /usr/src/smart-brain-api

COPY ./ ./
# COPY package.json ./

RUN npm install

# Dockerfile can have only one command, CMD
CMD ["/bin/bash"]