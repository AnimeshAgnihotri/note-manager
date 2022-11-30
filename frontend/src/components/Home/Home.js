import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";

import DeleteIcon from "@material-ui/icons/Delete";

const Home = () => {
    const [noteList, setNotes] = useState([]);

    const callFn = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`${process.env.REACT_APP_NOTERAPP_BACKEND}/notes`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
                setNotes(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        callFn();
    }, []);

    useEffect(() => {
        callFn();
    }, [setNotes]);

    return (
        <div className="Home">
            <h1 className="HomeNotes">Notes</h1>

            <Link to="/create">
                <button className="AddBtn">+</button>
            </Link>

            {!noteList ||
                (noteList.length == 0 && (
                    <h2 className="NoNotesFound">No Notes Found</h2>
                ))}
            <div className="NoteList">
                {noteList && (
                    <div>
                        {" "}
                        {noteList.map((note) => (
                            <div className="Note">
                                <div className="NoteContent">
                                    {note.content}
                                </div>
                                <Link to={`/deletetask/${note._id}`}>
                                    <span className="DelIcon">
                                        <DeleteIcon />
                                    </span>
                                </Link>
                            </div>
                        ))}{" "}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
