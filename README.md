# Project Lister

Project Lister is a web application for managing and keeping track of your projects. It provides an easy way to create, edit, and delete projects, along with features like jotnotes and GitHub links for each project.
![image](https://github.com/yashexe/MERN-project-list/assets/90474296/42e439f6-3232-4448-b2f2-97e8155b0184)
## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Routing**: react-router-dom
- **Styling**: CSS

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
![image](https://github.com/yashexe/MERN-project-list/assets/90474296/42e439f6-3232-4448-b2f2-97e8155b0184)

## Usage
   
- Create a new project by clicking the "+" button in the navigation bar.
- Fill in the project details, including title, GitHub link, and jotnotes.
- Click "Add Project" to create the project.
![image](https://github.com/yashexe/MERN-project-list/assets/90474296/00a96351-35a4-48fb-9516-bed7c4a88255)

- View, edit, or delete projects by interacting with the project cards on the main page.
- Use the edit and delete icons on each project card for these actions.
![image](https://github.com/yashexe/MERN-project-list/assets/90474296/63d09ddc-3db2-4478-a06c-3123f2b1b44d)


  
