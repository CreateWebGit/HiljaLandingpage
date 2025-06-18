import "./style/globals.css";
import "./style/main.scss";

export const metadata = {
    title: "Hilja Logistics – Midsommar frakten blev inte som du tänkt?",
    description: "Vi hjälper dig få ordning på logistiken – resten av sommaren.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
