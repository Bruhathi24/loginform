import React, {useState} from "react";
function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [errors,setErrors] = useState({});
  const handleSubmit=(e)=>{
    e.preventDefault();
    let validationErrors={};
    if (email===""){
      validationErrors.email="Email is required";
    }
    if (password==="") {
      validationErrors.password="Password is required";
    } else if (password.length<6) {
      validationErrors.password=
        "Password must be at least 6 characters";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length===0) {
      alert("Login Successful");
    }
  };
  
    return (
  <div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
    backgroundColor:"#f2f2f2"
  }}>
    <div style={{
      padding:"30px",
      backgroundColor:"white",
      borderRadius:"10px",
      boxShadow:"0px 0px 10px gray",
      width:"300px"
    }}>
      <h2 style={{textAlign:"center"}}>
        Login Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{
              width:"100%",
              padding:"8px",
              marginTop:"5px"
            }}
          />
          <p style={{color:"red"}}>
            {errors.email}
          </p>
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{
              width:"100%",
              padding:"8px",
              marginTop:"5px"
            }}
          />
          <p style={{color:"red"}}>
            {errors.password}
          </p>
        </div>
        <button
          type="submit"
          style={{
            width:"100%",
            padding:"10px",
            backgroundColor:"blue",
            color:"white",
            border:"none",
            borderRadius:"5px",
            cursor:"pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  </div>
);
}
export default App;