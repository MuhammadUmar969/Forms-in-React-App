import React, { useState } from "react";

const App = () => {
  const [name,setName] = useState("");
  const [fullName,setFullName] = useState();
  
  const [lastName,setLastName] = useState("");
  const [fullName2,setFullName2] = useState();

  //for first input
  const inputChange = (event) => {
  //console.log(name.target.value);
  setName(event.target.value);
  };
  
  //for second input
  const inputChange2 = (event) =>{
    setLastName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
    setFullName2(lastName);
  };

  return(
   <>
   <div>
   <form onSubmit={onSubmit}>
    <div>
      <h1>Hello {fullName} {fullName2}</h1>
      <input type="text" placeholder="Enter Your First Name" onChange={inputChange} value={name} />
      <br />
      <input type="text" placeholder="Enter Your Last Name " onChange={inputChange2} value={lastName} />
      <button type="submit">Click Me 👍</button>
    </div>
    </form>
    </div>
   </>
  );
}

export default App;