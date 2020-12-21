import React, { Fragment, useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const List = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/users");
      const jsonData = await response.json();
      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getLikes = async (id) => {
    console.log(id);
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <Fragment>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      {
        users.map(user => (
          <Dropdown.Item onClick = {() => getLikes(user.user_id)}>{user.user_id}</Dropdown.Item>
        ))
      }
      </DropdownButton>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Music Group</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default List;
