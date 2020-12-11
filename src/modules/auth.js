import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "http://127.0.0.1:3000",
  prefixUrl: "/api",
  debug: false
});

export default auth;