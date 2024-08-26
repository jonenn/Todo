# To-do App

## Overview

Todo App is a sleek and intuitive task management application developed with React.js and designed using Figma for an optimal UI/UX experience. This app enables you to create, manage, and organize tasks efficiently.

**TodoApp** allows you to:

-  Add and edit tasks with ease.
-  Categorize tasks to stay organized.
-  Track and manage your to-do list effectively.

As a frontend-based web application, TodoApp operates entirely within your browser, which means that all task data is stored locally on your device's browser.

**Design Overview:**

I have created detailed UX / UI design assets using Figma to guide the development process. These include a style guide, visual mockups and prototypes that showcase the actual design and user experience of the application. All the images and icons have been also created by me unless noted otherwise.

Access the Design Files:

You can explore both the prototypes and the design frames through the following links:

Design Frames:
https://www.figma.com/design/lOQlzcxBAkwzTv0bsaat0b/To-Do-App?node-id=20-2&t=EPpFsWKwLT5U3asD-1

Mobile Prototype:
https://www.figma.com/proto/lOQlzcxBAkwzTv0bsaat0b/To-Do-App?node-id=88-370&viewport=797%2C-166%2C0.53&t=EPpFsWKwLT5U3asD-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=194%3A59

Tablet Prototype:
https://www.figma.com/proto/lOQlzcxBAkwzTv0bsaat0b/To-Do-App?node-id=223-194&viewport=771%2C-937%2C0.45&t=EPpFsWKwLT5U3asD-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=223%3A1457

Desktop Prototype:
https://www.figma.com/proto/lOQlzcxBAkwzTv0bsaat0b/To-Do-App?node-id=0-1&viewport=146%2C435%2C0.37&t=EPpFsWKwLT5U3asD-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=55%3A99

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)

## Features

TodoApp offers a range of features designed to help you manage and organize your tasks efficiently. Here’s what you can do with the app:

-  Add and Edit Tasks: Quickly add new tasks and modify existing ones. Whether it’s a simple reminder or a complex to-do item, you can manage your tasks effortlessly.

-  Categorize Tasks: Organize your tasks into customizable categories. Use predefined categories like "My Day," or "Personal," or even create your own to suit your needs.

-  Track and Manage Your To-Do List: Keep track of your progress with a clear and organized view of your tasks. Mark tasks as completed, and easily update or remove tasks as needed.

-  Local Storage: As a frontend-based application, TodoApp stores all your task data locally in your browser. This ensures that your data remains private and accessible only from your device.

-  User-Friendly Interface: Todo App provides a sleek and intuitive user experience, making task management both efficient and enjoyable.

## Installation

### Prerequisites

-  Git.
-  Node.js (>=16.0.0)
-  npm (>=7.0.0)

### Step-by-Step Guide to Deploy

1. **Clone the Repository**

   Clone the Repository:
   Use Git to clone the repository from GitHub to your local machine. Replace `<repository-url>` with the URL of the GitHub repository.

   ```bash
   git clone <repository-url>
   ```

   Navigate to the Project Directory:
   Change into the project directory created by the clone command.

   ```bash
   cd <repository-name>
   ```

2. **Install Project Dependencies**
   Install Dependencies:
   Use npm to install the necessary dependencies listed in package.json.
   ```bash
   npm install
   ```
3. **Build the Project for Production**
   Build the Project:
   Create a production-ready version of the project. This command generates the build files in the dist directory.

   ```bash
   npm run build
   ```

   The dist folder will now contain the optimized assets for deployment.

4. **Serve the Production Build Locally**
   To test the production build locally, you need to serve it using a static file server.
   In any version, you will likely need to use `sudo`

   -  **Using serve**
      Install serve Globally (if not already installed):

      ```bash
      npm install -g serve
      ```

      Serve the Production Build:
      Navigate to the project directory and serve the dist folder.

      ```bash
      serve -s dist
      ```

      Access the Project:
      Open your web browser and go to http://localhost:5000 (or the port specified) to view the locally served production build.

   -  **Using http-server**
      Install http-server Globally (if not already installed):

      ```bash
      npm install -g http-server
      ```

      Serve the Production Build:
      Navigate to the project directory and serve the dist folder.

      ```bash
      http-server dist
      ```

      Access the Project:
      Open your web browser and go to http://localhost:8080 (or the port specified) to view the locally served production build.

5. **Run the Development Server (optional)**
   For development purposes, you might want to run the development server which provides hot reloading and other development features.
   Start the Development Server:
   Run the development server provided by Vite.
   ```bash
   npm run dev
   ```
   Access the Project:
   Open your web browser and go to http://localhost:5173 (default port for Vite) to see the development build.

## Usage

Suppose you need to keep track of various tasks and deadlines. With TodoApp, you can:

1. Create a Task List: Add tasks such as "Buy groceries."
2. Organize Tasks: Sort tasks into lists like "Work," "My Day," or "Personal"
3. Manage and Update: Easily update task details, mark tasks as completed, or delete tasks when they are no longer needed.

New user?

When you first use To-do App, you'll see a modal prompting you to enter a nickname. This nickname will be used throughout the app to personalize your experience.

To add a new task:

1. Go to the "Lists" menu.
2. Click on an item from the menu like "My Day".
3. Click on "Add a Task."
4. Fill in the task click "+" or hit enter.

To add a new list:

1. Go to the "Lists" menu.
2. Click on "New List".
3. Hit enter.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.
