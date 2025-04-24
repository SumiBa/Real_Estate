🏙️ Godrej Horizon Real Estate Landing Page (Full Stack Project)
This is a full-stack real estate landing page project built for showcasing property details of "Godrej Horizon". It includes dynamic frontend features built with ReactJS, styled with Tailwind CSS, and a powerful PHP & MySQL backend for handling enquiries, pricing plans, and property data.

📌 Features
🔷 Frontend (React + Tailwind)
Beautiful hero section with a background image and call-to-action
Dynamic pricing plans fetched from the database
Enquiry form for users to request property details
Responsive design optimized for all devices
Email integration: Users receive property info via email after enquiry
🔶 Backend (PHP + MySQL)
MySQL database with three tables: properties, enquiries, property_enquiries
API endpoints for:
Fetching property details
Handling user enquiries
Storing and linking property enquiries to specific users
Email sending functionality using PHPMailer
🛠️ Tech Stack
Frontend: ReactJS, Tailwind CSS, Vite
Backend: PHP (Vanilla PHP without any framework)
Database: MySQL (via XAMPP)
Email: PHPMailer library
Hosting (Dev): XAMPP local server
📦 MySQL Database Setup
Database: godrej_horizon

📋 Tables:
properties

id, title, price, description, features, image_url
enquiries

id, name, email, message, created_at
property_enquiries

id, name, email, message, property_id, created_at
⚙️ How to Run This Project
✅ Backend
Move the backend folder to:
Start Apache and MySQL via XAMPP.
Import the database:
Open phpMyAdmin
Create a DB godrej_horizon
Import the provided SQL file (if available)
✅ Frontend
Navigate to frontend folder:
cd frontend
npm install
npm run dev
