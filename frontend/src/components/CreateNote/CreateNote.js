import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./CreateNote.css";

const CreateNote = () => {
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = { content };

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/notes`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            data: note,
        }).then(() => {
            console.log("New Note Added");
            navigate("/dashboard");
        });
    };

    return (
        <div className="CreateForm">
            <div className="FormContent">
                <form onSubmit={handleSubmit}>
                    <div className="NoteForm">
                        <h3 className="TextHead">Note</h3>
                        <textarea
                            className="NoteText"
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <button className="CreateNoteBtn" onClick={handleSubmit}>
                        Create Note
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateNote;
