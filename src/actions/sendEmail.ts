"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !subject || !message) {
        return { error: "Please fill in all fields." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: ["tharoochapa2001@gmail.com"],
            subject: `New Message from ${name}: ${subject}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        });

        if (error) {
            return { error: error.message };
        }

        return { success: "Email sent successfully!" };
    } catch (error: any) {
        return { error: error.message || "Something went wrong." };
    }
};
