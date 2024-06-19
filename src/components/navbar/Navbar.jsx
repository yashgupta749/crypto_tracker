import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_logo from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setcurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    console.log(event.target.value);
    switch (event.target.value) {
      case "usd": {
        setcurrency({
          name: "usd",
          symbol: "$",
        });
      }
      case "eur": {
        setcurrency({
          name: "eur",
          symbol: "Є",
        });
      }
      case "inr": {
        setcurrency({
          name: "inr",
          symbol: "₹",
        });
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>home</li>
        </Link>
        <li>features</li>
        <li>pricing</li>
        <li>blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
        <button>
          Sign Up
          <img src={arrow_logo} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
