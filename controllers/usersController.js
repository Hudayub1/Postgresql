const db = require("../db/queries");

exports.usersListGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
};

exports.usersCreateGet = async (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

exports.usersCreatePost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/")
};


exports.usersUpdateGet = async (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};









