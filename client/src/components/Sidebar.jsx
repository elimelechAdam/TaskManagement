import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useAuthStore from "../lib/store/authStore";
import { useGetProjectsQuery } from "../lib/query/query";

export function Sidebar() {
  const [open, setOpen] = useState(null);
  const { data: projects, isLoading, isError } = useGetProjectsQuery();

  const handleOpen = (value) => {
    setOpen(open === value ? null : value);
  };

  const userLogout = () => {
    useAuthStore.getState().clearAuth();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading projects</div>;

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
      <div className="mb-2 p-4">
        <Typography variant="h4" color="blue-gray">
          Tasks
        </Typography>
      </div>
      <List>
        <Link to="/dashboard">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link to="/settings">
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem onClick={userLogout}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Logout
          </ListItem>
        </Link>
        <hr className="my-2 border-blue-gray-50" />
        {projects &&
          projects.map((project, index) => (
            <Link to={`project/${project._id}`} key={index}>
              <Accordion
                key={project._id}
                open={open === index}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === index}>
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      {project.name}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Analytics
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
            </Link>
          ))}
      </List>
    </Card>
  );
}
