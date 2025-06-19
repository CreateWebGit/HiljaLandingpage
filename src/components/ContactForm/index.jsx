"use client";
import React, { useState } from "react";
import style from "./contactform.module.scss";

const ContactForm = () => {
    const [isFormSent, setFormSent] = useState(false);
    const [isFormData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
    });
    console.log("Form Data:", isFormData);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Form Data:", isFormData);

        let responce = await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: isFormData.name,
                company: isFormData.company,
                phone: isFormData.phone,
                email: isFormData.email,
                message: isFormData.message,
            }),
        });

        const result = await responce.json();

        console.log("Responce", result);
        setFormSent(true);
    };
    return (
        <>
            <header>
                <div className="top-container">
                    <a href="#form">
                        <p>
                            Fyll i formuläret nedan & få en gratis konsultation!
                        </p>
                    </a>
                </div>
                <div className="bottom-container">
                    <img src="/hilja+fraktjakt.svg" />
                </div>
            </header>
            <section className="cw-grid py-4 py-xs-4">
                <div className="cw-col-12 cw-col-xs-12">
                    <div className="form-image-container">
                        <img src="/form_ad_image_1.jpg" alt="skåpbil på väg" />
                    </div>
                    <h1 className="mt-2 text-center">
                        Midsommarfrakten blev inte som du tänkt?
                    </h1>
                    <h2
                        className="h5 text-center"
                        style={{ marginTop: "0.5rem" }}
                    >
                        Vi hjälper dig få ordning på logistiken – resten av
                        sommaren.
                    </h2>
                    <p className="mt-4">
                        Många märker först efter midsommar hur rörigt det kan
                        bli utan rätt fraktlösning. Hos Hilja Logistics får du
                        hjälp att välja rätt transportpartner – snabbt,
                        flexibelt och via Fraktjakt.
                        <br />
                        <br />
                        Fyll i formuläret nedan så kontaktar vi dig för en
                        gratis konsultation – så du slipper fler logistikmissar.
                    </p>
                </div>
            </section>
            <div className={style.container}>
                {!isFormSent ? (
                    <div id="form" className={style.container}>
                        <form
                            className="cw-grid gap-1 pb-4 pb-xs-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="cw-col-6 cw-col-xs-12">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    tabIndex={1}
                                    placeholder="Namn"
                                    onChange={(e) =>
                                        setFormData({
                                            ...isFormData,
                                            name: e.target.value,
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    name="company"
                                    required
                                    tabIndex={3}
                                    placeholder="Företag"
                                    onChange={(e) =>
                                        setFormData({
                                            ...isFormData,
                                            company: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div
                                className={`cw-col-6 cw-col-xs-12 ${style.inputWraper}`}
                            >
                                <input
                                    type="text"
                                    name="phone"
                                    required
                                    placeholder="Telefon"
                                    tabIndex={2}
                                    onChange={(e) =>
                                        setFormData({
                                            ...isFormData,
                                            phone: e.target.value,
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    name="email"
                                    required
                                    placeholder="E-post"
                                    onChange={(e) =>
                                        setFormData({
                                            ...isFormData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <textarea
                                type="text"
                                name="message"
                                required
                                placeholder="Meddelande"
                                onChange={(e) =>
                                    setFormData({
                                        ...isFormData,
                                        message: e.target.value,
                                    })
                                }
                                className="cw-col-12 cw-col-xs-12"
                            />
                            <button className="cw-col-12 cw-col-xs-12">
                                Skicka
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className={style.messageSent}>
                        Meddelandet är nu skickat och vi återkommer inom kort!
                    </div>
                )}
            </div>
        </>
    );
};

export default ContactForm;
