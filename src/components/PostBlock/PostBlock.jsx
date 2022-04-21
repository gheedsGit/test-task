import React, { useState } from "react";

import Form from "./Form";
import Heading from "../UI/Typography/Heading";

import succesImage from "../../assets/img/success-image.svg";
import "./PostBlock.scss";

const PostBlock = () => {
  const [formSuccess, setFormSuccess] = useState(false);

  return (
    <section id="postRoute" className="post-block">
      <div className="post-block__heading">
        <Heading>
          {!formSuccess ? "Working with POST request" : "Congrats!!!"}
        </Heading>
      </div>
      {!formSuccess ? (
        <Form setFormSuccess={setFormSuccess} />
      ) : (
        <div className="img-container">
          <img src={succesImage} alt="Successfull registration" />
        </div>
      )}
    </section>
  );
};

export default PostBlock;
