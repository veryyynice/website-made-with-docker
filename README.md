1.
npm install expressjs

docker build -t node-application .



2.

docker run -it -p 9000:3000 node-application

    To run a Docker container in the background, you can use     the -d flag with the docker run command. This flag tells     Docker to detach the container's output and run it in the     background.
docker run -d -p 9000:3000 node-application

OR

docker compose up

---

In the address bar, type localhost:9000


