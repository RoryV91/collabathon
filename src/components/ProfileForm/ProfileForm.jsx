// import '../ProfileForm/ProfileForm.css'
import { useState } from 'react';
import * as profilesAPI from '../../utilities/profiles-api'


export default function ProfileForm({ profile, setProfile }) {
   const [profileFormData, setProfileFormData] = useState({
    name: profile.name,
    location: profile.location,
    interests: profile.interests
   });

   function handleChange(evt) {
    setProfileFormData({...profileFormData, [evt.target.name]:evt.target.value})
    // console.log({[evt.target.name]:evt.target.value});
   }

   async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(profileFormData);
    const updateProfile = await profilesAPI.update(profileFormData);
    console.log(updateProfile);
    setProfile(updateProfile);
   }
   
return (
        
    <form className="profile-form"
        onSubmit={handleSubmit}>
            <div>Name: <input 
             type="text" 
             value={profileFormData.name}
             name="name"
             onChange={handleChange} /></div>
            <div>Location: <input 
             type="text" 
             value={profileFormData.location}
             name="location"
             onChange={handleChange} /></div>
            <div>Interests: <input 
             type="text" 
             value={profileFormData.interests}
             name="interests"
             onChange={handleChange} /></div>
             <button className="search-btn" type="submit">Save</button>
    </form>
    );
}