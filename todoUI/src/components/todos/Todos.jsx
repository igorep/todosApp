import Container from "react-bootstrap/esm/Container";
import TodosTable from "./TodosTable";
import CreateTodo from "./CreateTodo";

export default function Todos() {
  return (
    <>
      <Container fluid>
        <TodosTable />
      </Container>
      <Container fluid>
        <CreateTodo />
      </Container>
    </>
  );
}
