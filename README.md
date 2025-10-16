This document provides a comprehensive overview of the SHYN Art Platform, a full-stack web application designed to be a vibrant hub for artists and art enthusiasts.

### Project Overview

The SHYN Art Platform is a sophisticated and interactive platform that allows users to explore various art forms, connect with artists, and engage with a creative community. The platform features a rich, dynamic user interface with 3D elements, animations, and a seamless user experience. It is built with a modern tech stack, featuring a React front-end and a Node.js/Express back-end.

### Front-End

The front-end of the SHYN Art Platform is a modern, single-page application built with React and Vite. It leverages a variety of libraries to create a visually appealing and interactive user experience.

**Key Technologies:**

  * **React:** A JavaScript library for building user interfaces.
  * **Vite:** A fast build tool that provides a quicker and leaner development experience for modern web projects.
  * **React Router:** For declarative routing in the React application.
  * **Three.js & React Three Fiber:** For creating and displaying 3D graphics in the browser.
  * **GSAP (GreenSock Animation Platform) & Framer Motion:** For creating high-performance animations.
  * **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
  * **Supabase:** Used for backend services, likely including authentication and database management.

### Back-End

The back-end is a robust RESTful API built with Node.js and Express, responsible for handling business logic, data storage, and authentication.

**Key Technologies:**

  * **Node.js:** A JavaScript runtime for building server-side applications.
  * **Express:** A minimal and flexible Node.js web application framework.
  * **PostgreSQL:** A powerful, open-source object-relational database system, managed with `node-pg-migrate` for database migrations.
  * **JSON Web Tokens (JWT):** For securing the API by implementing token-based authentication.
  * **Bcrypt.js:** A library for hashing passwords, ensuring user data is stored securely.
  * **Dotenv:** To manage environment variables.

### Getting Started

To run this project locally, you will need to set up both the front-end and back-end services.

**Prerequisites:**

  * Node.js and npm (or yarn)
  * PostgreSQL database

**Installation & Setup:**

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Set up the back-end:**
      * Navigate to the `server` directory.
      * Install dependencies: `npm install`
      * Create a `.env` file and add the necessary environment variables (e.g., database connection string, JWT secret).
      * Run database migrations: `npm run migrate:up`
      * Start the server: `npm start`
3.  **Set up the front-end:**
      * Navigate to the root directory.
      * Install dependencies: `npm install`
      * Start the development server: `npm run dev`

The application should now be running, with the front-end accessible in your browser (typically at `http://localhost:5173`) and the back-end API running on the configured port.
