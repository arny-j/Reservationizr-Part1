const express = require("express");
const cors = require("cors");
const app = express();
const validId = require("./utils/validId");
const ReservationModel = require("./models/ReservationModel");

app.use(cors());
app.use(express.json());

app.get("/reservations", async (req, res) => {
	let reservations = await ReservationModel.find({});
	res.send(reservations);
});

app.get("/reservations/:id", (req, res) => {
	const { id } = req.params;
	if (!validId(id)) {
		res.status(400).json({ message: "id provided is invalid" });
		return;
	}

	ReservationModel.findById(id).then((reservation) => {
		if (!reservation) {
			res.status(404).json({ message: "id not found" });
		} else {
			res.status(200).send(reservation);
		}
	});
});

module.exports = app;
