import React, { useState, useEffect } from "react";
import axios from "axios";

// status: idle, fetching, fetched, error

function Members() {
  const [members, setMembers] = useState({ data: [], status: "idle" });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setMembers({ members: members.data, status: "fetching" });
        const response = await axios.get("http://localhost:5000/tuno/all");
        console.log({ response });
        setMembers({ members: members.data, status: "fetched" });
      } catch (e) {
        console.log(e);
        setMembers({ members: members.data, status: "error" });
      }
    };
    fetchUsers();
  }, []);

  return <div>Members</div>;
}

export default Members;
