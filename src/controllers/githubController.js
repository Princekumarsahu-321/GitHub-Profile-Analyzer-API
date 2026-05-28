const db = require("../config/db");
const { fetchGithubProfile } = require("../services/githubServices");

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const data = await fetchGithubProfile(username);

    const profile = {
  username: data.login,
  name: data.name,
  bio: data.bio,
  public_repos: data.public_repos,
  followers: data.followers,
  following: data.following,
  github_created_at: new Date(data.created_at)
  .toISOString()
  .slice(0, 19)
  .replace("T", " "),
  profile_url: data.html_url,
  avatar_url: data.avatar_url,
}; 

    const sql = `
      INSERT INTO profiles 
      (username, name, bio, public_repos, followers, following, github_created_at, profile_url, avatar_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      bio = VALUES(bio),
      public_repos = VALUES(public_repos),
      followers = VALUES(followers),
      following = VALUES(following),
      github_created_at = VALUES(github_created_at),
      profile_url = VALUES(profile_url),
      avatar_url = VALUES(avatar_url)
    `;

    db.query(
      sql,
      [
        profile.username,
        profile.name,
        profile.bio,
        profile.public_repos,
        profile.followers,
        profile.following,
        profile.github_created_at,
        profile.profile_url,
        profile.avatar_url,
      ],
      (err) => {
        if (err) {
          return res.status(500).json({
            message: "Database Error",
            error: err,
          });
        }

        res.status(200).json({
          message: "Profile analyzed successfully",
          profile,
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      message: "GitHub user not found",
      error: error.message,
    });
  }
};

const getAllProfiles = (req, res) => {
  const sql = "SELECT * FROM profiles";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);
  });
};

const getSingleProfile = (req, res) => {
  const { username } = req.params;

  const sql = "SELECT * FROM profiles WHERE username = ?";

  db.query(sql, [username], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.status(200).json(result[0]);
  });
};

module.exports = {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile,
};