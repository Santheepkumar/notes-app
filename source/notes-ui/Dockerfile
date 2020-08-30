FROM node:12.0.0

COPY package.json /apps/notes-ui/

COPY yarn.lock /apps/notes-ui/

WORKDIR /apps/notes-ui

COPY . ./

RUN npm i -g yarn

# RUN yarn add react-scripts@3.4.3 -g --silent

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
