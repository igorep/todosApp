import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import UsersTable from "./UsersTable";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export default function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const createUser = async (user) => {
    try {
      const res = await axios.post("http://localhost:3001/users/createUser", {
        ...user,
      });
      setData((prevData) => [...prevData, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUsers = (users) => {
    setData((prevData) => prevData.filter((id) => !users.includes(id.user_id)));
  };

  return (
    <>
      <Container fluid>
        {error && (
          <Alert key={"danger"} variant={"danger"}>
            Internal Server Error
          </Alert>
        )}
        {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {!loading && !error && (
          <UsersTable
            usersData={data}
            createUser={createUser}
            updateUsers={updateUsers}
          />
        )}
      </Container>
    </>
  );
}
