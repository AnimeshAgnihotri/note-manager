import React from "react";
import Navbar from "../components/Navbar/Navbar";
import DeleteTask from "../components/DeleteTask/DeleteTask";
import Footer from "../components/Footer/Footer";

function DeletePage() {
    return (
        <div>
            <Navbar />
            <DeleteTask />
            <Footer />
        </div>
    );
}

export default DeletePage;
