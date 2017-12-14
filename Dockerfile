FROM node
ENV LANG en_US.UTF-8

WORKDIR /app
EXPOSE 3000

# RUN installs
RUN apt-get update && apt-get install -y curl
RUN apt-get install locales

RUN locale-gen "en_US.UTF-8"
RUN dpkg-reconfigure locales
ENV LANGUAGE en_US:en
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8
RUN echo LC_CTYPE="en_US.UTF-8" >> /etc/default/locale
RUN echo LC_ALL="en_US.UTF-8" >> /etc/default/locale
RUN echo LANG="en_US.UTF-8" >> /etc/default/locale
RUN cat /etc/default/locale
RUN curl https://install.meteor.com/ | sh
ENV  METEOR_ALLOW_SUPERUSER 1
RUN npm install

CMD ["meteor"]

# docker build -t mydoc2 .
# docker run -dt -it --rm -p 3000:3000 -v //c/Users/royh/Projects/tm/src:/app mydoc
# bash -c "(docker exec -it tender_wiles bash || export \"TERM=xterm\")"
# docker run -i -v //c/Users/royh/Projects/tm/src:/app mydoc2