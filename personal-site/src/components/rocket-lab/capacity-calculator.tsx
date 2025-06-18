"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/primitives";

// Interpolation data based on Electron performance curves
const PERFORMANCE_DATA = {
  // Altitude (km) vs Payload (kg) for different inclinations
  altitudes: [400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
  curves: {
    40: [320, 300, 280, 260, 240, 220, 200, 180, 160],   // 40° inclination
    60: [300, 280, 260, 240, 220, 200, 180, 160, 140],   // 60° inclination
    80: [280, 260, 240, 220, 200, 180, 160, 140, 120],   // 80° inclination
    98: [260, 240, 220, 200, 180, 160, 140, 120, 100],   // Sun-synchronous (~98°)
  }
};

interface CalculatorResult {
  estimatedCapacity: number;
  efficiency: number;
  comparisonToBaseline: number;
  recommendation: string;
  riskLevel: 'low' | 'medium' | 'high';
}

interface CapacityCalculatorProps {
  className?: string;
  onCalculate?: (result: CalculatorResult) => void;
}

export function CapacityCalculator({ className, onCalculate }: CapacityCalculatorProps) {
  const [altitude, setAltitude] = React.useState<number>(500);
  const [inclination, setInclination] = React.useState<number>(60);
  const [payloadMass, setPayloadMass] = React.useState<number>(150);
  const [result, setResult] = React.useState<CalculatorResult | null>(null);
  const [isCalculating, setIsCalculating] = React.useState(false);

  // Linear interpolation function
  const interpolate = (x: number, x1: number, y1: number, x2: number, y2: number): number => {
    return y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);
  };

  // 2D interpolation for altitude and inclination
  const calculateCapacity = (alt: number, inc: number): number => {
    const { altitudes, curves } = PERFORMANCE_DATA;
    
    // Find altitude bounds
    let altIndex = altitudes.findIndex(a => a >= alt);
    if (altIndex === -1) altIndex = altitudes.length - 1;
    if (altIndex === 0) altIndex = 1;
    
    const altLow = altitudes[altIndex - 1];
    const altHigh = altitudes[altIndex];
    
    // Find inclination bounds
    const inclinations = Object.keys(curves).map(Number);
    let incIndex = inclinations.findIndex(i => i >= inc);
    if (incIndex === -1) incIndex = inclinations.length - 1;
    if (incIndex === 0) incIndex = 1;
    
    const incLow = inclinations[incIndex - 1];
    const incHigh = inclinations[incIndex];
    
    // Get capacity values at four corners
    const c11 = interpolate(alt, altLow, curves[incLow as keyof typeof curves][altIndex - 1], altHigh, curves[incLow as keyof typeof curves][altIndex]);
    const c12 = interpolate(alt, altLow, curves[incHigh as keyof typeof curves][altIndex - 1], altHigh, curves[incHigh as keyof typeof curves][altIndex]);
    
    // Final interpolation on inclination
    return interpolate(inc, incLow, c11, incHigh, c12);
  };

  const performCalculation = async () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const estimatedCapacity = calculateCapacity(altitude, inclination);
    const efficiency = (payloadMass / estimatedCapacity) * 100;
    const baselineCapacity = 300; // 500km, 60° baseline
    const comparisonToBaseline = ((estimatedCapacity - baselineCapacity) / baselineCapacity) * 100;
    
    let recommendation = "";
    let riskLevel: 'low' | 'medium' | 'high' = 'low';
    
    if (efficiency < 70) {
      recommendation = "Excellent utilization margin. Consider adding secondary payloads.";
      riskLevel = 'low';
    } else if (efficiency < 85) {
      recommendation = "Good capacity utilization with reasonable safety margin.";
      riskLevel = 'low';
    } else if (efficiency < 95) {
      recommendation = "High capacity utilization. Monitor payload mass carefully.";
      riskLevel = 'medium';
    } else {
      recommendation = "Critical capacity utilization. Risk of mission constraints.";
      riskLevel = 'high';
    }
    
    const calculationResult: CalculatorResult = {
      estimatedCapacity,
      efficiency,
      comparisonToBaseline,
      recommendation,
      riskLevel
    };
    
    setResult(calculationResult);
    onCalculate?.(calculationResult);
    setIsCalculating(false);
  };

  const resetCalculator = () => {
    setAltitude(500);
    setInclination(60);
    setPayloadMass(150);
    setResult(null);
  };

  return (
    <div className={cn("bg-neutral-900/50 border border-neutral-800 rounded-xl p-6", className)}>
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Interactive Capacity Calculator</h3>
          <p className="text-neutral-400 text-sm">
            Calculate Electron&apos;s payload capacity for any mission parameters
          </p>
        </div>

        {/* Input Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Altitude Input */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-neutral-300">
              Orbital Altitude (km)
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="400"
                max="1200"
                step="10"
                value={altitude}
                onChange={(e) => setAltitude(Number(e.target.value))}
                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-neutral-500">
                <span>400km</span>
                <span className="font-semibold text-neutral-200">{altitude}km</span>
                <span>1200km</span>
              </div>
            </div>
          </div>

          {/* Inclination Input */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-neutral-300">
              Orbital Inclination (°)
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="40"
                max="98"
                step="1"
                value={inclination}
                onChange={(e) => setInclination(Number(e.target.value))}
                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-neutral-500">
                <span>40°</span>
                <span className="font-semibold text-neutral-200">{inclination}°</span>
                <span>98°</span>
              </div>
            </div>
          </div>

          {/* Payload Mass Input */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-neutral-300">
              Payload Mass (kg)
            </label>
            <div className="space-y-2">
              <input
                type="number"
                min="1"
                max="400"
                value={payloadMass}
                onChange={(e) => setPayloadMass(Number(e.target.value))}
                className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-3 py-2 text-neutral-100 focus:border-neutral-500 focus:outline-none"
                placeholder="Enter payload mass"
              />
              <div className="text-xs text-neutral-500">
                Typical range: 50-300kg
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button 
            onClick={performCalculation}
            disabled={isCalculating}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
          >
            {isCalculating ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Calculating...
              </div>
            ) : (
              'Calculate Capacity'
            )}
          </Button>
          <Button 
            onClick={resetCalculator}
            variant="ghost"
            className="px-6 py-2"
          >
            Reset
          </Button>
        </div>

        {/* Results Display */}
        {result && (
          <div className="mt-8 space-y-4 border-t border-neutral-700 pt-6">
            <h4 className="text-lg font-semibold text-center">Calculation Results</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Capacity Metrics */}
              <div className="space-y-4">
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <div className="text-sm text-neutral-400 mb-1">Estimated Max Capacity</div>
                  <div className="text-2xl font-bold text-blue-400">
                    {result.estimatedCapacity.toFixed(1)} kg
                  </div>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <div className="text-sm text-neutral-400 mb-1">Capacity Utilization</div>
                  <div className={cn(
                    "text-2xl font-bold",
                    result.efficiency < 70 ? "text-green-400" :
                    result.efficiency < 85 ? "text-yellow-400" :
                    result.efficiency < 95 ? "text-orange-400" : "text-red-400"
                  )}>
                    {result.efficiency.toFixed(1)}%
                  </div>
                  <div className="w-full bg-neutral-700 rounded-full h-2 mt-2">
                    <div 
                      className={cn(
                        "h-2 rounded-full transition-all duration-1000",
                        result.efficiency < 70 ? "bg-green-400" :
                        result.efficiency < 85 ? "bg-yellow-400" :
                        result.efficiency < 95 ? "bg-orange-400" : "bg-red-400"
                      )}
                      style={{ width: `${Math.min(result.efficiency, 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Analysis & Recommendations */}
              <div className="space-y-4">
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <div className="text-sm text-neutral-400 mb-1">vs. Baseline (500km, 60°)</div>
                  <div className={cn(
                    "text-2xl font-bold",
                    result.comparisonToBaseline >= 0 ? "text-green-400" : "text-red-400"
                  )}>
                    {result.comparisonToBaseline >= 0 ? '+' : ''}{result.comparisonToBaseline.toFixed(1)}%
                  </div>
                </div>

                <div className={cn(
                  "rounded-lg p-4 border",
                  result.riskLevel === 'low' ? "bg-green-900/20 border-green-800" :
                  result.riskLevel === 'medium' ? "bg-yellow-900/20 border-yellow-800" :
                  "bg-red-900/20 border-red-800"
                )}>
                  <div className={cn(
                    "font-semibold mb-2",
                    result.riskLevel === 'low' ? "text-green-400" :
                    result.riskLevel === 'medium' ? "text-yellow-400" :
                    "text-red-400"
                  )}>
                    {result.riskLevel === 'low' ? 'Low Risk' :
                     result.riskLevel === 'medium' ? 'Medium Risk' : 'High Risk'}
                  </div>
                  <div className="text-sm text-neutral-300">
                    {result.recommendation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          transition: all 0.2s;
        }
        
        .slider::-webkit-slider-thumb:hover {
          background: #2563eb;
          transform: scale(1.1);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          transition: all 0.2s;
        }
      `}</style>
    </div>
  );
} 