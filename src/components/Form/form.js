import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";

function Form () {
  const [username, setUsername] = useState('');
  const [timer, setTimer] = useState(null);
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(setTimeout(getUserData, 500));
  }, 
    [username]
  );

  function handleUsernameChange (event) {
    setUsername(event.target.value);
  }

  async function getUserData () {
    if (username) {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      !data.message && setUserData(data);
      console.log(data);
    }
  }
  
  function renderUserData() {
    //  "created_at"    
    return <>
      <Avatar alt="user picture" src={userData.avatar_url}></Avatar>
      <Typography sx={{ fontSize: 16 }}
      variant="h5">
        {userData.login}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>
        {userData.name}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>
        {userData.bio}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>
        {userData.company}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>
        Public repos: {userData.public_repos}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>
        Followers: {userData.followers}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>
        Following: {userData.following}
      </Typography>
    </>
  }

  return (
  <>
    <TextField id="username-field" value={username} onChange={handleUsernameChange}></TextField>
    {userData && renderUserData()}
  </>
  )
}

export default Form