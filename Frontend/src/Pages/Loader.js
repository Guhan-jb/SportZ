import React from 'react';
import '../Assets/CSS/Loader.css'; // Import the loader CSS file

const LoaderContainer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
  <div class="terminal-loader">
  <div class="terminal-header">
    <div class="terminal-title">Status</div>
    <div class="terminal-controls">
      <div class="control close"></div>
      <div class="control minimize"></div>
      <div class="control maximize"></div>
    </div>
  </div>
  <div class="text">Loading...</div>
</div>
</div>
      );
};

export default LoaderContainer;