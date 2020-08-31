FROM node:12.0.0

COPY package.json /apps/notes-api/

COPY yarn.lock /apps/notes-api/

WORKDIR /apps/notes-api

COPY . ./

RUN npm i -g yarn

RUN yarn 

EXPOSE 5000

CMD ["yarn","start"]
