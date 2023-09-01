clone of the social media app Threads# MERN Threads Clone

Welcome to the MERN Threads Clone! This is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack, designed to mimic a simple threads discussion platform. Users can create threads, post replies, and engage in conversations in a clean and intuitive interface.

## Features

- **User Authentication:** Users can sign up, log in, and log out. User authentication ensures that only authorized users can create threads and post replies.

- **Thread Creation:** Authenticated users can create new threads. Threads consist of a title, content, and an optional image attachment.

- **Reply to Threads:** Users can reply to existing threads, allowing for dynamic discussions on various topics.

- **Thread Sorting and Filtering:** Threads can be sorted by different criteria such as creation date or popularity. Users can also filter threads by keywords.

- **Responsive Design:** The application is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.

## Tech Stack

- **Frontend:** The frontend is built using React, utilizing modern UI libraries for styling and interactivity.

- **Backend:** The backend is powered by Express.js, which handles API requests, manages authentication, and interacts with the MongoDB database.

- **Database:** MongoDB is used to store thread and user data, providing a scalable and flexible solution for data storage.

- **Authentication:** User authentication is implemented using [Clerk](https://clerk.com/)

## Getting Started

Follow these instructions to get the MERN Threads Clone up and running on your local machine:

1. Clone this repository: `git clone https://github.com/your-username/mern-threads-clone.git`

2. Navigate to the project directory: `cd mern-threads-clone`

3. Install backend dependencies: `cd backend && npm install`

4. Configure the environment variables:

   - Create a `.env` file in the `backend` directory
   - Set up the following variables:
     ```
     PORT=3001
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

5. Start the backend server: `npm start`

6. Install frontend dependencies: `cd ../frontend && npm install`

7. Start the frontend development server: `npm start`

8. Access the application in your web browser at: `http://localhost:3000`

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy exploring the world of discussions with the MERN Threads Clone! If you have any questions or need assistance, feel free to reach out to me [here](nicholaswabell@gmail.com).
