import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CreateNote from "../components/CreateNote/CreateNote";
import Footer from "../components/Footer/Footer";

function CreatePage() {
    return (
        <div>
            <Navbar />
            <CreateNote />
            <Footer />
        </div>
    );
}

export default CreatePage;
