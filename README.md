# NodeJS application without NodeJ

In certain scenarios, there's a need to develop using a specific technology within Docker. The beauty of this approach is that you don't have to have that technology installed on your local machine. In this application, we'll demonstrate how to write code using Node.js, even if you don't have Node.js installed on your personal computer.

Node.js is a server-side JavaScript runtime environment built on Google's V8 engine. It is widely used for web application and server development due to its efficiency and scalability. It supports multiple simultaneous connections and has a vast ecosystem of modules and libraries, making it ideal for real-time and robust applications. It is the common choice for developers looking to create modern and effective web applications.

## Run docker container
The concept is straightforward: create a container with the desired technology and establish a bind mount between our computer's folder and the running container. This approach enables seamless technology sharing between the container and our local directory
``` rb
# Create a Docker container named 'node-image' and connect it to the current directory.
docker run --rm -it --name node-image --mount type=bind,source=$(pwd),target=/usr/src/app -p 3000:3000 node:15 bash

# Inside the Docker container:
# Initialize a new Node.js project and generate a package.json file.
npm init

# Install Express.js as a dependency and add it to the package.json.
npm install express --save
```

After setting up the project, including the installation of Express.js and its dependencies, as well as the package.json, we are ready to start coding in our preferred IDE. In my case, I'm using VS Code, and as shown in the image below, we are seamlessly connected to our container, enabling us to develop with Node.js
<p align="center">
  <img src="https://github.com/JoaoFrancisco11/NodejsAppli-withoutNode/blob/main/VSCode.png" alt="Texto Alternativo">
</p>

## JS
The following JavaScript code has been developed for testing
```rb
# Import the Express module
const express = require('express')

# Create an instance of the Express application
const app = express()

# Define the port on which the server will run
const port = 3000

# Setting up the route to handle requests at the root of the server
app.get('/', (req, res) => {
    # Respond with a simple HTML header
    res.send('<h1>Test</h1>')
})

# Start the server on port 3000
app.listen(port, () => {
    # Display the message in the console when the server is running
    console.log('Running on port: ' + port)
})
```

Command to launch the application
```
$ /usr/src/app# node index.js
Rodando na porta: 3000
```

## Result

<p align="center">
  <img src="https://github.com/JoaoFrancisco11/NodejsAppli-withoutNode/blob/main/Result.png" alt="Texto Alternativo">
</p>

