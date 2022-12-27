import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";


function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  deleteButtonStatus,
}) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        isDisabled={deleteButtonStatus}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions