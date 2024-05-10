import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

export function Dialog() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Register Project
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Fill in the project details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            placeholder="Project Name"
            label="Name"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          />
          <Input
            size="lg"
            placeholder="Project Description"
            label="Description"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          />
          <Select
            size="lg"
            label="Admin"
            multiple
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <Option value="user1">User 1</Option>
            <Option value="user2">User 2</Option>
            {/* Add more options as needed */}
          </Select>
          <Select
            size="lg"
            label="Co-Admin"
            multiple
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <Option value="user3">User 3</Option>
            <Option value="user4">User 4</Option>
            {/* Add more options as needed */}
          </Select>
          <Select
            size="lg"
            label="Members"
            multiple
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <Option value="user5">User 5</Option>
            <Option value="user6">User 6</Option>
            {/* Add more options as needed */}
          </Select>
        </div>
        <Button className="mt-6" fullWidth>
          Register Project
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Need to modify project details?{" "}
          <a href="#" className="font-medium text-gray-900">
            Edit Project
          </a>
        </Typography>
      </form>
    </Card>
  );
}
