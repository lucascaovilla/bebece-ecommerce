import React, { createContext, useContext, useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'userLocation';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState({
    zipCode: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    const storedLocation = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedLocation) {
      setUserLocation(JSON.parse(storedLocation));
    }
  }, []);

  const saveLocation = async (zipCode) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
      if (!response.ok) {
        throw new Error('Failed to fetch location data.');
      }

      const data = await response.json();
      if (data.erro) {
        throw new Error('Invalid zip code.');
      }

      const updatedLocation = {
        zipCode,
        city: data.localidade,
        state: data.uf.toLowerCase(),
      };

      setUserLocation(updatedLocation);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLocation));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <LocationContext.Provider value={{ userLocation, saveLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

const useUserLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useUserLocation must be used within a LocationProvider');
  }
  return context;
};

export default useUserLocation;