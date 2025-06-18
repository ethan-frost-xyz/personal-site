"use client";

import * as React from "react";

// Types
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
  estimatedCapacity?: number;
}

interface PerformanceData {
  altitudes: number[];
  curves: {
    [key: number]: number[];
  };
}

interface FilterState {
  search: string;
  status: string;
  orbit: string;
  dateRange: {
    start: string;
    end: string;
  };
  payloadRange: {
    min: number;
    max: number;
  };
}

interface CalculatorState {
  altitude: number;
  inclination: number;
  payloadMass: number;
  result: {
    estimatedCapacity: number;
    efficiency: number;
    comparisonToBaseline: number;
    recommendation: string;
    riskLevel: 'low' | 'medium' | 'high';
  } | null;
}

interface RocketLabContextType {
  // Data
  missions: Mission[];
  performanceData: PerformanceData;
  
  // State
  selectedMission: Mission | null;
  filterState: FilterState;
  calculatorState: CalculatorState;
  viewMode: 'list' | 'chart' | 'stats';
  isLoading: boolean;
  
  // Actions
  setSelectedMission: (mission: Mission | null) => void;
  updateFilterState: (updates: Partial<FilterState>) => void;
  updateCalculatorState: (updates: Partial<CalculatorState>) => void;
  setViewMode: (mode: 'list' | 'chart' | 'stats') => void;
  resetFilters: () => void;
  calculateCapacity: (altitude: number, inclination: number) => number;
  getFilteredMissions: () => Mission[];
  exportData: (format: 'csv' | 'json') => void;
  
  // Analytics
  getAnalytics: () => {
    totalMissions: number;
    successRate: number;
    averageUtilization: number;
    topCustomers: Array<{ name: string; count: number }>;
    utilizationByOrbit: Array<{ orbit: string; avgUtilization: number }>;
    launchTrends: Array<{ year: number; count: number }>;
  };
}

const RocketLabContext = React.createContext<RocketLabContextType | undefined>(undefined);

// Mock data
const INITIAL_MISSIONS: Mission[] = [
  {
    id: 1,
    name: "It's Business Time",
    date: "2018-01-21",
    payload: 13.6,
    altitude: 500,
    inclination: 85,
    orbit: "SSO",
    customer: "Rocket Lab",
    status: "Success",
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
    status: "Success",
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
    status: "Success",
    launchSite: "Mahia",
    satellites: 1,
    utilization: 82.1
  },
  {
    id: 4,
    name: "Another One Opens the Door",
    date: "2023-12-15",
    payload: 220,
    altitude: 600,
    inclination: 60,
    orbit: "LEO",
    customer: "Planet Labs",
    status: "Success",
    launchSite: "Mahia",
    satellites: 5,
    utilization: 89.3
  },
  {
    id: 5,
    name: "Virginia is for Launch Lovers",
    date: "2023-11-10",
    payload: 95,
    altitude: 400,
    inclination: 40,
    orbit: "LEO",
    customer: "HawkEye 360",
    status: "Success",
    launchSite: "Wallops",
    satellites: 3,
    utilization: 65.7
  }
];

const PERFORMANCE_DATA: PerformanceData = {
  altitudes: [400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
  curves: {
    40: [320, 300, 280, 260, 240, 220, 200, 180, 160],
    60: [300, 280, 260, 240, 220, 200, 180, 160, 140],
    80: [280, 260, 240, 220, 200, 180, 160, 140, 120],
    98: [260, 240, 220, 200, 180, 160, 140, 120, 100],
  }
};

const INITIAL_FILTER_STATE: FilterState = {
  search: "",
  status: "all",
  orbit: "all",
  dateRange: {
    start: "",
    end: ""
  },
  payloadRange: {
    min: 0,
    max: 500
  }
};

const INITIAL_CALCULATOR_STATE: CalculatorState = {
  altitude: 500,
  inclination: 60,
  payloadMass: 150,
  result: null
};

export function RocketLabProvider({ children }: { children: React.ReactNode }) {
  // State
  const [missions, setMissions] = React.useState<Mission[]>(INITIAL_MISSIONS);
  const [selectedMission, setSelectedMission] = React.useState<Mission | null>(null);
  const [filterState, setFilterState] = React.useState<FilterState>(INITIAL_FILTER_STATE);
  const [calculatorState, setCalculatorState] = React.useState<CalculatorState>(INITIAL_CALCULATOR_STATE);
  const [viewMode, setViewMode] = React.useState<'list' | 'chart' | 'stats'>('list');
  const [isLoading] = React.useState(false);

  // Utility functions
  const interpolate = React.useCallback((x: number, x1: number, y1: number, x2: number, y2: number): number => {
    return y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);
  }, []);

  const calculateCapacity = React.useCallback((altitude: number, inclination: number): number => {
    const { altitudes, curves } = PERFORMANCE_DATA;
    
    // Find altitude bounds
    let altIndex = altitudes.findIndex(a => a >= altitude);
    if (altIndex === -1) altIndex = altitudes.length - 1;
    if (altIndex === 0) altIndex = 1;
    
    const altLow = altitudes[altIndex - 1];
    const altHigh = altitudes[altIndex];
    
    // Find inclination bounds
    const inclinations = Object.keys(curves).map(Number);
    let incIndex = inclinations.findIndex(i => i >= inclination);
    if (incIndex === -1) incIndex = inclinations.length - 1;
    if (incIndex === 0) incIndex = 1;
    
    const incLow = inclinations[incIndex - 1];
    const incHigh = inclinations[incIndex];
    
    // Bilinear interpolation
    const c11 = interpolate(altitude, altLow, curves[incLow][altIndex - 1], altHigh, curves[incLow][altIndex]);
    const c12 = interpolate(altitude, altLow, curves[incHigh][altIndex - 1], altHigh, curves[incHigh][altIndex]);
    
    return interpolate(inclination, incLow, c11, incHigh, c12);
  }, [interpolate]);

  // Actions
  const updateFilterState = React.useCallback((updates: Partial<FilterState>) => {
    setFilterState(prev => ({ ...prev, ...updates }));
  }, []);

  const updateCalculatorState = React.useCallback((updates: Partial<CalculatorState>) => {
    setCalculatorState(prev => ({ ...prev, ...updates }));
  }, []);

  const resetFilters = React.useCallback(() => {
    setFilterState(INITIAL_FILTER_STATE);
  }, []);

  const getFilteredMissions = React.useCallback((): Mission[] => {
    return missions.filter(mission => {
      const matchesSearch = mission.name.toLowerCase().includes(filterState.search.toLowerCase()) ||
                           mission.customer.toLowerCase().includes(filterState.search.toLowerCase());
      
      const matchesStatus = filterState.status === "all" || mission.status === filterState.status;
      const matchesOrbit = filterState.orbit === "all" || mission.orbit === filterState.orbit;
      
      let matchesDateRange = true;
      if (filterState.dateRange.start && filterState.dateRange.end) {
        const missionDate = new Date(mission.date);
        const startDate = new Date(filterState.dateRange.start);
        const endDate = new Date(filterState.dateRange.end);
        matchesDateRange = missionDate >= startDate && missionDate <= endDate;
      }
      
      const matchesPayloadRange = mission.payload >= filterState.payloadRange.min && 
                                  mission.payload <= filterState.payloadRange.max;
      
      return matchesSearch && matchesStatus && matchesOrbit && matchesDateRange && matchesPayloadRange;
    });
  }, [missions, filterState]);

  const exportData = React.useCallback((format: 'csv' | 'json') => {
    const filteredMissions = getFilteredMissions();
    
    if (format === 'json') {
      const dataStr = JSON.stringify(filteredMissions, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'rocket-lab-missions.json';
      link.click();
    } else if (format === 'csv') {
      const headers = ['Name', 'Date', 'Payload', 'Altitude', 'Inclination', 'Orbit', 'Customer', 'Status', 'Utilization'];
      const csvContent = [
        headers.join(','),
        ...filteredMissions.map(mission => [
          mission.name,
          mission.date,
          mission.payload,
          mission.altitude,
          mission.inclination,
          mission.orbit,
          mission.customer,
          mission.status,
          mission.utilization
        ].join(','))
      ].join('\n');
      
      const dataBlob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'rocket-lab-missions.csv';
      link.click();
    }
  }, [getFilteredMissions]);

  const getAnalytics = React.useCallback(() => {
    const filteredMissions = getFilteredMissions();
    
    const totalMissions = filteredMissions.length;
    const successfulMissions = filteredMissions.filter(m => m.status === 'Success').length;
    const successRate = totalMissions > 0 ? (successfulMissions / totalMissions) * 100 : 0;
    
    const averageUtilization = filteredMissions.length > 0 
      ? filteredMissions.reduce((sum, m) => sum + m.utilization, 0) / filteredMissions.length 
      : 0;
    
    // Top customers
    const customerCounts = filteredMissions.reduce((acc, mission) => {
      acc[mission.customer] = (acc[mission.customer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const topCustomers = Object.entries(customerCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    
    // Utilization by orbit
    const orbitGroups = filteredMissions.reduce((acc, mission) => {
      if (!acc[mission.orbit]) {
        acc[mission.orbit] = [];
      }
      acc[mission.orbit].push(mission.utilization);
      return acc;
    }, {} as Record<string, number[]>);
    
    const utilizationByOrbit = Object.entries(orbitGroups).map(([orbit, utilizations]) => ({
      orbit,
      avgUtilization: utilizations.reduce((sum, u) => sum + u, 0) / utilizations.length
    }));
    
    // Launch trends by year
    const yearCounts = filteredMissions.reduce((acc, mission) => {
      const year = new Date(mission.date).getFullYear();
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
    
    const launchTrends = Object.entries(yearCounts)
      .map(([year, count]) => ({ year: parseInt(year), count }))
      .sort((a, b) => a.year - b.year);
    
    return {
      totalMissions,
      successRate,
      averageUtilization,
      topCustomers,
      utilizationByOrbit,
      launchTrends
    };
  }, [getFilteredMissions]);

  // Initialize missions with calculated capacity on mount
  React.useEffect(() => {
    const initialMissions = INITIAL_MISSIONS.map(mission => {
      const estimatedCapacity = calculateCapacity(mission.altitude, mission.inclination);
      return {
        ...mission,
        estimatedCapacity,
        utilization: (mission.payload / estimatedCapacity) * 100
      };
    });
    setMissions(initialMissions);
  }, [calculateCapacity]);

  const contextValue: RocketLabContextType = {
    // Data
    missions,
    performanceData: PERFORMANCE_DATA,
    
    // State
    selectedMission,
    filterState,
    calculatorState,
    viewMode,
    isLoading,
    
    // Actions
    setSelectedMission,
    updateFilterState,
    updateCalculatorState,
    setViewMode,
    resetFilters,
    calculateCapacity,
    getFilteredMissions,
    exportData,
    getAnalytics
  };

  return (
    <RocketLabContext.Provider value={contextValue}>
      {children}
    </RocketLabContext.Provider>
  );
}

export function useRocketLab() {
  const context = React.useContext(RocketLabContext);
  if (context === undefined) {
    throw new Error('useRocketLab must be used within a RocketLabProvider');
  }
  return context;
} 