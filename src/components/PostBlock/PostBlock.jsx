import React, { useState, useEffect } from "react";
import { API_BASE } from "../../apiQueryData";
import axios from "axios";
import Form from "./Form";

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
    <div>
      <Form positions={positions} />
      
    </div>
  );
};

export default PostBlock;
