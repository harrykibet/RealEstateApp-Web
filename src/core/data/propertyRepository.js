// src/core/data/propertyRepository.js

import firebaseService from '../network/firebaseService';

/**
 * Fetch properties from Firestore
 */
const fetchProperties = async () => {
  try {
    const propertiesSnapshot = await firebase.firestore().collection('properties').get();
    const propertiesList = propertiesSnapshot.docs.map(doc => doc.data());
    return propertiesList;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

/**
 * Add a new property to Firestore
 */
const addProperty = async (property) => {
  try {
    const newPropertyRef = await firebase.firestore().collection('properties').add(property);
    return newPropertyRef.id;
  } catch (error) {
    console.error("Error adding property:", error);
    throw error;
  }
};

export default {
  fetchProperties,
  addProperty
};

