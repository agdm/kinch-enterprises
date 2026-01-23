import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/ses-mailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, location, message } = body

    // Validate the data
    if (!name || !email || !service || !location || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }
    
    try {
      const payload = { ...body, _form_type: "Contact" }
      await sendEmail(payload)

      console.log("Contact Request Handled Successfully")
      return NextResponse.json({ message: "Success" }, { status: 200 })
    } catch (err) {
      console.error("API Error sending contact mail:", err)
      return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 })
    }
  } catch (error) {
    console.error("Contact API Error:", error)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}
