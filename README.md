# My App

This is a web app built with Next.js, React, and TailwindCSS. It uses a JSON server as a mock backend to fetch and display data.

## Installation

To run this project, you need to have Node.js and npm installed on your machine.

First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/my-app.git

Then, navigate to the post directory:

cd post

Inside the post directory, there are two subdirectories: jsonServer and my-app.

JSON Server
The jsonServer directory contains the mock backend for the app. To start the server, run the following commands:

cd jsonServer
npm install
npm start

This will start the JSON server on port 3005. Keep the terminal open and do not close it.

My App
The my-app directory contains the frontend code for the app. To start the app, open another terminal and run the following commands:

cd my-app
npm install
npm run dev

This will start the app on port 3000. You can now open your browser and go to http://localhost:3000 to see the app.

Usage
The app allows you to view, add, edit, and delete posts. Each post has a title, a body, and an author. You can use the buttons on the top right corner to perform different actions.

Testing
The app uses Jest as the testing framework. To run the tests, run the following command inside the my-app directory:

npm test

This will run all the tests and show the results.

Contributing
If you want to contribute to this project, please follow the [GitHub flow]. You can fork this repository, create a branch, make your changes, and open a pull request.
