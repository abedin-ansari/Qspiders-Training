import React, { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const FetchUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("https://dummyjson.com/users"); // "https://dummyjson.com/users"
    let data = await res.json();
    console.log(data.users);

    setAllUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section>
      <h1>Users</h1>
      {allUsers.length === 0 ? (
        <PacmanLoader color="#ffed00" />
      ) : (
        allUsers.map((user) => {
          let { id, firstName, middleName, lastName, image } = user;
          return (
            <div key={id} className="flex flex-row-col">
              <img src={image} alt={firstName} />
              <h2>
                {firstName} {middleName} {lastName}
              </h2>
            </div>
          );
        })
      )}
    </section>
  );
};

export default FetchUsers;
