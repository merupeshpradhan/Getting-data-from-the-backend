import express from "express";

const app = express();

app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.send("Server is Ready");
// });

// Get a list of 5 Study group member

app.get("/api/member", (req, res) => {
  const member = [
    { id: 1, name: "Amiya", type: "Super boy" },
    { id: 2, name: "Adii", type: "Wonderful boy" },
    { id: 3, name: "Manash", type: "Khatarnak boy" },
    { id: 4, name: "Rashmi", type: "System management boy" },
    { id: 5, name: "Sudipta", type: "Outstanding boy" },
  ];
  res.send(member);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
