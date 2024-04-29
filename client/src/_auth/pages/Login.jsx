import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { useLoginUserQuery } from "../../lib/query/query";
import { useEffect, useState } from "react";
import { useLoginUserMutation } from "../../lib/query/mutations";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function Login() {
  // getLoginQuery

  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const navigate = useNavigate();

  const {
    mutate: loginUser,
    isError,
    error,
    isSuccess,
  } = useLoginUserMutation();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("inside handleLogin");
    loginUser({
      email: emailState,
      password: passwordState,
    });
  };
  console.log(isSuccess);
  useEffect(() => {
    if (isError && error) {
      toast.error(String(error)); // Assuming `error` is not null or undefined
    }
  }, [isError, error]); // Only re-run if `isError` or `error` changes
  useEffect(() => {
    if (isSuccess) {
      toast.success(String("Welcome")); // Assuming `error` is not null or undefined
      navigate("/dashboard");
    }
  }, [isSuccess]);
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="self-center">
        Login
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleLogin}
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
            onChange={(e) => {
              setEmailState(e.target.value);
            }}
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
            onChange={(e) => {
              setPasswordState(e.target.value);
            }}
          />
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          No account?{" "}
          <Button onClick={(e) => navigate("/signup")}>Signup</Button>
        </Typography>
      </form>
      {/* {isError && toast.error("My error toast")} */}
    </Card>
  );
}
