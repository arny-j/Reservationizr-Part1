// FIXME export a model for Reservations
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationModel = new Schema(
	{
		partySize: Number,
		date: String,
		userId: String,
		restaurantName: String,
	},
	{
		toJSON: {
			transform: (doc, ret) => {
				ret.id = ret._id;
				delete ret._id;
			},
		},
	}
);

module.exports = mongoose.model("Reservation", ReservationModel);
