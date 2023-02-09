import { useState, useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm'
// import './ProfilePage.css'
import * as profilesApi from '../../utilities/profiles-api'

export default function ProfilePage({ profile, setProfile }) {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <>
    <div className="flex-btn-container">
      <button className="edit-btn"
      onClick={() => setShowProfile (!showProfile)}>Edit Profile</button> 
      </div>
      { showProfile ?
      <div className="profile-display">
      <li>{profile.name}</li>
      &nbsp; &nbsp;
      <li>{profile.location}</li>
      &nbsp; &nbsp;
      <li>{profile.interests}</li>
      &nbsp; &nbsp;
      <li></li>
        </div>
        :
        <ProfileForm profile={profile} setProfile = {setProfile}/>
      }
    </>
  );
}

