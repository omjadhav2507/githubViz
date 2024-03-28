import React, { useEffect, useState } from 'react';

const Repo = ({ userData }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchGitData = async () => {
      try {
        const accessToken = process.env.process.env.REACT_APP_GITHUB_API_KEY
        
        const res = await fetch(`https://api.github.com/users/${userData.login}/repos`, {
          headers: {
            Authorization: `token ${accessToken}`
          }
        });

        if (!res.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGitData();
  }, [userData.login]);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Repositories</h2>
      <div style={{ display: 'grid', gridGap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {repos.map(repo => (
          <div key={repo.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{repo.name}</h3>
            <p style={{ color: '#666', marginBottom: '10px' }}>{repo.description}</p>
            <p style={{ fontStyle: 'italic', color: '#999' }}>{repo.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repo;
