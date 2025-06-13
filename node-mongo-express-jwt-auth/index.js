import express from "express";

const port = 8000;

const app = express();

app.get("/", async (req, res) => {
  try {
    res.json({ message: "Home Page" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  try {
    console.log("app is running on port 8000");
  } catch (error) {
    console.log(error);
  }
});
