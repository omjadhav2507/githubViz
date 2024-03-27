import React, { useEffect, useState } from 'react';
import Search from './Components/Search';
import Profile from './Components/Profile';

const Dashboard = () => {
  const [searchVal, setSearchVal] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = (value) => {
    setSearchVal(value);
  }

 async function fetchGitData() {
  const accessToken = process.env.REACT_APP_GITHUB_API_KEY;
  
  try {
    const res = await fetch(`https://api.github.com/users/${searchVal}`, {
      headers: {
        Authorization: `token ${accessToken}`
      }
    });
  
    if (res.ok) {
      const user = await res.json();
      setUserData(user); 
    } else if (res.status === 404) {
      console.error('User not found');
      // You can handle this case by displaying a message to the user
    } else {
      console.error('Failed to fetch user data:', res.status);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}


  useEffect(() => {
    fetchGitData();
  }, [searchVal]);

  return (
    <>
    <Search onSearch={handleSearch} />
    {userData && <Profile userData={userData} />}
  </>
  );
}

export default Dashboard;
