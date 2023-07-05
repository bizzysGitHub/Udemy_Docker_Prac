# specify a base image 
FROM node:14-alpine

# this is used to prevent the COPY command from overwriting folders/files when building the image
WORKDIR /usr/app

# Install some dependencies
#use copy to get files from build directory to the container "base image... i think "
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm","start"]
    