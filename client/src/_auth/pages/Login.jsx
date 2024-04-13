import { Card, Input, Button, Typography } from "@material-tailwind/react";

export function Login() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="self-center">
        Login
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
          />
        </div>

        <Button className="mt-6" fullWidth>
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
