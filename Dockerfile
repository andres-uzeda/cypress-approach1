FROM node:12
LABEL maintainer="Andres Uzeda <andres.uzeda88@gmail.com>"

# 0- Update image
RUN apt-get update
RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# 1- Copy Test Framework
COPY . /cypress-framework
RUN cd /cypress-framework
RUN npm install
