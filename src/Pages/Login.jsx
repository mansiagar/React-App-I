import "react";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Create";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const [token, setToken] = useState(null);
  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        // url: `https://fakestoreapi.com/auth/login`,
        url: `https://frill-shard-licorice.glitch.me/login`,
        method: "POST",
        data: {
          username: username, //"mor_2314",
          password: password, //"83r5^_"
        },
        // updated username and password
        // {
        //   "username": "admin",
        //   "password": "password123"
        // }
      });
      console.log(response.data);
      // login(response.data.token);
      if (response.data.success) {
        console.log(response.data.token, "response");
        const { token } = response.data;
        login(token); //sens the token to context
      }
    } catch (error) {
      //set error
      setError("Invalid Crediantials", error);
    }
  };
  return (
    <div>
      {error && <h1>{error}</h1>}
      {/* {token && <h1>{token}</h1>} */}
      <h1>This is login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
