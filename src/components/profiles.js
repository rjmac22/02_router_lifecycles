import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Card from '../hoc/card';
import Auth from '../hoc/auth';

const Profile = (props) => {

  const redir = () => {
    // return(
    //   <Redirect to="/" />
    // )
    
  }


  return (
  <Auth>
    <Card>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>take me to /profile/posts</Link>
    </Card>
  </Auth>
  )
}

export default Profile;