const express = require("express");
const cors = require('cors');
const app = express();  // Should be express() instead of express.Router()
const userRouter = require("./routes/user");
const accountRouter = require("./routes/account");

app.use(express.json());
app.use(cors());

// Define routes
app.use("/api/v1/user", userRouter);  // Correct route path
app.use("/api/v1/account", accountRouter);  // Correct "account" spelling

// Start the server
app.listen(3000, () => {
    console.log("server started on port 3000");
});
