import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const UserData = ({ userId,user}) => {
  const [seconds, setSeconds] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    fetchUserData();

    intervalId.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  const fetchUserData = () => {
    fetch(`https://secret.url/user/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  };

  return (
    <div>
      <h1>User Data Component</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
         <div>
           {/*<p>{user.name}</p>*/}
           {/*<p>{user.email}</p>*/}
           <p>{userId}</p>
           <p>Loading user data...</p>
         </div>
      )}
      <p>Timer: {seconds} seconds</p>
    </div>
  );
};

UserData.propTypes = {
  userId: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserData;