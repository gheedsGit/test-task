import React, { useState, useEffect } from "react";
import { API_BASE } from "../../apiQueryData";
import axios from "axios";
import Form from "./Form";
import Heading from "../UI/Typography/Heading";
import "./PostBlock.scss";

const PostBlock = () => {
  const [positions, setPositions] = useState([]);

  const getPositions = async () => {
    const response = await axios.get(`${API_BASE}/api/v1/positions`);
    setPositions(response.data.positions);
  };

  useEffect(() => {
    getPositions();
  }, []);

  return (
    <section id="postRoute" className="post-block">
      <div className="post-block__heading">
        <Heading>Working with POST request</Heading>
      </div>
      <Form positions={positions} />
    </section>
  );
};

export default PostBlock;
