FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY sanity.json ./
# COPY schemas/schema.js ./schemas
# COPY schemas/tweetSchema.js ./schemas
# COPY schemas/userSchema.js ./schemas

# RUN npm install
RUN npm install --global @sanity/cli
RUN npm install --global @sanity/base
RUN npm install --global @sanity/core
RUN npm install --global @sanity/default-layout
RUN npm install --global @sanity/default-login
RUN npm install --global @sanity/desk-tool
RUN npm install --global @sanity/eslint-config-studio
RUN npm install --global @sanity/vision
RUN sanity init 
# COPY sanity.json ./
COPY schemas/schema.js ./schemas
COPY schemas/tweetSchema.js ./schemas
COPY schemas/userSchema.js ./schemas
EXPOSE 3333
RUN cd studio
ENTRYPOINT ["start"]
# CMD sanity start
# CMD sanity start
