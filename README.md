# Buena Rental Application Form

Halli Hallo! Es freut mich euch die Case Study vorstellen zu können. Das Ganze kommt etwas verzögert, da ich leider etwas verhindert war. Alle features sind erfüllt und auch alle Strech-off goals! Von hier an werde ich nun auf Englisch switchen, da ich jetzt über die features reden werde.

## Features

- Multi-page application form
  - Personal Information
  - Contact Information
  - Salary Indication
  - Summary
- Progress Indicator (with animation the moment you click on it)
- Form validation with error messages (Every field has a validation form)
- Responsive design (if you minimize the window, we have a burgermenu popping up)
- Animations (Button Clicking, ProgressBar)
- State management with Context API and localStorage
- Notification on form submission

## Technologies Used
I was quit confused with the Notion page wherer the task is descriped since, but anyway, I used React & Typescript with Tailwind.css
The reason why I used Tailwind.css is because the components are beautiful and you guys use it too. The Buttons on the top left are referencing to the actual Buena web components. Here we go wiht the official list of what I used. I could have programmed a little bit more component based. Since in big applications this can get quite confusing, its always nice to programm component based.

- React
- TypeScript
- Tailwind CSS
- React Router
- React Hook Form
- Yup (for validation)
- React Toastify (for notifications)

## Setup

To run this project, install it locally using npm:

```bash
# Clone the repository
git clone https://github.com/ali6134/buena-mockdesign-as.git

# Navigate to the project directory (if necessary)
cd buena-rental-app

# Install dependencies (if necessary)
npm install

# Start the dev server
npm start

# For the tests
npm test