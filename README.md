# React + Vite

I have Created A To-Do Application using MERN Stack.

I used MongoDb for database, react for front end, and Nodejs and Expressjs for Backend.

This Application let user sign up or sign using **USERNAME** and **PASSWORD**.
Few Credentials are also stored in **Localstorage**.
User can create **different folder** for their Differnet group of **TO_DOs**.
user can **delete** individual TO_DOs. 

Password is stored using **bCrypt.js** for security measurments.

to run this application please make .env file and in .env file store a varible 

VITE_HOST_NAME="http://localhost:3001/"

(this is allow application to use this localhost to connect with backend)


**-------------------------------------**


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
