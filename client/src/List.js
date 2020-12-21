import React, { Fragment, useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const List = () => {
  const [users, setUsers] = useState([]);
  const [likes, setLikes] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:8000/users");
    const jsonData = await response.json();
    setUsers(jsonData);
  };

  const getLikes = async (id) => {
    const response = await fetch("http://localhost:8000/likes/" + id);
    const jsonData = await response.json();
    setLikes(jsonData);
    //console.log(jsonData);
  }

  useEffect(() => {
    getUsers();
  }, []);
  // console.log(likes);

  //console.log(users);

  return (
    <Fragment>
      <div class="d-flex justify-content-center mt-5">
        <DropdownButton id="dropdown-basic-button" title="Users">
        {
          users.map(user => (
            <Dropdown.Item onClick = {() => getLikes(user.user_id)}>{user.user_last_name + ', ' + user.user_first_name}</Dropdown.Item>
          ))
        }
        </DropdownButton>
      </div>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Music Group</th>
          </tr>
        </thead>
        <tbody>
          {likes.map(like => (
            <tr key={likes.indexOf(like)}>
              <td>
                {like.fan_of_music_group}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default List;
