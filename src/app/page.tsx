"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { useDispatch } from "react-redux";
import { adduserDetails } from "../../Redux/Modules/userlogin";

function Page() {
  // const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const submitData = { email, password };

    try {
      const res = await fetch("https://dev-api.peepul.farm/v1.0/users/signin", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });
      const response = await res.json();
      if (response.status == 200) {
        router.push("/home");
        localStorage.setItem("user_data", JSON.stringify(response.data));
      } else if (response.status === 400) {
        console.error("Bad Request:", response.error);
      } else if (response.status === 404) {
        console.error("Resource Not Found:", response.error);
      } else {
        console.error("Unhandled Status Code:", response.status);
      }
    } catch (error) {
      console.log(error);
    }

    return (
      <div>
        <TextField
          id="outlined-basic"
          label="email"
          value={email}
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <br></br>
        <br></br>
        <TextField
          id="outlined-basic"
          label="password"
          value={password}
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>

        <Button variant="contained" size="small" onClick={handleSubmit}>
          submit
        </Button>
        <br></br>
      </div>
    );
  };
}

export default Page;
