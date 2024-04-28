import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useLoginUserQuery } from "../../lib/query/query";
import { useState } from "react";
import { useLoginUserMutation } from "../../lib/query/mutations";

export function Login() {
  // getLoginQuery

  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const {
    mutate: loginUser,
    isError,
    error,
    isLoading,
  } = useLoginUserMutation();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("inside handleLogin");
    loginUser({
      email: emailState,
      password: passwordState,
    });
  };

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
        {isError && (
          <Typography color="red">
            Error: {error?.message || "Unknown error"}
          </Typography>
        )}

        <Button type="submit" className="mt-6" fullWidth>
          login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          No account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign up
          </a>
        </Typography>
      </form>
    </Card>
  );
}
