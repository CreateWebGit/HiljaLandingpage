import { EmailTemplateCustomer } from "@/components/email-template-customer";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
    const { name, company, phone, email, message } = await req.json();
    console.log("my req", name);
    try {
        const { data, error } = await resend.emails.send({
            from: "Kampanj - Post <onboarding@updates.createweb.se>",
            to: ["hilja@hiljalogistics.se"],
            subject: "Intresseanmälan - Hilja Logistics",
            react: EmailTemplateCustomer({
                name: name,
                company: company,
                phone: phone,
                email: email,
                message: message,
            }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(
            { message: "alla ok", status: 200 },
            { status: 200 }
        );
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
