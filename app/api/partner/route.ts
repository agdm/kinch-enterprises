import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/ses-mailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { companyName, contactPerson, email, phone, trade, yearsInBusiness, message } = body

    // Validate the data
    if (!companyName || !contactPerson || !email || !trade || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    try {
      const payload = { ...body, _form_type: "Partner Inquiry" }
      await sendEmail(payload)

      console.log("Partner Inquiry Handled Successfully")
      return NextResponse.json({ message: "Inquiry received successfully" }, { status: 200 })
    } catch (err) {
      console.error("API Error sending partner mail:", err)
      return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 })
    }
  } catch (error) {
    console.error("Partner API Error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
