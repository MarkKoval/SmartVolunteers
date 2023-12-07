const express = require("express");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

// Load client secrets from a local file.
const auth = new google.auth.GoogleAuth({
  keyFile: "./src/credentials.json", // Replace with the path to your service account key file
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const spreadsheetId = "1PejNXHMQi_V6OkuZIY1mfXl_ST9shUjw5INyXcXqmXU"; // Replace with the ID of your Google Sheets document.

const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., 'Gmail'
  auth: {
    user: "smart.volunteers.ua@gmail.com", // your email address
    pass: "mexb xdtj hubw jjaq", // your email password or app password if using Gmail
  },
});

app.post("/submit-to-google-sheets", async (req, res) => {
  try {
    const { name, surname, email, birthday, phoneNumber, telegram, education, experience, skills, motivation, additionalInformation, section, validation } =
      req.body;

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    // Define the data to be inserted into the spreadsheet.
    const values = [[name, surname, email, birthday, phoneNumber, telegram, education, experience, skills, motivation, additionalInformation, section, validation]];

    // Append the data to a specific sheet (e.g., 'Sheet1').
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Candidates", // Change if your sheet's name is different
      valueInputOption: "RAW",
      resource: {
        values,
      },
    });

    res.status(200).json({ message: "Data submitted to Google Sheets" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Route for sending data to email
app.use(cors({ origin: "http://localhost:3000" }));
app.post("/submit-to-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Send email
    const mailOptions = {
      from: "smart.volunteers.ua@gmail.com", // sender's email address
      to: "smart.volunteers.ua@gmail.com", // recipient's email address
      subject: "Message from Smart Volunteers",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Data sent to email successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
