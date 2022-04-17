import React from "react";
import Button from "../../UI/Button";
import Body from "../../UI/Typography/Body";
import Heading from "../../UI/Typography/Heading";
import "./BlockContent.scss";

const BlockContent = () => {
  return (
    <section className="header-content">
      <div className="content-container">
        <div className="items">
          <div className="items__heading">
            <Heading type="inverted">
              Test assignment for front-end developer
            </Heading>
          </div>
          <div className="items__text">
            <Body type="inverted">
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </Body>
          </div>
          <div className="items__button">
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockContent;
