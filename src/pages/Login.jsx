import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex  flex-col gap-3 items-start p-8 min-w-[340px]  sm:min-w-96 border rounded-xl shadow-lg text-zinc-600 m-auto text-sm">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "login"} to book appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border w-full border-zinc-300 rounded p-2 mt-1"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border w-full border-zinc-300 rounded p-2 mt-1"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border w-full border-zinc-300 rounded p-2 mt-1"
            value={password}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-primary rounded-md text-white py-2 w-full text-base">
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
