FROM node 
#from official nodejs from docker hub
WORKDIR /app
#creates inside the container a directory called app
COPY package.json /app
#copies into the container the package.json file
RUN npm install
#installs the dependencies listed in package.json
COPY . /app
#copies the rest of the files into the container
CMD ["node","app.js"]
# default comand