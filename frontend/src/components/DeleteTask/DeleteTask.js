import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

import "./DeleteTask.css";

const DeleteTask = () => {
    const [noteE, setNote] = useState("");

    const { id } = useParams();

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    axios({
        url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/notes/${id}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => {
            setNote(res.data.content);
        })
        .catch((e) => {
            console.log(e.message);
        });

    const handleYesDelete = () => {
        axios({
            url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/notes/${id}`,

            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(navigate("/dashboard"));
    };

    const handleNoDelete = () => {
        navigate("/dashboard");
    };

    return (
        <div className="DeleteTask">
            <h2 className="DelQuestion">
                Are you sure you want to delete this note?
            </h2>
            <div className="DelNoteContent">{noteE}</div>
            <div className="DeleteBtns">
                <button
                    onClick={handleNoDelete}
                    className="NoDeleteButton DeleteButton"
                >
                    No
                </button>
                <button
                    onClick={handleYesDelete}
                    className="YesDeleteButton DeleteButton"
                >
                    Yes
                </button>
            </div>
        </div>
    );
};

export default DeleteTask;
