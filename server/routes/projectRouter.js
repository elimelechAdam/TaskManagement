const express = require("express");
const Project = require("../models/projectSchema");
const User = require("../models/userSchema");
const router = express.Router();

router.post("/add", async (req, res) => {
  const { name, _id, description, membersData } = req.body;

  // Validation for required fields
  if (!name) {
    return res.status(400).send("Name is required.");
  }

  const memberEmails = membersData.map((member) => member.email);

  try {
    // Check if all members' emails exist and get their _id
    const existingUsers = await User.find(
      { email: { $in: memberEmails } },
      "_id email"
    );
    const emailToIdMap = existingUsers.reduce((map, user) => {
      map[user.email] = user._id.toString();
      return map;
    }, {});

    const missingEmails = memberEmails.filter((email) => !emailToIdMap[email]);

    if (missingEmails.length > 0) {
      return res
        .status(404)
        .send(
          `The following emails were not found: ${missingEmails.join(", ")}`
        );
    }

    const admin = membersData
      .filter((member) => member.type === "admin")
      .map((member) => emailToIdMap[member.email]);
    const coAdmin = membersData
      .filter((member) => member.type === "coAdmin")
      .map((member) => emailToIdMap[member.email]);
    const members = membersData
      .filter((member) => member.type === "member")
      .map((member) => emailToIdMap[member.email]);

    console.log(admin, coAdmin, members);

    admin.push(_id);

    const project = new Project({
      name,
      description,
      admin,
      coAdmin,
      members,
    });

    await project.save();
    res
      .status(201)
      .send({ msg: "Project created successfully.", project: project });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/addmember", async (req, res) => {
  const { projectId, member } = req.body;

  try {
    if (!projectId || !member) {
      return res.status(400).send("Project and Member are required.");
    }
    const memberExists = await User.findById(member);

    if (!memberExists) {
      return res.status(404).send("Member not found.");
    }
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).send("Project not found.");
    }
    if (project.members.includes(member)) {
      return res.status(400).send("Member already exists.");
    }
    project.members.push(member);
    await project.save();
    res.status(200).send("Member added successfully.");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/addcoadmin", async (req, res) => {
  const { projectId, coAdmin } = req.body;

  try {
    if (!projectId || !coAdmin) {
      return res.status(400).send("Project and Co-Admin are required.");
    }
    const coAdminExists = await User.findById(coAdmin);

    if (!coAdminExists) {
      return res.status(404).send("Co-Admin not found.");
    }
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).send("Project not found.");
    }
    if (project.coAdmin.includes(coAdmin)) {
      return res.status(400).send("Co-Admin already exists.");
    }
    project.coAdmin.push(coAdmin);
    await project.save();
    res.status(200).send("Co-Admin added successfully.");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/delete", async (req, res) => {
  const { projectId } = req.body;

  try {
    if (!projectId) {
      return res.status(400).send("Project ID is required.");
    }
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).send("Project not found.");
    }
    await project.delete();
    res.status(200).send("Project deleted successfully.");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/all", async (req, res) => {
  try {
    const projects = await Project.find();
    if (!projects) {
      return res.status(404).send("Projects not found.");
    }

    res.status(200).send(projects);
  } catch (error) {
    res.status.send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send("Project ID is required.");
    }

    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send("Project not found.");
    }
    res.status(200).send(project);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
