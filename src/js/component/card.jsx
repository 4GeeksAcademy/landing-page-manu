import React from "react";

const Cards = () => {
    return (
        <div className="card d-inline-block col-3 my-4 mx-2 border rounded-2 ">
            <img src="https://placehold.co/500x325" className="card-img-top"></img>
            <div className="card-body m-4">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus sem, rutrum.</p>

            </div>
            <div className="card-footer bg-light py-3">
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    );
};

export default Cards;
