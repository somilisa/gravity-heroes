import React, { useState, useEffect } from "react";

function useWindowDimensions() {
  // State to store the window dimensions
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Effect hook to update the dimensions on window resize
  useEffect(() => {
    // Function to update dimensions
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return dimensions;
}

export default useWindowDimensions;
