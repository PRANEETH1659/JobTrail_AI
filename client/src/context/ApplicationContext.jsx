import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // You would replace this with your actual backend URL when deploying
  const API_URL = '/api/applications'; 

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setApplications(response.data?.data || []);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const createApplication = async (appData) => {
    try {
      const response = await axios.post(API_URL, appData);
      setApplications(prev => [...prev, response.data.data]);
    } catch (error) {
      console.error("Error creating application:", error);
    }
  };

  const updateApplicationStatus = async (id, newStatus) => {
    try {
      // Optimistically update the UI for responsiveness
      setApplications(prev => 
        prev.map(app => app._id === id ? { ...app, status: newStatus } : app)
      );
      
      await axios.put(`${API_URL}/${id}`, { status: newStatus });
    } catch (error) {
      console.error("Error updating application:", error);
      // If it fails, we should ideally revert the optimistic update
      fetchApplications();
    }
  };

  const deleteApplication = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setApplications(prev => prev.filter(app => app._id !== id));
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  // Fetch applications when the component mounts
  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <ApplicationContext.Provider value={{
      applications,
      loading,
      fetchApplications,
      createApplication,
      updateApplicationStatus,
      deleteApplication
    }}>
      {children}
    </ApplicationContext.Provider>
  );
};
