const nodemailer = require("nodemailer");
const { google } = require("googleapis");


const sendMail = async (email, title, text) => {
    const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URI = process.env.REDIRECT_URL;
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
    
    const OAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    )
    
    OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

    try {
        const accessToken = await OAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: CLIENT_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: `FRONT <${CLIENT_EMAIL}>`,
            to: email,
            subject: `${title}`,
            html: `${text}`,
        }

        const result = await transport.sendMail(mailOptions)
        return result

    } catch(error) {
        return error;
    }
}

module.exports = sendMail;