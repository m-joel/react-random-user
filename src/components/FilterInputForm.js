import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const UserForm = ({ onFetchUsers }) => {
	const [numUsers, setNumUsers] = useState(1);
	const [gender, setGender] = useState("");
	const [nationality, setNationality] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onFetchUsers({ numUsers, gender, nationality });
	};

	return (
		<Container className="mt-4">
			<Form onSubmit={handleSubmit} className="p-4 shadow bg-white rounded">
				<h3 className="text-center mb-3">Fetch Random Users</h3>
				<Row className="mb-3">
					<Col>
						<Form.Group controlId="numUsers">
							<Form.Label>Number of Users</Form.Label>
							<Form.Control
								type="number"
								min="1"
								value={numUsers}
								onChange={(e) => setNumUsers(e.target.value)}
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="gender">
							<Form.Label>Gender</Form.Label>
							<Form.Select value={gender} onChange={(e) => setGender(e.target.value)}>
								<option value="">Any</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</Form.Select>
						</Form.Group>
					</Col>
				</Row>

				<Form.Group controlId="nationality" className="mb-3">
					<Form.Label>Nationality (e.g., US, GB, FR)</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter country code"
						value={nationality}
						onChange={(e) => setNationality(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit" className="w-100">
					Fetch Users
				</Button>
			</Form>
		</Container>
	);
};

export default UserForm;
