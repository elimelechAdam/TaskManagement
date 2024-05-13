import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Card,
  Input,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useCreateProjectMutation } from "../../lib/query/mutations";
import useAuthStore from "../../lib/store/authStore";

export const Dialoger = ({ open, handleOpen }) => {
  const { userData } = useAuthStore();
  console.log(userData);
  const [memberInput, setMemberInput] = useState("");
  const [projectData, setProjectData] = useState({
    projectName: "",
    description: "",
    membersData: [],
  });

  const {
    mutate: createProject,
    isError,
    error,
    isSuccess,
  } = useCreateProjectMutation();

  if (isError) {
    console.log("error", error);
  }
  if (isSuccess) {
    console.log("success");
  }

  const handleCreateProject = (e) => {
    e.preventDefault();
    console.log("Final project data before mutation:", projectData);
    createProject({
      name: projectData.projectName,
      _id: userData._id,
      description: projectData.description,
      membersData: projectData.membersData,
    });
  };

  const handleMemberInput = (e) => {
    if (e.key === "Enter" && memberInput.trim() !== "") {
      e.preventDefault();
      const newMember = {
        email: memberInput,
        type: "member", // Default type is member
      };
      setProjectData({
        ...projectData,
        membersData: [...projectData.membersData, newMember],
      });
      setMemberInput("");
    }
  };

  const handleTypeChange = (index, newType) => {
    const updatedMembers = projectData.membersData.map((member, idx) =>
      idx === index ? { ...member, type: newType } : member
    );
    setProjectData({ ...projectData, membersData: updatedMembers });
  };
  const handleRemoveMember = (index) => {
    const newMembersData = [...projectData.membersData];
    newMembersData.splice(index, 1);
    setProjectData({
      ...projectData,
      membersData: newMembersData,
    });
  };
  return (
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
          <form className="flex flex-col gap-4" onSubmit={handleCreateProject}>
            <Input
              size="lg"
              label="Project name"
              value={projectData.projectName}
              onChange={(e) =>
                setProjectData({ ...projectData, projectName: e.target.value })
              }
            />
            <Input
              size="lg"
              label="Description"
              value={projectData.description}
              onChange={(e) =>
                setProjectData({ ...projectData, description: e.target.value })
              }
            />
            <div className="flex flex-col gap-2">
              <div className="w-full flex items-center">
                <Input
                  size="lg"
                  label="Members"
                  value={memberInput}
                  onChange={(e) => setMemberInput(e.target.value)}
                  onKeyPress={handleMemberInput}
                  className="flex-1"
                />
              </div>
              <div className="w-full">
                {projectData.membersData.map((member, index) => (
                  <div key={index} className="flex items-center gap-4 mb-2">
                    <div className="flex-1">
                      <Input
                        size="lg"
                        label=""
                        value={member.email}
                        disabled
                        className="bg-gray-100"
                      />
                    </div>
                    <Select
                      label="Type"
                      value={member.type}
                      onChange={(e) => handleTypeChange(index, e)}
                    >
                      <Option value="admin">Admin</Option>
                      <Option value="coAdmin">Co-Admin</Option>
                      <Option value="member">Member</Option>
                    </Select>
                    <button
                      onClick={() => handleRemoveMember(index)}
                      className="text-red-500"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <Button color="blue" type="submit">
              Create project
            </Button>
          </form>
        </Card>
      </DialogBody>
    </Dialog>
  );
};
