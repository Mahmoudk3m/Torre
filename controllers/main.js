const axios = require("axios");

exports.getIndex = (req, res) => {
  res.render("index", {
    pageTitle: "Home",
    path: "/",
    skills: [],
  });
};

exports.postSkills = async (req, res) => {
  const username = req.body.username;
  try {
    const response = await axios.get(`https://torre.bio/api/bios/${username}`);
    const { data } = response;
    res.render("index", {
      path: "/",
      skills: data.strengths,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving user data");
  }
};
