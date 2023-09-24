import { Link } from "react-router-dom";
import React from "react";

const BackButton = () => {
	return (
		<p className="center">
			<Link to="/" className="btn btn-center">
				&larr; Back to reservations
			</Link>
		</p>
	);
};

export default BackButton;
