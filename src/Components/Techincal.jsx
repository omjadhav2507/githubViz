import React, { useEffect, useState } from "react";

const Technical = ({ userData }) => {
  const [languageStats, setLanguageStats] = useState([]);
  const [totalCommits, setTotalCommits] = useState(0);

  useEffect(() => {
    const fetchTechnicalInfo = async () => {
      try {
        const accessToken = "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";
        const repoRes = await fetch(
          `https://api.github.com/users/${userData.login}/repos`,
          {
            headers: {
              Authorization: `token ${accessToken}`,
            },
          }
        );

        if (!repoRes.ok) {
          throw new Error("Failed to fetch repository data");
        }

        const repos = await repoRes.json();
        const languageMap = {};

        const promises = repos.map(async (repo) => {
          const languagesRes = await fetch(
            `https://api.github.com/repos/${userData.login}/${repo.name}/languages`,
            {
              headers: {
                Authorization: `token ${accessToken}`,
              },
            }
          );

          if (!languagesRes.ok) {
            throw new Error(
              `Failed to fetch languages for repository ${repo.name}`
            );
          }

          const languages = await languagesRes.json();
          const repoTotalSize = Object.values(languages).reduce(
            (acc, cur) => acc + cur,
            0
          );
          setTotalCommits((prevTotal) => prevTotal + repoTotalSize);

          Object.entries(languages).forEach(([language, size]) => {
            if (languageMap[language]) {
              languageMap[language] += size;
            } else {
              languageMap[language] = size;
            }
          });
        });

        await Promise.all(promises);

        const totalSize = Object.values(languageMap).reduce(
          (acc, cur) => acc + cur,
          0
        );

        const languageStatsArray = Object.entries(languageMap).map(
          ([language, size]) => ({
            language,
            percentage: ((size / totalSize) * 100).toFixed(2),
            size,
          })
        );

        setLanguageStats(languageStatsArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTechnicalInfo();
  }, [userData.login]);

  return (
    <div style={{ marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
      <div>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Technical Information
        </h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {languageStats.map(({ language, percentage, size }) => (
            <li key={language} style={{ marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: "bold" }}>{language}:</span>{" "}
              {percentage}%
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
          Total Size of Codebase: {totalCommits} 
        </h3>
      </div>
    </div>
  );
};

export default Technical;
