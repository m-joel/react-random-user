import { useState } from "react";
import axios from "axios"; // Import Axios for API calls
import FilterInputForm from "./components/FilterInputForm"; // Import FilterInputForm component
import FetchedUserList from "./components/FetchedUserList"; // Import FetchedUserList component
import "./App.css"; // Import styles

const App = () => {
  // State to store fetched user data
  const [users, setUsers] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(false);

  // Function to fetch users from API
  const fetchUsers = async ({ numUsers, gender, nationality }) => {
    setLoading(true); // Set loading to true before API request
    try {
      const response = await axios.get("https://randomuser.me/api/", {
        params: {
          results: numUsers, // Number of users to fetch
          gender: gender || undefined, // Gender filter (if selected)
          nat: nationality || undefined, // Nationality filter (if entered)
        },
      });
      setUsers(response.data.results); // Store fetched users in state
    } catch (error) {
      console.error("Error fetching users:", error); // Handle API errors
    }
    setLoading(false); // Set loading to false after API response
  };

  return (
    <div className="container">
      <h1>Random User Generator</h1>
      {/* Pass fetchUsers function to FilterInputForm component */}
      <FilterInputForm onFetchUsers={fetchUsers} />
      {/* Show loading message or user list */}
      {loading ? <p>Loading...</p> : <FetchedUserList users={users} />}
    </div>
  );
};

export default App;
