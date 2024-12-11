import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setDataLoaded(true);
    };

    fetchData();

    return () => {
      // Cleanup function to prevent navigation after unmount
      //This is where we prevent the navigation
    };
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      navigate('/destination');
    }
  }, [dataLoaded, navigate]);

  return (
    <div>
      <h1>My Component</h1>
      {dataLoaded ? <p>Data loaded!</p> : <p>Loading...</p>}
    </div>
  );
};

export default MyComponent;