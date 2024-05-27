import {
  Card,
  Dialog,
  DialogBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";

export const TaskModel = ({ open, handleOpen, task }) => {
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleDoubleClick = (fieldValue) => {
    setEditMode(true);
    setEditValue(fieldValue);
  };

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleEditSubmit = () => {
    // Here you would typically update the task with the new value
    // and then set editMode back to false
    setEditMode(false);
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
            Task Details
          </Typography>
          <div>
            {editMode ? (
              <>
                <div className="flex items-center gap-2">
                  <Typography color="blue-gray">Title</Typography>
                  <Input
                    color="blue-gray"
                    value={editValue}
                    onChange={handleEditChange}
                    onBlur={handleEditSubmit}
                  />
                </div>
              </>
            ) : (
              <Typography
                color="blue-gray"
                onDoubleClick={() => handleDoubleClick(task.title)}
              >
                Title: {task.title}
              </Typography>
            )}
          </div>
        </Card>
      </DialogBody>
    </Dialog>
  );
};

// <div className="flex flex-col space-y-4">
//   <Typography color="blue-gray">Title: {task.title}</Typography>
//   <Typography color="blue-gray">
//     Description: {task.description}
//   </Typography>
//   <Typography color="blue-gray">Status: {task.status}</Typography>
//   <Typography color="blue-gray">Priority: {task.priority}</Typography>
//   <Typography color="blue-gray">
//     Project ID: {task.projectId}
//   </Typography>
//   <Typography color="blue-gray">
//     Assigned To: {task.assignedTo}
//   </Typography>
//   <Typography color="blue-gray">Due Date: {task.dueDate}</Typography>
//   <Typography color="blue-gray">Labels: {task.labels}</Typography>
//   <Typography color="blue-gray">
//     Sub Items: {task.subItems}
//   </Typography>
//   <Typography color="blue-gray">Progress: {task.progress}</Typography>
// </div>
