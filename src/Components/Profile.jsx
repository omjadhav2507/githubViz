import React from 'react';

const Profile = ({ userData }) => {
  const profileStyle = {
    marginRight: '20%', // Adjust as needed
  };

  return (
    <div className="container py-4" style={profileStyle}>
      <div className="row justify-content-start">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-4 text-center">
                  <img src={userData.avatar_url} className="rounded-circle mb-3" alt="Profile Picture" width="100" height="100" />
                  <h5 className="card-title">{userData.name}</h5>
                </div>
                <div className="col-md-8">
                  <p className="card-text">{userData.bio}</p>
                  <div className="row mb-3">
                    <div className="col">
                      <p><strong>Followers:</strong> {userData.followers}</p>
                    </div>
                    <div className="col">
                      <p><strong>Following:</strong> {userData.following}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p><strong>Work:</strong> {userData.company}</p>
                    </div>
                    <div className="col">
                      <p><strong>Location:</strong> {userData.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
