import React, { useState } from "react";
import { GiPirateCannon, GiPirateFlag } from "react-icons/gi";

const Question = ({ title, info }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowDetails(!showDetails)}>
                    {showDetails ? <GiPirateFlag /> : <GiPirateCannon />}
                </button>
            </header>
            {showDetails && <p>{info}</p>}
        </article>
    );
};

export default Question;
