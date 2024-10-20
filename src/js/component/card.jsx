import React from "react";

const Card = () => {
    const cardText = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit nostrud exercitation ullamc aliquip ex ea commodo.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi aliquip.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ];

    const randomText = cardText[Math.floor(Math.random() * cardText.length)];

    return (
        <div className="card d-inline-block my-4 mx-2 border rounded-2 text-center">
            <img src="https://placehold.co/500x325" className="card-img-top"></img>
            <div className="card-body mx-2 my-2 ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{randomText}</p>
            </div>
            <div className="card-footer bg-light py-3">
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    );
};

export default Card;
