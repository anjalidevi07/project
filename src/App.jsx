import './App.css'

function App() {
  const version = import.meta.env.VITE_SOFTWARE_VERSION;
  const key = import.meta.env.VITE_CUSTOM_KEY;
  const cloudType = import.meta.env.VITE_CLOUD_TYPE;
  const currentTime = new Date().toISOString();

  return (
    <div className="app">
      <div className="cloud">☁️</div>
      <h1>AnjaliCloud</h1>
      <div className="info">
        <p><strong>Software Version:</strong> {version}</p>
        <p><strong>Current Time:</strong> {currentTime}</p>
        <p><strong>Custom Key:</strong> {key}</p>
        <p><strong>Cloud Type:</strong> {cloudType}</p>
      </div>
    </div>
  );
}

export default App