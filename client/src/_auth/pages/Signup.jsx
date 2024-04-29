import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { useState } from "react";
import { useRegisterUserMutation } from "../../lib/query/mutations"; // You'll need to define this function
import { Navigate, useNavigate } from "react-router-dom";

export function Signup() {
  const [emailState, setEmailState] = useState("");
  const [nameState, setNameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [verifyPasswordState, setVerifyPasswordState] = useState("");

  const {
    mutate: registerUser,
    isError,
    error,
    isLoading,
  } = useRegisterUserMutation(); // This mutation needs to be set up similarly to useLoginUserMutation
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (passwordState !== verifyPasswordState) {
      alert("Passwords do not match.");
      return;
    }
    console.log("inside handleRegister");
    registerUser({
      email: emailState,
      name: nameState,
      password: passwordState,
    });
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="self-center">
        Sign Up
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleRegister}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={emailState}
            onChange={(e) => setEmailState(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="John Doe"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={nameState}
            onChange={(e) => setNameState(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Verify Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={verifyPasswordState}
            onChange={(e) => setVerifyPasswordState(e.target.value)}
          />
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Sign Up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Button onClick={(e) => navigate("/")}>Login</Button>
        </Typography>
        {isError && <Alert color="red">{error}</Alert>}
      </form>
    </Card>
  );
}
