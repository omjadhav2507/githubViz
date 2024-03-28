import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 20%;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 1rem;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Title = styled.h5`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfoRow = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const Label = styled.p`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const Profile = ({ userData }) => {
  return (
    <ProfileContainer>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '1rem' }}>
            <Avatar src={userData.avatar_url} alt="Profile Picture" width="100" height="100" />
          </div>
          <UserInfo>
            <Title>{userData.name}</Title>
            <p>{userData.bio}</p>
            <UserInfoRow>
              <Label>Followers:</Label>
              <p>{userData.followers}</p>
            </UserInfoRow>
            <UserInfoRow>
              <Label>Following:</Label>
              <p>{userData.following}</p>
            </UserInfoRow>
            <UserInfoRow>
              <Label>Work:</Label>
              <p>{userData.company}</p>
            </UserInfoRow>
            <UserInfoRow>
              <Label>Location:</Label>
              <p>{userData.location}</p>
            </UserInfoRow>
          </UserInfo>
        </div>
      </Card>
    </ProfileContainer>
  );
};

export default Profile;
