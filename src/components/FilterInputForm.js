import { useState } from "react";

const FilterInputForm = ({ onFetchUsers }) => {
  // State variables for form inputs
  const [numUsers, setNumUsers] = useState(1);
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    onFetchUsers({ numUsers, gender, nationality }); // Call parent function to fetch users
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      {/* Input for specifying number of users */}
      <label>
        Number of Users:
        <input
          type="number"
          min="1"
          value={numUsers}
          onChange={(e) => setNumUsers(e.target.value)}
        />
      </label>

      {/* Dropdown for gender selection */}
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      {/* Input for nationality selection */}
      <label>
        Nationality:
        <input
          type="text"
          placeholder="e.g., US, GB, FR"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
      </label>

      {/* Submit button to fetch users */}
      <button type="submit">Fetch Users</button>
    </form>
  );
};

export default FilterInputForm;
