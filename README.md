# OMNI-AWARE-AUTONOMOUS-PERCEPTION-ENGINE-v2.0-
Real-time vehicle perception dashboard. CPU-first RGB filter (21R/70G/7B) kills light scatter &amp; asphalt bleed. Lightweight hazard detection: boulders, waterfalls, logs, cliffs. 422 FPS physics kernel. xAI Grok API for analysis. Offline TTS. WDDM-ready: NVIDIA dGPU on Windows.Production-clean.
## What It Does
Real-time vehicle perception dashboard.  
- CPU-first RGB filter (21% red / 70% green / 7% blue) kills light scatter & asphalt bleed  
- Lightweight hazard detection: boulders, waterfalls, logs, cliff edges  
- High-frequency physics kernel → 422 FPS effective simulation  
- xAI Grok API for tactical analysis (no Google, no Gemini, no telemetry)  
- Offline TTS via browser SpeechSynthesis  
- WDDM hybrid-ready: force NVIDIA dGPU on Windows host

## License
GNU General Public License v3.0  
See `LICENSE` below or [gnu.org/licenses/gpl-3.0.txt](https://www.gnu.org/licenses/gpl-3.0.txt)

## Quick Start
1. Clone repo  
   ```bash
   git clone https://github.com/yourname/omni-aware.git
   cd omni-aware

Install depsBashnpm install
Add your xAI key
Create .env in root:textREACT_APP_XAI_KEY=your-xai-api-key-here
Run dev serverBashnpm run dev
(Optional) Windows host: force NVIDIA dGPU
Run python hybrid_setup_win.py (from attached repo)
Then powershell -ExecutionPolicy Bypass -File Rocco_Infinity_Orchestrator.ps1
Reboot → CPU preprocesses, GPU renders, bus stays cool.


Build & Deploy
Bashnpm run build
Static files land in /dist — serve with any static host.
Connect Real Sensors
Replace the random hazard spawn in physicsTick() with real CAN/WebSocket data:
TypeScript// Example: fetch from vehicle ECU
fetch('/api/telemetry').then(r => r.json()).then(data => {
  if (data.hazard) {
    entitiesRef.current.push({ ...data.hazard, id: Date.now() });
  }
});
Use navigator.mediaDevices.getUserMedia({ video: true }) for live camera.
Key Files

src/OmniAwareDashboard.tsx — main component
package.json — minimal deps (React + lucide-react only)
.env — your xAI key

Troubleshooting

No sound? Check browser permissions (SpeechSynthesis needs mic/camera access).
API down? Falls back to local "Reduce speed" message.
Lag? Run WDDM scripts first—CPU-first design shines with hybrid GPU.

Credits

Style inspired by Python for Data Analysis (Wes McKinney) & Building Quantum Software with Python
Hybrid GPU logic from
All code written with love by Joseph Rocco Peransi.


LICENSE (GNU GPLv3 excerpt)
text                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.
...Full text: https://www.gnu.org/licenses/gpl-3.0.txt
You may copy, modify, distribute this software — but any derivative must stay GPL-3.0 and open-source.
