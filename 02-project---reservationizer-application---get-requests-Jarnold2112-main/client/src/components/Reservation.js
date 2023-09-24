import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import "./Reservation.css";
import BackButton from "./BackButton";

const Reservation = () => {
	const { id } = useParams();
	const [reservation, setReservation] = useState({});
	const [isNotFound, setIsNotFound] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5001/reservations/${id}`);

			if (response.ok === false) {
				setIsNotFound(true);
				return;
			}

			const data = await response.json();
			setReservation(data);
			setIsLoading(false);
		};

		fetchData();
	}, [id]);

	if (isNotFound) {
		return (
			<>
				<p className="error">Sorry! We can't find that reservation</p>
				<BackButton />
			</>
		);
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<div className="reservation">
				<p className="nameSingle">{reservation.restaurantName}</p>
				<p className="dateSingle">{formatDate(reservation.date)}</p>
				<p className="partySizeSingle">
					Party Size: <span>{reservation.partySize}</span>
				</p>
			</div>
			<BackButton />
		</>
	);
};

export default Reservation;
