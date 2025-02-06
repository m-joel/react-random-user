const FetchedUserList = ({ users }) => {
    return (
      <div className="user-list">
        {/* Show a message if no users are available */}
        {users.length === 0 ? (
          <p>No users found. Try adjusting your search criteria.</p>
        ) : (
          users.map((user) => (
            <div key={user.login.uuid} className="user-card">
              {/* Display user profile picture */}
              <img src={user.picture.medium} alt={user.name.first} />
              {/* Display user name */}
              <h3>{`${user.name.first} ${user.name.last}`}</h3>
              {/* Display additional user details */}
              <p>Gender: {user.gender}</p>
              <p>Email: {user.email}</p>
              <p>Nationality: {user.nat}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default FetchedUserList;
  