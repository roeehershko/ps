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

# Prepare Project
RUN meteor npm install
RUN meteor update --all-packages
RUN meteor add accounts-password
CMD ["meteor"]
# CMD ["meteor", "deploy", "--settings", "settings.json", "app.roeehershko.club"]

# docker build -t ps_app .
# docker run -dt -it --rm -p 3000:3000 -v //c/Users/royh/Projects/tm/src:/app mydoc
# bash -c "(docker exec -it tender_wiles bash || export \"TERM=xterm\")"
# docker run -i -v //c/Users/royh/Projects/tm/src:/app mydoc2

# docker run -p 3000:3000 -i -v //c/Users/royh/Projects/tm/src/client:/app/client -v //c/Users/royh/Projects/tm/src/server:/app/server -v //c/Users/royh/Projects/tm/src/imports:/app/imports --name ps_app ps_app

# bash -c "(docker exec -it ps_app bash || export \"TERM=xterm\")";