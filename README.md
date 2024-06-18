# Undercooked

This learning project aimed to develop a website allowing users to search for recipes based on available ingredients. It was a collaborative effort where we utilized Java Spring Boot for the backend, PostgreSQL for data storage, and JavaScript+React for the frontend. 

## Backend

<a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-BathoBence" target="blank"> You can find the backend here. </a>

## Technologies

* <a href="https://vitejs.dev/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/vite.svg" height="25" /> Vite </a>
* <a href="https://react.dev/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/react.svg" height="25" /> React </a>
* <a href="https://www.javascript.com/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/javascript.svg" height="25" /> JavaScript </a>

## Prerequisites

**Node.js and npm:** You can download and install Node.js from the [official website](https://nodejs.org/en/download/) or use a package manager for your operating system.

## Setup

- Clone the repository <br>
```
git clone <repository-url>
```
### Install dependencies

```bash
cd ./undercooked
npm install
```

### Proxy

Watch for the port of your rest api. By default it will bind on port 8080 and the frontend proxy settings also depend on this configuration. If you for some reasons change the port of the backend, don't forget to change the ./vite.config.json proxy settings as well.

### Runnig the code

```bash
cd ./client
npm start
```

And the create-react-app react-scripts package will start your frontend on the 3000 port and you can visit the http://localhost:3000 on your preferred browser.
