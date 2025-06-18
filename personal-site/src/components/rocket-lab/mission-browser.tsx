"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Mock mission data - in real implementation, this would come from API
const MISSION_DATA = [
  {
    id: 1,
    name: "It&apos;s Business Time",
    date: "2018-01-21",
    payload: 13.6,
    altitude: 500,
    inclination: 85,
    orbit: "SSO",
    customer: "Rocket Lab",
    status: "Success" as const,
    launchSite: "Mahia",
    satellites: 3,
    utilization: 78.5
  },
  {
    id: 2,
    name: "NROL-199",
    date: "2024-02-19",
    payload: 100,
    altitude: 750,
    inclination: 45,
    orbit: "MEO",
    customer: "NRO",
    status: "Success" as const,
    launchSite: "Wallops",
    satellites: 1,
    utilization: 87.2
  },
  {
    id: 3,
    name: "Catch Me If You Can",
    date: "2024-01-31",
    payload: 180,
    altitude: 525,
    inclination: 97.4,
    orbit: "SSO",
    customer: "Synspective", 
    status: "Success" as const,
    launchSite: "Mahia",
    satellites: 1,
    utilization: 82.1
  }
];

interface Mission {
  id: number;
  name: string;
  date: string;
  payload: number;
  altitude: number;
  inclination: number;
  orbit: string;
  customer: string;
  status: 'Success' | 'Failure' | 'Partial';
  launchSite: string;
  satellites: number;
  utilization: number;
}

interface MissionBrowserProps {
  className?: string;
  onMissionSelect?: (mission: Mission) => void;
}

export function MissionBrowser({ className, onMissionSelect }: MissionBrowserProps) {
  const [filteredMissions] = React.useState<Mission[]>(MISSION_DATA);
  const [selectedMission, setSelectedMission] = React.useState<Mission | null>(null);

  const handleMissionClick = (mission: Mission) => {
    setSelectedMission(mission);
    onMissionSelect?.(mission);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Success": return "text-green-400 bg-green-900/20 border-green-800";
      case "Failure": return "text-red-400 bg-red-900/20 border-red-800";
      case "Partial": return "text-yellow-400 bg-yellow-900/20 border-yellow-800";
      default: return "text-neutral-400 bg-neutral-900/20 border-neutral-800";
    }
  };

  return (
    <div className={cn("bg-neutral-900/50 border border-neutral-800 rounded-xl p-6", className)}>
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Mission Database Explorer</h3>
          <p className="text-neutral-400 text-sm">
            Browse and analyze Rocket Lab&apos;s launch history
          </p>
        </div>

        {/* Mission List */}
        <div className="space-y-2">
          {filteredMissions.map((mission) => (
            <div
              key={mission.id}
              onClick={() => handleMissionClick(mission)}
              className={cn(
                "p-4 rounded-lg border cursor-pointer transition-all hover:bg-neutral-800/50",
                selectedMission?.id === mission.id 
                  ? "border-blue-500 bg-blue-900/20" 
                  : "border-neutral-700 hover:border-neutral-600"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div>
                  <h4 className="font-semibold text-neutral-100">{mission.name}</h4>
                  <p className="text-sm text-neutral-400">{new Date(mission.date).toLocaleDateString()}</p>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-neutral-400">Payload</div>
                  <div className="font-semibold">{mission.payload} kg</div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-neutral-400">Orbit</div>
                  <div className="font-semibold">{mission.orbit}</div>
                </div>
                
                <div className="text-center">
                  <span className={cn("px-2 py-1 rounded-full text-xs border", getStatusColor(mission.status))}>
                    {mission.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 