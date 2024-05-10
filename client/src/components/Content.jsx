import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  Input,
  Checkbox,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

import { useCreateProjectMutation } from "../lib/query/mutations";
import { useState } from "react";

const MultiSelect = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const toggleOption = (value) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="relative">
      <Input
        label={label}
        readOnly
        value={selectedValues.join(", ")}
        onClick={() => setIsOpen(!isOpen)}
        placeholder={`Select ${label.toLowerCase()}`}
      />
      {isOpen && (
        <div className="absolute z-10 bg-white border w-full">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => toggleOption(option.value)}
              className="flex items-center p-2 cursor-pointer"
            >
              <Checkbox checked={selectedValues.includes(option.value)} />
              <span className="ml-2">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const Content = () => {
  const [projectState, setProjectState] = useState({
    name: "",
    description: "",
    admin: [],
    coAdmin: [],
    members: [],
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const {
    mutate: createProject,
    isError,
    error,
    isSuccess,
  } = useCreateProjectMutation();

  const handleCreateProject = (e) => {
    e.preventDefault();
    console.log("inside handleCreateProject");
    createProject({
      name: projectState.name,
      description: projectState.description,
      admin: projectState.admin,
      coAdmin: projectState.coAdmin,
      members: projectState.members,
    });
  };

  if (isError) {
    console.log("error", error);
  }
  if (isSuccess) {
    console.log("success");
  }

  return (
    <div className="relative border h-60 m-auto ">
      <div className="flex justify-between items-center ml-5 p-2">
        <div className="flex flex-col">
          <span className="mt-4 text-sm text-gray-600">
            Click <span className="bg-gray-200 text-blue-700">+ New</span> to
            create new task and wait for project manager card.
          </span>
        </div>
      </div>
      <div>
        <div className="border border-black border-opacity-5 w-52 h-8 ml-7 p-2 flex items-center align-middle m-auto justify-center mt-5 cursor-pointer">
          <span className="text-3xl text-gray-400" onClick={handleOpen}>
            +
          </span>
        </div>
      </div>

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody>
          <Card color="transparent" className="p-5" shadow={false}>
            <Typography
              variant="h4"
              color="blue-gray"
              className="self-center my-4 pb-2 uppercase border-b-2 border-gray-200 w-80 text-center"
            >
              Create project
            </Typography>
            <form className="flex flex-col gap-4">
              <Input size="lg" label="Project name" />
              <Input size="lg" label="Description" />
              <Input size="lg" label="Members" />
              <Button color="blue" onClick={handleCreateProject}>
                Create project
              </Button>
            </form>

            {/* {isError && toast.error("My error toast")} */}
          </Card>
        </DialogBody>
      </Dialog>
    </div>
  );
};
