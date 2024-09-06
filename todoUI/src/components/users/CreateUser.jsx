import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

export default function CreateUser({ show, setShow, createUser }) {
  const handleClose = () => setShow(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    createUser(data);
    reset();
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                {...register("first_name", {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                {...register("last_name", {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="genderSelection"
                {...register("gender", {
                  required: true,
                  maxLength: 1,
                })}
              >
                <option>Open this select menu</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                {...register("email", {
                  required: true,
                  pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
                })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
            <Button variant="secondary" onClick={handleClose} className="m-2">
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
