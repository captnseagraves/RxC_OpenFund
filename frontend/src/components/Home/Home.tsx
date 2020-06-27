import React, { useContext, useEffect } from "react";
import "./Home.scss";
import { ActionContext, StateContext } from "../../hooks";
import HomeTopBar from "../HomeTopBar";
import BusinessItem from "../BusinessItem";

function Home() {
  const { fetchAllBusinesses } = useContext(ActionContext);
  const { businesses } = useContext(StateContext);

  useEffect(() => {
    fetchAllBusinesses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home">
      <HomeTopBar/>
      {businesses.length ? (
        <ul className="business-list">
          {businesses.map((business, i) => (
            <BusinessItem key={i} business={business} />
          ))}
        </ul>
      ) : (
        <div className="center-text">Doesn't match any results.</div>
      )}
    </div>
  );
}

export default Home;
