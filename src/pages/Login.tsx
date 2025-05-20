import { useRef } from "react";
import "../App.css";
import { Header } from "../components/Header";
import Label from "../components/Label";

export const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Username:", usernameRef.current?.value);
    console.log("Password:", passwordRef.current?.value);
    console.log("Email:", emailRef.current?.value);
    console.log("Age:", ageRef.current?.value);
  }

  return (
    <div className="login-container">
      <Header title={"Login"} description={null} size={1} />
      <form className="login-form" onSubmit={submitHandler}>
        
        <Label text="Username:" labelType="Info">
          <input
            ref={usernameRef}
            className="login-input"
            type="text"
            name="username"
          />
        </Label>

        <Label text="Password:" labelType="Info">
          <input
            ref={passwordRef}
            className="login-input"
            type="password"
            name="password"
          />
        </Label>

        <Label text="Email:" labelType="Warning">
          <input
            ref={emailRef}
            className="login-input"
            type="email"
            name="email"
          />
        </Label>

        <Label text="Age:" labelType="Success">
          <input
            ref={ageRef}
            className="login-input"
            type="number"
            name="age"
          />
        </Label>

        <button type="submit" className="login-button">Submit</button>
      </form>
    </div>
  );
};
