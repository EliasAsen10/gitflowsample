export default function WiesePage() {
  return (
    <div className="wiese-container">
      <div className="sky">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
      </div>
      <div className="meadow">
        <div className="grass-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="grass-blade"></div>
          ))}
        </div>
        <div className="flowers">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flower"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
