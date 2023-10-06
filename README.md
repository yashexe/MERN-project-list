# Project Lister

Project Lister is a web application for managing and keeping track of your projects. It provides an easy way to create, edit, and delete projects, along with features like jotnotes and GitHub links for each project.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Features

- Create new projects with titles, attachments (GitHub links), and jotnotes.
- Edit existing project details, including titles, attachments, and jotnotes.
- Delete projects you no longer need.
- User-friendly interface for an intuitive experience.
- Responsive design for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Routing**: react-router-dom
- **Styling**: CSS
- **State Management**: React Context API
- **Validation**: JavaScript, Regular Expressions

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone [https://github.com/yashexe/MERN-project-list.git](https://github.com/yashexe/MERN-project-list/)
   cd MERN-project-list

   # Navigate to the frontend directory
   cd client
   npm install react-router-dom

   # Navigate to the backend directory
   cd ../backend
   npm install dotenv express mongoose```
   
2. **Set up MongoDB**:

    Make sure you have MongoDB installed and running on your local machine.
  Configure the database connection in the backend by setting the **MONGO_URI** environment variable

3. **Start the Application**:
    ```bash
    # Start the frontend
    cd ../frontend
    npm start
    
    # Start the backend
    cd ../backend
    npm start
    ```

4. **Open in Your Browser**:

    Open your web browser and visit http://localhost:3000 to use the application.

## Usage
   
- Create a new project by clicking the "+" button in the navigation bar.
- Fill in the project details, including title, GitHub link, and jotnotes.
- Click "Add Project" to create the project.
- View, edit, or delete projects by interacting with the project cards on the main page.
- Use the edit and delete icons on each project card for these actions.


  
