const { PORT, MONGO_URL } = require("./config.js");
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

// Middleware for parsing request (should be placed before routes)
app.use(express.json());

// CORS middleware (should be placed before routes)
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

// Routes
const router = require('./routes/booksRoutes');
app.use('/books', router);

// Root route
app.get("/", (request, response) => {
    // console.log(request);
    return response.status(234).send("ok");
});

// ... (rest of your routes)

mongoose.connect(MONGO_URL).then(() => {
    console.log("App connected to the database");
    app.listen(PORT, () => {
        console.log(`App is listening to port:${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});
