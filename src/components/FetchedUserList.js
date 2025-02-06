import { Card, Row, Col, Container } from "react-bootstrap";

const FetchedUserList = ({ users }) => {
	return (
		<Container className="mt-4">
			<Row className="g-4 justify-content-center">
				{/* Show a message if no users are available */}
				{users.length === 0 ? (
					<p className="text-center text-muted">No users found. Try adjusting your search criteria.</p>
				) : (
					users.map((user) => (
						<Col key={user.login.uuid} xs={12} sm={6} md={4} lg={3}>
							<Card className="shadow-sm text-center">
								{/* Display user profile picture */}
								<Card.Img
									variant="top"
									src={user.picture.large}
									className="rounded-circle mx-auto mt-3"
									style={{ width: "100px", height: "100px", objectFit: "cover" }}
								/>
								<Card.Body>
									{/* Display user name */}
									<Card.Title className="fw-bold">
										{user.name.first} {user.name.last}
									</Card.Title>
									{/* Display additional user details */}
									<Card.Text className="text-muted">{user.email}</Card.Text>
									<Card.Text>
										<strong>Gender:</strong> {user.gender} <br />
										<strong>Nationality:</strong> {user.nat}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))
				)}
			</Row>
		</Container>
	);
};

export default FetchedUserList;

