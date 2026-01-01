# Birthday Reminder App

An automated Birthday Reminder application that collects users’ birthdays and sends them personalized birthday emails every day at **7:00 AM**.

This project is one of my AltSchool Assignment and is built to replace a manual Excel-based process with a scalable, automated solution.

---

## Features

- Simple UI to collect:
  - Username
  - Email address
  - Date of birth
- Secure data storage using MongoDB
- Enforces **unique email addresses**
- Daily automated birthday check using a cron job
- Sends personalized birthday emails
- Prevents duplicate birthday emails in the same year
- Email delivery powered by **Brevo SMTP**

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB + Mongoose
- **Email Service:** Brevo (SMTP)
- **Scheduler:** node-cron
- **Template Engine:** EJS
- **Styling:** CSS
- **Deployment:** Render

---

## 📁 Project Structure

birthday-reminder-app/
│
├── public/
│ └── css/
│ └── style.css
│
├── views/
│ └── index.ejs
│
├── models/
│ └── User.js
│
├── routes/
│ └── userRoutes.js
│
├── services/
│ ├── emailService.js
│ └── birthdayJob.js
│
├── config/
│ └── db.js
│
├── .env
├── app.js
├── package.json
└── README.md

## How the Cron Job Works

- Runs **every day at 7:00 AM**
- Checks all users in the database
- Compares today’s **day and month** with users’ date of birth
- Sends birthday emails only if:
  - Today is the user’s birthday
  - The user has not already received a birthday email in the current year

## Email Delivery (Brevo)

- Uses **Brevo SMTP** for reliable email sending
- HTML-based birthday email template
- Sender email must be verified in Brevo
- Works seamlessly on **Render**

## Deployment (Render)

1. Push the code to GitHub
2. Create a **Web Service** on Render
3. Add environment variables in the Render dashboard
4. Deploy the application

## Assignment Requirements Checklist

- [x] UI to collect username, email, and date of birth
- [x] Automated daily birthday check
- [x] Birthday email notifications
- [x] Unique email enforcement
- [x] Cron job scheduled at 7am
- [x] Uses a free email platform (Brevo)
- [x] Clean and maintainable project structure

---

## Author

Joel Hanson

## License

This project is open-source and available for educational purposes.
