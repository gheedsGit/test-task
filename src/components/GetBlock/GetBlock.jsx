import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API_BASE } from "../../apiQueryData";
import UserList from "./UserList/UserList";
import ShowMoreButton from "./ShowMoreButton";
import "./GetBlock.scss";
import Heading from "../UI/Typography/Heading";
import OffsetContext from "../../context";

const GetBlock = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [isHiding, setIsHiding] = useState(false);

  const { offset, setOffset } = useContext(OffsetContext);

  const timestampCompare = (prevUser, nextUser) => {
    return nextUser.registration_timestamp - prevUser.registration_timestamp;
  };

  const showMoreUsers = () => {
    //setCurrentPage(currentPage + 1); For one page view use current page accumulator instead of offset
    setOffset(offset + 6);
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(
        API_BASE + `/api/v1/users?page=${currentPage}&count=${offset}`
      );
      const { users, total_pages } = response.data;
      setUserData(users.sort(timestampCompare));
      setTotalPages(total_pages);
    } catch (e) {
      console.log(e);
    }
  };

  const checkButtonVisibility = () => {
    if (currentPage === totalPages) {
      setIsHiding(true);
    }
  };

  useEffect(() => {
    getUserData();
    checkButtonVisibility();
  }, [userData]);

  return (
    <div id="getRoute" className="get-block">
      <div className="block-container">
        <div className="heading-container">
          <Heading>Working with GET request</Heading>
        </div>
        <UserList users={userData} />
        <div className="btn-container">
          <ShowMoreButton clickFn={showMoreUsers} isHiding={isHiding} />
        </div>
      </div>
    </div>
  );
};

export default GetBlock;
