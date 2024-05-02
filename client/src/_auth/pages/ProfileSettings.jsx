import React, { useState } from "react";
import { Input, Button, Card, Typography } from "@material-tailwind/react";

export function ProfileSettings() {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <Typography variant="h4" className="mb-5">
        Profile
      </Typography>
      <Card className="p-5 shadow-md">
        <Typography variant="h5" className="mb-4">
          Basic info
        </Typography>
        <Typography className="mb-4">Update your basic info details</Typography>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              label="Full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              label="Old Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              label="New Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <Button className=" w-full" type="submit">
            Update
          </Button>
        </form>
      </Card>
      <Card className="mt-4 p-5 shadow-md">
        <Typography variant="h5" className="mb-4">
          Profile picture
        </Typography>
        <Typography className="mb-4">
          We support only JPEGs or PNGs under 5MB
        </Typography>
        <Button className="w-full">Upload</Button>
      </Card>
    </div>
  );
}

export default ProfileSettings;
