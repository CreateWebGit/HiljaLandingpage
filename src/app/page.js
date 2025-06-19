import Image from "next/image";
import styles from "./page.module.css";
import Cookienotice from '@/components/Cookienotice'

import { Resend } from "resend";
import ContactForm from "@/components/ContactForm";
const resend = new Resend("re_CWFNUQvz_m21p9ZihWKtehcNcdXQzxg3e");

(async function () {
    try {
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["delivered@resend.dev"],
            subject: "Hello World",
            html: "<strong>It works!</strong>",
        });

        console.log(data);
    } catch (error) {
        console.error(error);
    }
})();

export default function Home() {
    return (
        <div>
            <ContactForm />
            <Cookienotice/>
        </div>
    );
}
