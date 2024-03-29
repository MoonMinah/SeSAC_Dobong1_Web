import { useSelector, useDispatch } from "react-redux";
import { create, done } from "../store/module/todo";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const doneList = list.filter((li) => li.done === true);

  const dispatch = useDispatch();

  return (
    <section className="DoneList">
      <h2>완료 한 일</h2>
      <hr />
      <ul>
        {doneList.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
  );
}
