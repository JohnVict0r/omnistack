Tutorial for Create mongo Database in docker

1. Test the installation.

$ docker --version

2. Download mongo container

$ docker pull mongo

3. execute mongo container in PORT:27017

$ docker run --name mongodb -p 27017:27017 -d mongo
