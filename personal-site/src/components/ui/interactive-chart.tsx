"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Advanced Chart Types
interface DataPoint {
  x: number;
  y: number;
  label?: string;
  color?: string;
  metadata?: Record<string, unknown>;
}

interface ChartSeries {
  id: string;
  name: string;
  data: DataPoint[];
  color: string;
  type: 'line' | 'scatter' | 'area';
  visible: boolean;
}

interface InteractiveChartProps {
  series: ChartSeries[];
  width?: number;
  height?: number;
  title?: string;
  xLabel?: string;
  yLabel?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  interactive?: boolean;
  animation?: boolean;
  onPointHover?: (point: DataPoint, series: ChartSeries) => void;
  className?: string;
}

// Advanced SVG Chart Component
export function InteractiveChart({
  series,
  width = 600,
  height = 400,
  title,
  xLabel,
  yLabel,
  showGrid = true,
  showLegend = true,
  interactive = true,
  animation = true,
  onPointHover,
  className,
}: InteractiveChartProps) {
  const [hoveredPoint, setHoveredPoint] = React.useState<{
    point: DataPoint;
    series: ChartSeries;
    x: number;
    y: number;
  } | null>(null);
  const [visibleSeries, setVisibleSeries] = React.useState<Set<string>>(
    new Set(series.filter(s => s.visible).map(s => s.id))
  );

  const padding = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate data bounds
  const allData = series
    .filter(s => visibleSeries.has(s.id))
    .flatMap(s => s.data);
  
  const xMin = Math.min(...allData.map(d => d.x));
  const xMax = Math.max(...allData.map(d => d.x));
  const yMin = Math.min(...allData.map(d => d.y));
  const yMax = Math.max(...allData.map(d => d.y));

  // Scaling functions
  const xScale = (x: number) => ((x - xMin) / (xMax - xMin)) * chartWidth;
  const yScale = (y: number) => chartHeight - ((y - yMin) / (yMax - yMin)) * chartHeight;

  // Generate grid lines
  const gridLines = React.useMemo(() => {
    const xTicks = 5;
    const yTicks = 5;
    const lines = [];

    for (let i = 0; i <= xTicks; i++) {
      const x = (i / xTicks) * chartWidth;
      lines.push({ type: 'vertical', position: x, value: xMin + (i / xTicks) * (xMax - xMin) });
    }

    for (let i = 0; i <= yTicks; i++) {
      const y = (i / yTicks) * chartHeight;
      lines.push({ type: 'horizontal', position: y, value: yMin + (i / yTicks) * (yMax - yMin) });
    }

    return lines;
  }, [xMin, xMax, yMin, yMax, chartWidth, chartHeight]);

  const toggleSeries = (seriesId: string) => {
    setVisibleSeries(prev => {
      const newSet = new Set(prev);
      if (newSet.has(seriesId)) {
        newSet.delete(seriesId);
      } else {
        newSet.add(seriesId);
      }
      return newSet;
    });
  };

  return (
    <div className={cn("relative bg-neutral-900/50 border border-neutral-800 rounded-xl p-6", className)}>
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      )}
      
      <div className="relative">
        <svg width={width} height={height} className="overflow-visible">
          {/* Background */}
          <rect
            x={padding.left}
            y={padding.top}
            width={chartWidth}
            height={chartHeight}
            fill="transparent"
            stroke="rgb(64, 64, 64)"
            strokeWidth={1}
          />

          {/* Grid Lines */}
          {showGrid && (
            <g className="opacity-30">
              {gridLines.map((line, i) => (
                <g key={i}>
                  {line.type === 'vertical' ? (
                    <>
                      <line
                        x1={padding.left + line.position}
                        y1={padding.top}
                        x2={padding.left + line.position}
                        y2={padding.top + chartHeight}
                        stroke="rgb(115, 115, 115)"
                        strokeWidth={0.5}
                        strokeDasharray="2,2"
                      />
                      <text
                        x={padding.left + line.position}
                        y={height - 20}
                        textAnchor="middle"
                        className="fill-neutral-400 text-xs"
                      >
                        {Math.round(line.value)}
                      </text>
                    </>
                  ) : (
                    <>
                      <line
                        x1={padding.left}
                        y1={padding.top + line.position}
                        x2={padding.left + chartWidth}
                        y2={padding.top + line.position}
                        stroke="rgb(115, 115, 115)"
                        strokeWidth={0.5}
                        strokeDasharray="2,2"
                      />
                      <text
                        x={20}
                        y={padding.top + line.position + 4}
                        textAnchor="middle"
                        className="fill-neutral-400 text-xs"
                      >
                        {Math.round(line.value)}
                      </text>
                    </>
                  )}
                </g>
              ))}
            </g>
          )}

          {/* Data Series */}
          <g className="chart-data">
            {series
              .filter(s => visibleSeries.has(s.id))
              .map((s, seriesIndex) => (
                <g key={s.id}>
                  {s.type === 'line' || s.type === 'area' ? (
                    <>
                      {/* Area fill for area charts */}
                      {s.type === 'area' && (
                        <path
                          d={`M ${padding.left + xScale(s.data[0].x)} ${padding.top + yScale(s.data[0].y)} 
                              ${s.data.map(d => `L ${padding.left + xScale(d.x)} ${padding.top + yScale(d.y)}`).join(' ')}
                              L ${padding.left + xScale(s.data[s.data.length - 1].x)} ${padding.top + chartHeight}
                              L ${padding.left + xScale(s.data[0].x)} ${padding.top + chartHeight} Z`}
                          fill={s.color}
                          fillOpacity={0.2}
                          className={animation ? "transition-all duration-1000 ease-out" : ""}
                          style={animation ? { 
                            animationDelay: `${seriesIndex * 200}ms`,
                            animation: `fadeInUp 1s ease-out ${seriesIndex * 200}ms both`
                          } : {}}
                        />
                      )}
                      
                      {/* Line path */}
                      <path
                        d={`M ${s.data.map(d => `${padding.left + xScale(d.x)} ${padding.top + yScale(d.y)}`).join(' L ')}`}
                        fill="none"
                        stroke={s.color}
                        strokeWidth={2}
                        className={cn(
                          "transition-all duration-300",
                          animation && "animate-draw-line"
                        )}
                        style={animation ? {
                          strokeDasharray: "1000",
                          strokeDashoffset: "1000",
                          animation: `drawLine 2s ease-out ${seriesIndex * 300}ms forwards`
                        } : {}}
                      />
                    </>
                  ) : null}

                  {/* Data points */}
                  {s.data.map((point, pointIndex) => (
                    <circle
                      key={pointIndex}
                      cx={padding.left + xScale(point.x)}
                      cy={padding.top + yScale(point.y)}
                      r={interactive ? 6 : 4}
                      fill={s.color}
                      stroke="white"
                      strokeWidth={2}
                      className={cn(
                        "transition-all duration-200",
                        interactive && "cursor-pointer hover:r-8 hover:fill-opacity-80"
                      )}
                      style={animation ? {
                        opacity: 0,
                        animation: `fadeIn 0.5s ease-out ${(seriesIndex * 300) + (pointIndex * 100)}ms forwards`
                      } : {}}
                      onMouseEnter={(e) => {
                        if (interactive) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredPoint({
                            point,
                            series: s,
                            x: rect.left + rect.width / 2,
                            y: rect.top
                          });
                          onPointHover?.(point, s);
                        }
                      }}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                  ))}
                </g>
              ))}
          </g>

          {/* Axis Labels */}
          {xLabel && (
            <text
              x={padding.left + chartWidth / 2}
              y={height - 5}
              textAnchor="middle"
              className="fill-neutral-300 text-sm font-medium"
            >
              {xLabel}
            </text>
          )}
          {yLabel && (
            <text
              x={15}
              y={padding.top + chartHeight / 2}
              textAnchor="middle"
              transform={`rotate(-90, 15, ${padding.top + chartHeight / 2})`}
              className="fill-neutral-300 text-sm font-medium"
            >
              {yLabel}
            </text>
          )}
        </svg>

        {/* Interactive Tooltip */}
        {hoveredPoint && (
          <div
            className="absolute bg-neutral-800 border border-neutral-600 rounded-lg p-3 shadow-lg pointer-events-none z-10 transform -translate-x-1/2 -translate-y-full"
            style={{
              left: hoveredPoint.x - padding.left,
              top: hoveredPoint.y - padding.top - 10,
            }}
          >
            <div className="text-sm">
              <div className="font-semibold text-neutral-100">{hoveredPoint.series.name}</div>
              <div className="text-neutral-300">
                X: {hoveredPoint.point.x.toFixed(1)}, Y: {hoveredPoint.point.y.toFixed(1)}
              </div>
              {hoveredPoint.point.label && (
                <div className="text-neutral-400 text-xs">{hoveredPoint.point.label}</div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          {series.map(s => (
            <button
              key={s.id}
              onClick={() => toggleSeries(s.id)}
              className={cn(
                "flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-all",
                visibleSeries.has(s.id)
                  ? "bg-neutral-700 text-neutral-100"
                  : "bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50"
              )}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: visibleSeries.has(s.id) ? s.color : '#666' }}
              />
              {s.name}
            </button>
          ))}
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
} 