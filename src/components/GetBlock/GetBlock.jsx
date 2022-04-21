import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import { API_BASE } from "../../apiQueryData";

import UserList from "./UserList/UserList";
import ShowMoreButton from "./ShowMoreButton";
import Heading from "../UI/Typography/Heading";
import PageStateContext from "../../context";
import Preloader from "../UI/Preloader";

import "./GetBlock.scss";

const GetBlock = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // may be used for unexpandable user list
  const [totalPages, setTotalPages] = useState(2);
  const [isHiding, setIsHiding] = useState(false);
  const [loading, setLoading] = useState(false);

  const { offset, setOffset } = useContext(PageStateContext);

  const timestampCompare = (prevUser, nextUser) => {
    return nextUser.registration_timestamp - prevUser.registration_timestamp;
  };

  const showMoreUsers = () => {
    //setCurrentPage(currentPage + 1); For one page view "page by page" use current page accumulator instead of offset
    setOffset(offset + 6);
  };

  const getUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        API_BASE + `/api/v1/users?page=${currentPage}&count=${offset}`
      );

      if (response.data.success) {
        const { users, total_pages } = response.data;
        setUserData(users.sort(timestampCompare));
        setTotalPages(total_pages);
        setLoading(false);
      }
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
  }, [offset]);

  return (
    <div id="getRoute" className="get-block">
      <div className="block-container">
        <div className="heading-container">
          <Heading>Working with GET request</Heading>
        </div>
        {loading ? <Preloader /> : <UserList users={userData} />}
        <div className="btn-container">
          <ShowMoreButton clickFn={showMoreUsers} isHiding={isHiding} />
        </div>
      </div>
    </div>
  );
};

export default GetBlock;
