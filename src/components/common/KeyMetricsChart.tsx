import React, { useState } from 'react';
import { MetricItem } from '../../types';
import { BarChart3, Radar, Info, CheckCircle2, AlertCircle, AlertTriangle } from 'lucide-react';

interface KeyMetricsChartProps {
  metrics: MetricItem[];
  title?: string;
  subtitle?: string;
  showToggle?: boolean;
  highlightKey?: string;
  onSelectMetric?: (metric: MetricItem) => void;
}

export const KeyMetricsChart: React.FC<KeyMetricsChartProps> = ({
  metrics,
  title = 'Code Quality Metrics Profile',
  subtitle = 'Comparing current submission metrics against recommended pedagogical benchmarks',
  showToggle = true,
  highlightKey,
  onSelectMetric,
}) => {
  const [viewMode, setViewMode] = useState<'bars' | 'radar'>('bars');
  const [hoveredMetric, setHoveredMetric] = useState<MetricItem | null>(null);

  // Radar chart calculations
  const center = 140;
  const radius = 100;
  const numPoints = metrics.length;
  const angleStep = (Math.PI * 2) / numPoints;

  // Compute polygon points for current student scores
  const scorePoints = metrics.map((m, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (m.score / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  // Compute polygon points for benchmark target
  const benchmarkPoints = metrics.map((m, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (m.benchmark / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  const getStatusBadge = (status: MetricItem['status']) => {
    switch (status) {
      case 'optimal':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Optimal
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
            <AlertTriangle className="w-3 h-3 text-amber-600" /> Needs Focus
          </span>
        );
      case 'critical':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200">
            <AlertCircle className="w-3 h-3 text-rose-600" /> Critical Habit
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden" id="key-metrics-chart-component">
      {/* Header bar */}
      <div className="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50/50">
        <div>
          <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            {title}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
        </div>

        {showToggle && (
          <div className="flex items-center gap-2 bg-slate-200/60 p-1 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => setViewMode('bars')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all ${
                viewMode === 'bars' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Bar Benchmark
            </button>
            <button
              onClick={() => setViewMode('radar')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all ${
                viewMode === 'radar' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Radar className="w-3.5 h-3.5" />
              Habit Radar
            </button>
          </div>
        )}
      </div>

      <div className="p-6">
        {viewMode === 'bars' ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 px-1 pb-1 border-b border-slate-100">
              <span className="font-medium">Evaluated Dimension</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-indigo-600 inline-block" /> Student Score
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-300 inline-block" /> Benchmark (Target)
                </span>
              </div>
            </div>

            {metrics.map((metric) => {
              const isHighlighted = highlightKey === metric.key;
              const delta = metric.score - metric.benchmark;
              return (
                <div
                  key={metric.id}
                  onClick={() => onSelectMetric?.(metric)}
                  onMouseEnter={() => setHoveredMetric(metric)}
                  onMouseLeave={() => setHoveredMetric(null)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    isHighlighted
                      ? 'border-indigo-500 bg-indigo-50/40 shadow-xs'
                      : 'border-slate-100 bg-slate-50/30 hover:bg-slate-50 hover:border-slate-200'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-800">{metric.name}</span>
                      {getStatusBadge(metric.status)}
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-slate-500">{metric.valueDisplay}</span>
                      <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                        {metric.score}/100
                      </span>
                      <span className={`font-medium ${delta >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {delta >= 0 ? `+${delta}` : delta}
                      </span>
                    </div>
                  </div>

                  {/* Dual comparative progress bar */}
                  <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    {/* Benchmark vertical tick indicator */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10"
                      style={{ left: `${metric.benchmark}%` }}
                      title={`Target Benchmark: ${metric.benchmark}`}
                    />
                    {/* Student current score fill */}
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        metric.score >= metric.benchmark
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600'
                          : metric.score >= 60
                          ? 'bg-gradient-to-r from-indigo-500 to-indigo-600'
                          : 'bg-gradient-to-r from-amber-500 to-rose-500'
                      }`}
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-1.5 text-[11px] text-slate-400">
                    <span>{metric.plainMeaning}</span>
                    <span>Target: {metric.benchmark}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Radar View */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 flex justify-center py-2">
              <svg width="280" height="280" viewBox="0 0 280 280" className="overflow-visible">
                {/* Background concentric reference webs */}
                {[0.25, 0.5, 0.75, 1].map((scale, level) => {
                  const r = radius * scale;
                  const webPoints = metrics.map((_, i) => {
                    const angle = i * angleStep - Math.PI / 2;
                    const x = center + r * Math.cos(angle);
                    const y = center + r * Math.sin(angle);
                    return `${x},${y}`;
                  }).join(' ');

                  return (
                    <g key={level}>
                      <polygon
                        points={webPoints}
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="1"
                        strokeDasharray={scale === 1 ? 'none' : '2,2'}
                      />
                      <text
                        x={center + 4}
                        y={center - r + 10}
                        fontSize="9"
                        fill="#94a3b8"
                        className="select-none"
                      >
                        {scale * 100}
                      </text>
                    </g>
                  );
                })}

                {/* Axis lines and labels */}
                {metrics.map((m, i) => {
                  const angle = i * angleStep - Math.PI / 2;
                  const x = center + radius * Math.cos(angle);
                  const y = center + radius * Math.sin(angle);
                  const labelRadius = radius + 22;
                  const lx = center + labelRadius * Math.cos(angle);
                  const ly = center + labelRadius * Math.sin(angle);

                  return (
                    <g key={m.id}>
                      <line x1={center} y1={center} x2={x} y2={y} stroke="#cbd5e1" strokeWidth="1" />
                      <text
                        x={lx}
                        y={ly}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="10"
                        fontWeight="600"
                        fill="#475569"
                        className="cursor-pointer"
                        onClick={() => onSelectMetric?.(m)}
                      >
                        {m.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}

                {/* Target benchmark polygon */}
                <polygon
                  points={benchmarkPoints}
                  fill="#94a3b8"
                  fillOpacity="0.12"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="4,3"
                />

                {/* Current student score polygon */}
                <polygon
                  points={scorePoints}
                  fill="#6366f1"
                  fillOpacity="0.3"
                  stroke="#4f46e5"
                  strokeWidth="2.5"
                />

                {/* Score point dots */}
                {metrics.map((m, i) => {
                  const angle = i * angleStep - Math.PI / 2;
                  const r = (m.score / 100) * radius;
                  const x = center + r * Math.cos(angle);
                  const y = center + r * Math.sin(angle);
                  return (
                    <circle
                      key={m.id}
                      cx={x}
                      cy={y}
                      r="4.5"
                      fill="#4f46e5"
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="transition-transform hover:scale-150 cursor-pointer"
                      onMouseEnter={() => setHoveredMetric(m)}
                      onClick={() => onSelectMetric?.(m)}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Radar sidebar breakdown */}
            <div className="md:col-span-5 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" /> Current Assessment
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Target Benchmark
                </span>
              </div>

              {hoveredMetric ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800 text-sm">{hoveredMetric.name}</span>
                    <span className="font-bold text-indigo-700 text-sm">{hoveredMetric.score}/100</span>
                  </div>
                  <p className="text-xs text-slate-600">{hoveredMetric.plainMeaning}</p>
                  <div className="text-xs text-slate-500 pt-1">
                    <strong className="text-slate-700">Recommended Action:</strong> {hoveredMetric.recommendedAction}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-500 flex items-start gap-2 py-2">
                  <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Hover over any metric vertex or bar to inspect habit definitions and recommended action plans.</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
