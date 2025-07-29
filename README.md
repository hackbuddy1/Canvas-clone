

# Canvas LMS Clone

This is a front-end UI clone of the Canvas Learning Management System, built as a technical assignment for the Sunheri Front-End Internship. The project emphasizes responsive design, component-based architecture using React, and modern styling with Tailwind CSS.

-----

## 🚀 Live Demo

[Link to your deployed site on Vercel or Netlify]

-----

## ✨ Features

  * **Responsive Design**: The application is fully responsive and optimized for desktop, tablet, and mobile views.
  * **Component-Based Architecture**: Built with reusable and modular React components.

### Page 1: Dashboard

  * **Responsive Sidebar Navigation**:
      * **Desktop**: Fully expanded with icons and text.
      * **Tablet**: Collapsed to show icons only.
      * **Mobile**: Toggled with a hamburger menu.
  * **Dynamic Header**: Displays a "Welcome" message with the student's name and the current date.
  * **Responsive Course Grid**: A grid of course cards that adapts its column count based on screen size (3, 2, or 1 column).
  * **To-Do List**: A simple widget showing tasks with due dates.

### Page 2: Course Detail

  * **Dynamic Routing**: Fetches and displays data for a specific course based on the URL (`/courses/:id`).
  * **Breadcrumb Navigation**: Helps users track their location within the app.
  * **Tabbed Interface**: Cleanly organizes course content into "Overview," "Assignments," and "Grades" sections.

-----

## 🛠️ Tech Stack

  * **React**
  * **Vite**
  * **Tailwind CSS**
  * **React Router** for page navigation
  * **React Icons** for UI icons

-----

## 📦 Installation and Setup

To run this project locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3.  Install the required dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```