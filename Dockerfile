FROM node:stretch-slim
#FROM node:alpine


# Setting environment as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


ADD src/dist /src/
ADD src/package.json /src/
WORKDIR /src/

RUN apt update && apt upgrade

# Remove old build and node_modules folders


# Create production build


# Remove node_modules folder

# RUN npm install 
RUN npm install express
RUN npm install minimist
EXPOSE 3000

CMD "npm" "run" "start-prod" "--" "--backendPort" "9995" "--backendHostname" "localhost"
