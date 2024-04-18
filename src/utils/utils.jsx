import React from "react";

export function getUserDetails() {
  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    // Retrieve user details from local storage
    var userDetailsJSON = localStorage.getItem("user");

    // Check if user details exist in local storage
    if (userDetailsJSON !== null) {
      // Parse the JSON string to convert it into an object
      var userDetails = JSON.parse(userDetailsJSON);
      return userDetails;
    } else {
      // If user details don't exist, return null or handle accordingly
      return null;
    }
  } else {
    // If local storage is not supported by the browser, handle accordingly
    console.error("Local storage is not supported by your browser.");
    return null;
  }
}
