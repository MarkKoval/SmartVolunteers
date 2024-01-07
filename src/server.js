const express = require("express");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const cron = require("node-cron");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, "..", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // or specify a domain instead of '*'
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

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
    const {
      name,
      surname,
      email,
      birthday,
      phoneNumber,
      telegram,
      education,
      experience,
      skills,
      motivation,
      additionalInformation,
      section,
      validation,
    } = req.body;

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    // Define the data to be inserted into the spreadsheet.
    const values = [
      [
        name,
        surname,
        email,
        birthday,
        phoneNumber,
        telegram,
        education,
        experience,
        skills,
        motivation,
        additionalInformation,
        section,
        validation,
      ],
    ];

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
app.post("/submit-to-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Send email
    const mailOptions = {
      from: "smart.volunteers.ua@gmail.com", // sender's email address
      to: ["smart.volunteers.ua@gmail.com", email], // recipient's email address
      subject: "Your Message to Smart Volunteers",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
      <!DOCTYPE html>
      <head>
        <link rel="stylesheet" src="/src/index.css"/>
      </head>
      <body>
      <div style="margin: 0px auto; max-width: 600px">
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="width: 100%"
        >
          <tbody>
            <tr>
              <td
                style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 20px 0;
                  padding-bottom: 0px;
                  padding-top: 0px;
                  text-align: center;
                "
              >
                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          style="
                            font-size: 0px;
                            padding: 0px 0px 0px 0px;
                            padding-top: 0px;
                            padding-right: 0px;
                            padding-bottom: 0px;
                            padding-left: 0px;
                            word-break: break-word;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="border-collapse: collapse; border-spacing: 0px"
                          >
                            <tbody>
                              <tr>
                                <td style="width: 600px">
                                  <img
                                    alt="Logo"
                                    src="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1QVU-KXXhwvn3zeKE5hZQUrr1cr9MuUV4"
                                    style="
                                      border: none;
                                      border-radius: px;
                                      display: block;
                                      outline: none;
                                      text-decoration: none;
                                      height: auto;
                                      width: 100%;
                                      font-size: 13px;
                                    "
                                    width="600"
                                    height="auto"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style="
          background: #c4dfe6;
          background-color: #c4dfe6;
          margin: 0px auto;
          max-width: 600px;
        "
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background: #c4dfe6; background-color: #c4dfe6; width: 100%"
        >
          <tbody>
            <tr>
              <td
                style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 20px 0px 20px 0px;
                  padding-left: 0px;
                  padding-right: 0px;
                  text-align: center;
                "
              >
                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 0px 25px 0px 25px;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <h1
                              class="text-build-content"
                              data-testid="IPV16gvyg8BlEN5unTTIo"
                              style="
                                margin-top: 10px;
                                margin-bottom: 10px;
                                font-weight: normal;
                              "
                            >
                              <span
                                style="
                                  color: #55575d;
                                  font-family: Nunito;
                                  font-size: 20px;
                                  line-height: 22px;
                                "
                                ><b
                                  >Sorry for wait - we're looking into it!&nbsp;</b
                                ></span
                              >
                            </h1>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 0px 25px 0px 25px;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              class="text-build-content"
                              data-testid="GbqFfLkWePzwNX9hP-JqG"
                              style="margin: 10px 0; margin-bottom: 10px"
                            >
                              <span
                                style="
                                  color: #55575d;
                                  font-family: Nunito;
                                  font-size: 13px;
                                  line-height: 22px;
                                "
                                >Name: ${name}</span
                              >
                            </p>
      
                            <p
                              class="text-build-content"
                              data-testid="GbqFfLkWePzwNX9hP-JqG"
                              style="margin: 10px 0; margin-bottom: 10px"
                            >
                              <span
                                style="
                                  color: #55575d;
                                  font-family: Nunito;
                                  font-size: 13px;
                                  line-height: 22px;
                                "
                                >Email: ${email}</span
                              >
                            </p>
                            <p
                              class="text-build-content"
                              data-testid="GbqFfLkWePzwNX9hP-JqG"
                              style="margin: 10px 0; margin-top: 10px"
                            >
                              &nbsp;
                            </p>
                            <p
                              class="text-build-content"
                              data-testid="GbqFfLkWePzwNX9hP-JqG"
                              style="margin: 10px 0; margin-bottom: 10px"
                            >
                              <span
                                style="
                                  color: #55575d;
                                  font-family: Nunito;
                                  font-size: 13px;
                                  line-height: 22px;
                                "
                                >Message: ${message}</span
                              >
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style="
          background: #c4dfe6;
          background-color: #c4dfe6;
          margin: 0px auto;
          max-width: 600px;
        "
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background: #c4dfe6; background-color: #c4dfe6; width: 100%"
        >
          <tbody>
            <tr>
              <td
                style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 20px 0px 20px 0px;
                  padding-left: 0px;
                  padding-right: 0px;
                  text-align: center;
                "
              >
                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 10px 25px;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              class="text-build-content"
                              data-testid="bcbwsJTBKB_4Zj40F3vk_"
                              style="
                                margin: 10px 0;
                                margin-top: 10px;
                                margin-bottom: 10px;
                              "
                            >
                              <span
                                style="
                                  color: #55575d;
                                  font-family: Nunito;
                                  font-size: 13px;
                                  line-height: 22px;
                                "
                                >Thanks,</span
                              ><br /><span
                                style="
                                  color: #55575d;
                                  font-family: Nunito;
                                  font-size: 13px;
                                  line-height: 22px;
                                "
                                >Smart Volunteers Team</span
                              >
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style="
          background: #003b46;
          background-color: #003b46;
          margin: 0px auto;
          max-width: 600px;
        "
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background: #003b46; background-color: #003b46; width: 100%"
        >
          <tbody>
            <tr>
              <td
                style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 20px 0px 20px 0px;
                  padding-left: 0px;
                  padding-right: 0px;
                  text-align: center;
                "
              >
                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 0px 20px 0px 20px;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              class="text-build-content"
                              style="
                                text-align: center;
                                margin: 10px 0;
                                margin-top: 10px;
                                margin-bottom: 10px;
                              "
                              data-testid="qKLM_u1a4pmr67lfAxAF-"
                            >
                              <span
                                style="
                                  background-color: transparent;
                                  color: #c4dfe6;
                                  font-family: Nunito;
                                  font-size: 13px;
                                  line-height: 22px;
                                "
                                ><b
                                  >© 2023 Smart Volunteers. All rights reserved.</b
                                ></span
                              >
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 0px 20px 0px 20px;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              class="text-build-content"
                              style="
                                text-align: center;
                                margin: 10px 0;
                                margin-top: 10px;
                                margin-bottom: 10px;
                              "
                              data-testid="aZDIhwtpLCyE_Xgam8QPT"
                            >
                              <span
                                style="
                                  color: #c4dfe6;
                                  font-family: Nunito;
                                  font-size: 13px;
                                  line-height: 22px;
                                "
                                ><b>UA</b></span
                              >
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      
      </body>
      
      </html>
      
      
      
  `,
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

const port = 443;
app.listen(port, () => console.log(`Server running on port ${port}`));
