import { useState } from "react";
import Button from "../components/Buttons";

function UseState() {

  // using array destructure[num, function] = useState()
  // const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([""]);

  let count = 10;

  const addUser = () => {
    setUsers([...users, username]);
    setUsername("");
  };
  // const addCounter = ()=>{
  //   setCounter(counter+1)
  // }
// const updateTodoValue = (e) => setUsername(e.target.value)
  console.log("Component Rerender", username);
  return (
    <div className="flex flex-col items-center m-20">
      <h1 className="text-[50px] text-center my-3">
        Todo List <span className="underline"></span>{" "}
      </h1>
      <div> 
        <input
          value={username}
          placeholder="Your Task"
          // using function 
          // onChange={updateTodoValue}
          // without function menthod
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
      {/* <div>
        <h2>{counter}</h2>
        <button onClick = {addCounter}> Update counter</button>
      </div> */}
        <Button text={"Add"} onClick={addUser} />
        <Button text={"Clear"} onClick={() => setUsers([])} />
      </div>

      {users.map((data, ind) => (
        <li
          className="text-start font-medium text-2xl my-2 bg-purple-200 text-black w-full"
          key={ind}
        >
          {data}
        </li>
      ))}

      {/* <div>
        <Button text={"+1"} onClick={() => setNum(num + 1)} />
        <Button text={"+2"} onClick={() => setNum(num + 2)} />
        <Button text={"+3"} onClick={() => setNum(num + 3)} />
        <Button text={"+4"} onClick={() => setNum(num + 4)} />
        <Button text={"+5"} onClick={() => setNum(num + 5)} />
      </div> */}
    </div>
  );
}

export default UseState; 