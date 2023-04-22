const axios = require("axios");

exports.getIndex = (req, res) => {
  res.render("index", {
    pageTitle: "Home",
    path: "/",
  });
};

exports.getSkills = async (req, res) => {
  try {
    const response = await axios.get(`https://torre.bio/api/bios/${req.params.username}`);
    const { data } = response;
    res.render("", {
      pageTitle: "Skills",
      path: "/skills",
      skills: data.strengths,
      username: req.params.username,
      userImg: data.picture,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving user data");
  }
};
