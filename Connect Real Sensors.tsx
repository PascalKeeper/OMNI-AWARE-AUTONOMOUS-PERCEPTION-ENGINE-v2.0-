// Example: fetch from vehicle ECU
fetch('/api/telemetry').then(r => r.json()).then(data => {
  if (data.hazard) {
    entitiesRef.current.push({ ...data.hazard, id: Date.now() });
  }
});
