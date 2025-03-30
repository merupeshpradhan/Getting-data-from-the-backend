import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [members, setMember] = useState([]);

  useEffect(() => {
    axios
      .get("/api/member")
      .then((respons) => {
        setMember(respons.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Full stack learning | Rupesh Pradhan</h1>
      <p>MEMBERS: {members.length}</p>

      {members.map((member, index) => (
        <div key={member.id}>
          <h3>{member.name}</h3>
          <p>{member.type}</p>
        </div>
      ))}
    </>
  );
}

export default App;
