import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import React from "react";

const Header = () => {
	return (
		<header className="header">
			<Link to="/" className="header-title">
				<img src={Logo} alt="" width="300" />
			</Link>
		</header>
	);
};

export default Header;
