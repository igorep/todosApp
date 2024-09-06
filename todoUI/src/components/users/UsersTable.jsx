import { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import CreateUser from "./CreateUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function UsersTable({
  usersData = [],
  createUser,
  updateUsers,
}) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const handleShow = () => setShow(true);

  const handleSelection = ({ target }) => {
    const { id, checked } = target;
    if (checked) {
      setSelected((prevSelected) => [...prevSelected, id]);
    } else {
      const updated = selected.filter((userid) => id !== userid);
      setSelected([...updated]);
    }
  };

  const handleDelete = async () => {
    await axios.delete("http://localhost:3001/users/delete", {
      data: { users: selected },
    });
    updateUsers(selected);
    setSelected([]);
  };

  return (
    <Container fluid className="mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Active user</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => {
            console.log(user);
            return (
              <tr key={user.user_id}>
                <th style={{ textAlign: "center", width: "12px" }}>
                  <Form.Check
                    type="checkbox"
                    id={user.user_id}
                    onClick={handleSelection}
                  />
                </th>
                <td>{user.user_name}</td>
                <td>{user.user_lastname}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{"" + user.active}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateUser show={show} setShow={setShow} createUser={createUser} />
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>
      {selected.length > 0 && (
        <Button variant="danger" className="m-2" onClick={handleDelete}>
          Delete
        </Button>
      )}
    </Container>
  );
}
