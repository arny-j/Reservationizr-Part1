const request = require("supertest");
const app = require("./app");
const ReservationModel = require("./models/ReservationModel");

// Test for all reservations
it("GET /reservations", async () => {
	const reservations = [
		{
			id: "507f1f77bcf86cd799439011",
			partySize: 4,
			date: "2023-11-17T06:30:00.000Z",
			userId: "614abe145f317b89a2e36883",
			restaurantName: "Island Grill",
		},
		{
			id: "614abf0a93e8e80ace792ac6",
			partySize: 2,
			date: "2023-12-03T07:00:00.000Z",
			userId: "614abe145f317b89a2e36883",
			restaurantName: "Green Curry",
		},
	];

	const response = await request(app).get("/reservations");
	expect(response.status).toBe(200);
	expect(response.body).toEqual(reservations);
});

// Test for single reservation
it("GET /reservations/:id", async () => {
	const reservations = {
		id: "507f1f77bcf86cd799439011",
		partySize: 4,
		date: "2023-11-17T06:30:00.000Z",
		userId: "614abe145f317b89a2e36883",
		restaurantName: "Island Grill",
	};

	const response = await request(app).get(
		"/reservations/507f1f77bcf86cd799439011"
	);
	expect(response.status).toBe(200);
	expect(response.body).toEqual(reservations);
});

// Test for InvalidID
it("GET /reservations/hello", async () => {
	const expected = { message: "id provided is invalid" };

	const response = await request(app).get("/reservations/hello");
	expect(response.status).toBe(400);
	expect(response.body).toEqual(expected);
});

// Test for id not found
it("GET /reservations/invalidID", async () => {
	const expected = { message: "id not found" };

	const response = await request(app).get(
		"/reservations/506f1f77bcf86cd799439011"
	);
	expect(response.status).toBe(404);
	expect(response.body).toEqual(expected);
});

it("GET /reservations/invalidID", async () => {
	const expected = { message: "id not found" };

	const response = await request(app).get(
		"/reservations/506f1f77bcf86cd799439011"
	);
	expect(response.status).toBe(404);
	expect(response.body).toEqual(expected);
});
