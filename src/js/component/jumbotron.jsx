
import React from "react";

const Jumbotron = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="position-relative  bg-light px-4 pb-4 pt-2 text-start col-8 justify-content-center">
                <h1 className="text-body-emphasis">A Warm Welcome!</h1>
                <p className="col-lg-12  ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia velit. Ut sed suscipit risus, eu luctus sem. Mauris congue odio nibh.
                </p>
                <button className="btn btn-primary px-2" type="button">
                    Call to action
                </button>
            </div>
        </div>
    );
};


export default Jumbotron;