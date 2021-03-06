import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";

const HomePage = props => {
    return (
        <div className="HomePage">
            <NavBar user={props.user} handlelogout={props.handlelogout} />
        </div>
    );
};

export default HomePage;