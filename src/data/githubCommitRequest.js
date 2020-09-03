const axios = require("axios");

const parseCommitData = c => {
  return {
    date: new Date(c.commit.author.date),
    message: c.commit.message,
    url: c.commit.url
  };
};

const getCommitsPerRepo = async repository => {
  let config = {
    method: "get",
    url: `https://api.github.com/repos/jaredjgebel/${repository}/commits`,
    headers: {}
  };

  try {
    const response = await axios(config);

    const repoCommits = response.data.map(commit => {
      return {
        ...parseCommitData(commit),
        repository
      };
    });
    return repoCommits;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllCommits = async repositories => {
  const commits = [];
  for (repo of repositories) {
    try {
      const repoCommits = await getCommitsPerRepo(repo);

      commits.push(...repoCommits);
    } catch (error) {
      throw new Error(error);
    }
  }
  return commits;
};

module.exports = { getAllCommits };

// async function getAll() {
//   const commits = await getAllCommitsAndSort([
//     "youtube-scrapbook",
//     "dev-portfolio-gatsby-v2"
//   ]);
//   console.log(commits);
// }

// getAll();
