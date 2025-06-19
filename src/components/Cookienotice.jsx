"use client"

import { useEffect, useState } from "react"

export default function Cookienotice() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem("cw_accepted_cookies") === "true";
        if (!hasAcceptedCookies) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cw_accepted_cookies", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookienotice">
            <div className="text-container">
                <p><a href="/integritetspolicy" className="web-link">Vi använder cookies</a> för att förbättra din upplevelse och samla in anonym statistik. Går det bra?</p>
            </div>
            <div className="button-container">
                <a href="https://google.se" className="cw-button--secondary small">Nepp!</a>
                <button onClick={acceptCookies} className="cw-button--primary small">Det går bra!</button>
            </div>
        </div>
    );
}