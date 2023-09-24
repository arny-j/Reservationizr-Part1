import React, { useState, useEffect } from "react";
import "./ReservationList.css";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

const ReservationList = () => {
	const [reservations, setReservatons] = useState([]);

	useEffect(() => {
		const fetchReservations = async () => {
			try {
				const response = await fetch("http://localhost:5001/reservations");
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setReservatons(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchReservations();
	}, []);

	return (
		<>
			<h1>Upcoming reservations</h1>
			<ul className="reservations">
				{reservations.map((reservation) => (
					<li key={reservation.id} className="reservation">
						<p className="name">{reservation.restaurantName}</p>
						<p className="date">{formatDate(reservation.date)}</p>
						<Link to={`/reservations/${reservation.id}`} className="view-more">
							<p>View More</p>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default ReservationList;
