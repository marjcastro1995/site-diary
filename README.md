# Site Diary Application - README

## Project Overview

This project is a **Site Diary** app that allows construction site managers to log daily activities, weather conditions, incidents, and other essential information. The app consists of two parts:

- **Frontend** built with **React** and **Material-UI**.
- **Backend** built with **Node.js** and **PostgreSQL** to store data.

The app includes three key functionalities:

1. **View Diary Entries** - A page displaying a list of all diary entries.
2. **Create New Diary Entry** - A form to log a new entry.
3. **View Diary Entry** - A detailed page showing a single diary entry.

## Approach and Breakdown

Here’s how I approached building this app:

### Backend

1. **Set up PostgreSQL**: 
   - I created a database named `site_diary` in PostgreSQL.
   - I used **Sequelize** ORM to interact with the database.
   - The app stores diary entries (with date, description, weather, and image URL) in the `diary_entries` table.

2. **Express API**:
   - I built a simple REST API with **Express** to handle GET, POST requests for diary entries.
   - I added **Multer** middleware for handling image uploads when creating a diary entry.

3. **API Endpoints**:
   - `GET /api/diaries`: Fetches all diary entries.
   - `POST /api/diaries`: Creates a new diary entry.
   - `GET /api/diaries/:id`: Fetches a specific diary entry by its ID.

### Frontend

1. **React + Material-UI**:
   - Used **Material-UI** to build the user interface components (buttons, forms, grids).
   - Ensured the design is **mobile-responsive** using Material-UI’s grid system to adapt across various screen sizes.

2. **Routing**:
   - Used **React Router** to create routes for the homepage (diary list), view page (single diary entry), and create page (new diary entry form).

3. **State Management**:
   - Managed the form inputs (date, description, weather, image) using React state.
   - Used **Axios** to communicate with the backend and fetch/post data.

4. **Mobile Optimization**:
   - Made sure the layout is **mobile-first** by utilizing responsive Material-UI grid and full-width buttons, making it easy to interact with the app on mobile devices.

### Database

- I used **PostgreSQL** for storing diary entries. It ensures reliable and scalable storage, with a relational structure for easy querying of diary entries.

## Steps to Run

### Backend

1. Install dependencies:

   ```bash
   cd backend
   npm install

2. Set up PostgreSQL:

    - Create a database named site_diary:
        CREATE DATABASE site_diary;

3. Create a .env file with your PostgreSQL credentials:

    PG_HOST=localhost
    PG_DATABASE=site_diary
    PG_USER=postgres
    PG_PASSWORD=yourpassword
    PG_PORT=5432
    PORT=5000

4. Run the backend server:

    npm run dev

### Frontend

1. Install dependencies:

    cd frontend
    npm install

2. Run the React app:

    npm start

## Future Improvements

User Authentication: Add login/signup for users to track their own diaries.
Search & Filter: Implement a search feature to find diary entries by date or description.
Image Hosting: Use a cloud service like AWS S3 for image storage instead of local storage.

## Conclusion

This app is built with scalability and ease of use in mind. By using React and Material-UI, the frontend is clean and responsive, while Node.js and PostgreSQL provide a solid backend to handle data efficiently.

## Final Thoughts

There are some parts I am not able to completely test out like running the PostgreSQL as I am running out of time. As for the use of AI and Autocompletion Tools, I used it to get some code snippet and also to write the notes that would be readable in README.md file. Let me know if there are any questions or parts that need further clarification!