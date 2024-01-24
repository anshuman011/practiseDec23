// 7jan synechron l2 //pending
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  // const [showUserDetails, setShowUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  const handleShowUserDetails = (e) => {
    e.preventDefault();
    // setShowUserDetails(true);
    setUserDetails((prev) => [...prev, { name, address }]);
  };
  console.log(userDetails);
  return (
    <div className="App">
      <form onSubmit={handleShowUserDetails}>
        <input
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          name="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">SUBMIT</button>
        {
          /* Object.keys(userDetails).length != 0 &&
          Object.values( */ userDetails.map((user, index) => {
            console.log(user, "user");
            return (
              <div key={index}>
                <p>{user.name}</p>
                <p>{user.address}</p>
              </div>
            );
          })
        }
      </form>
    </div>
  );
}

