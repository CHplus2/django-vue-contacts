import React, { useState, useEffect } from "react";
import axios from "axios";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const loadContacts = async () => {
        try {
            const res = await axios.get("/api/contacts/");
            setContacts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadContacts();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/contacts/", formData);
            setFormData({ name: "", email: "", message: ""});
            loadContacts();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" 
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                /><br /><br />
                <input
                    type="email" 
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br /><br />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea><br /><br />
                <button type="submit">Submit</button>
            </form>

            <h2>Saved Contacts</h2>
            <ul>
                {contacts.map((c) => (

                    <li key={c.id}>
                        {c.name} ({c.email}): {c.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Contacts;