FROM ubuntu:latest

WORKDIR /app
EXPOSE 3000

COPY ./src /app

# Set enviroment
ENV METEOR_ALLOW_SUPERUSER 1
ENV MONGO_URL "mongodb://192.168.99.101:27017/ps"
ENV DEPLOY_HOSTNAME "eu-west-1.galaxy-deploy.meteor.com"

# Install CURL (Meteor Dep)
RUN apt-get update && apt-get install -y curl

# Install Meteor
RUN curl https://install.meteor.com/ | sh

RUN apt-get install git -y