import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function sendEmail(data: any) {
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
  const senderEmail = process.env.CONTACT_SENDER_EMAIL;

  if (!receiverEmail || !senderEmail) {
    throw new Error("Missing receiver or sender email environment variables");
  }

  const formType = data._form_type || "Contact";
  const subject = `New ${formType} Inquiry: ${data.name || data.companyName}`;

  let htmlContent = `<h2>New ${formType} Submission</h2><table>`;
  for (const [key, value] of Object.entries(data)) {
    if (key.startsWith("_")) continue;
    htmlContent += `<tr><td style="padding: 5px; font-weight: bold;">${key}:</td><td style="padding: 5px;">${value}</td></tr>`;
  }
  htmlContent += `</table>`;

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: [receiverEmail],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlContent,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: senderEmail,
  });

  try {
    const result = await sesClient.send(command);
    return result;
  } catch (error) {
    console.error("SES Error:", error);
    throw error;
  }
}
