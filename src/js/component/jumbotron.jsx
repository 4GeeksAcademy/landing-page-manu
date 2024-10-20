
import React from "react";

const Jumbotron = () => {
    return (
        <div className="col-12  bg-light p-4 text-start  justify-content-center">
            <h1 className="text-body-emphasis display-3"><b>A Warm Welcome!</b></h1>
            <p className="col-lg-12  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ex ac dui eleifend ultrices. Aliquam lobortis consectetur vulputate. Sed ut nisl odio. Nullam at enim molestie, placerat quam in.
            </p>
            <button className="btn btn-primary px-2" type="button">
                Call to action!
            </button>
            <br></br>
        </div>
    );
};


export default Jumbotron;