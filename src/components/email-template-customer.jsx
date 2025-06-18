import * as React from "react";
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Tailwind,
} from "@react-email/components";

export const EmailTemplateCustomer = ({
    name,
    company,
    phone,
    email,
    message,
}) => (
    <div>
        <Tailwind>
            <Text style={{ whiteSpace: "pre-line" }} className="">
                {name} från företaget {company} har visat sitt intresse för
                Hilja Logistic.
            </Text>
            <Text style={{ whiteSpace: "pre-line" }} className="">
                {name}s kontaktuppgifter är: {"\n"}
                Telefon: {phone} {"\n"}
                Epost adress: {email}
            </Text>

            <Text style={{ whiteSpace: "pre-line" }} className="">
                {name} skriver följande: {"\n"}
                {message}
            </Text>
        </Tailwind>
    </div>
);
