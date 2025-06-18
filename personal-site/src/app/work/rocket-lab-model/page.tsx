import Link from 'next/link';
import { Section, H2, P, Button, Muted } from '@/components/primitives';
import { InteractiveChart } from '@/components/ui/interactive-chart';
import { CapacityCalculator } from '@/components/rocket-lab/capacity-calculator';
import { MissionBrowser } from '@/components/rocket-lab/mission-browser';
import { ScrollAnimation, AnimatedCounter, StaggeredAnimation, AnimatedProgressBar, TypingAnimation } from '@/components/ui/scroll-animations';
import { RocketLabProvider } from '@/contexts/rocket-lab-context';

export default function Page() {
  return (
    <RocketLabProvider>
      <main className="space-y-0">
      {/* ---------------- Hero Section ---------------- */}
      <section className="py-12 text-center border-b border-neutral-800">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
            <TypingAnimation 
              text="Rocket Lab Launch Efficiency Model" 
              speed={100} 
              delay={500}
              cursor={false}
            />
          </h1>
          <ScrollAnimation animation="fadeIn" delay={3000}>
            <P className="text-lg text-neutral-400 max-w-2xl mx-auto">
              High-fidelity analysis revealing how Rocket Lab&apos;s constrained payload capacity 
              affects mission efficiency and customer satisfaction
            </P>
          </ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-neutral-300">Python</span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-neutral-300">Data Analysis</span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-neutral-300">Interpolation</span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-neutral-300">Aerospace</span>
          </div>
        </div>
      </section>

      {/* ---------------- Problem Section ---------------- */}
      <Section id="problem" className="py-16">
        <div className="space-y-8">
          <ScrollAnimation animation="slideUp">
            <div className="space-y-4">
              <H2 className="text-3xl">The Problem</H2>
            <P className="text-lg text-neutral-300 leading-relaxed">
              Rocket Lab&apos;s Electron launch vehicle has significantly lower payload capacity 
              compared to competitors like SpaceX&apos;s Falcon 9, yet the company achieved 
              the second-most launches in 2024.
            </P>
            </div>
          </ScrollAnimation>

          {/* Stats comparison placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-neutral-100">~300kg</div>
              <div className="text-sm text-neutral-400 mt-1">Electron Capacity</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-neutral-100">22,800kg</div>
              <div className="text-sm text-neutral-400 mt-1">Falcon 9 Capacity</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-neutral-100">#2</div>
              <div className="text-sm text-neutral-400 mt-1">Launch Frequency 2024</div>
            </div>
          </div>

          <div className="bg-neutral-900/30 border-l-4 border-neutral-600 pl-6 py-4">
            <P className="text-neutral-300 italic">
              &ldquo;I wanted to dig deeper and find out how often Rocket Lab ran into issues 
              with this limitation. For investors, the results would unlock a conclusive 
              take on whether Rocket Lab was struggling to meet customer requirements 
              or if there was ample demand for small satellite launches.&rdquo;
            </P>
          </div>
        </div>
      </Section>

      {/* ---------------- Background Section ---------------- */}
      <Section id="background" className="py-16 bg-neutral-950/50">
        <div className="space-y-8">
          <div className="space-y-4">
            <H2 className="text-3xl">The Complexity</H2>
            <P className="text-lg text-neutral-300 leading-relaxed">
              The advertised 300kg capacity isn&apos;t universal—it&apos;s only valid for specific 
              mission parameters. Space launch is complicated, and mission parameters 
              can completely change payload capacity.
            </P>
          </div>

          {/* Mission example */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Mission Example: February 19, 2024</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-400">100kg</div>
                <div className="text-sm text-neutral-400">Actual Payload</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">750km</div>
                <div className="text-sm text-neutral-400">Orbital Altitude</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">33%</div>
                <div className="text-sm text-neutral-400">Capacity Utilization?</div>
              </div>
            </div>
            <P className="text-neutral-400 mt-4 text-sm">
              At 50% higher altitude than the baseline 500km, the actual capacity 
              had to be significantly lower than 300kg.
            </P>
          </div>

          {/* Orbital inclination explainer */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">What is Orbital Inclination?</h3>
            <P className="text-neutral-300">
              Orbital inclination is the angle between a satellite&apos;s orbit and Earth&apos;s equator. 
              Think of it like launching a paper airplane—throwing it straight ahead (0°) 
              is easiest, but throwing it at an angle requires more energy and strength.
            </P>
            
            {/* Inclination visualization placeholder */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 text-center">
              <div className="text-neutral-500 mb-4">
                [Orbital Inclination Visualization]
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">0° (Equatorial)</span>
                  <span className="text-sm text-green-400">Least Fuel</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">45° (Inclined)</span>
                  <span className="text-sm text-yellow-400">More Fuel</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">90° (Polar)</span>
                  <span className="text-sm text-red-400">Most Fuel</span>
                </div>
              </div>
            </div>
          </div>

          <P className="text-neutral-300">
            Mission details from Rocket Lab&apos;s website provided inclination and payload mass, 
            but there was no clear way to calculate the actual efficiency of launches 
            and how much Rocket Lab was &ldquo;red-lining&rdquo; their vehicle.
          </P>
        </div>
      </Section>

      {/* ---------------- Discovery Section ---------------- */}
      <Section id="discovery" className="py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <H2 className="text-3xl">The Key Discovery</H2>
            <P className="text-lg text-neutral-300 leading-relaxed">
              After digging through Electron&apos;s user documentation, I found the solution: 
              performance curves showing how payload capacity varies with altitude and inclination.
            </P>
          </div>

          {/* Interactive Performance Curves */}
          <ScrollAnimation animation="scaleIn">
            <InteractiveChart
              series={[
                {
                  id: '40deg',
                  name: '40° Inclination',
                  data: [
                    { x: 400, y: 320 }, { x: 500, y: 300 }, { x: 600, y: 280 }, 
                    { x: 700, y: 260 }, { x: 800, y: 240 }, { x: 900, y: 220 }, 
                    { x: 1000, y: 200 }, { x: 1100, y: 180 }, { x: 1200, y: 160 }
                  ],
                  color: '#3b82f6',
                  type: 'line',
                  visible: true
                },
                {
                  id: '60deg',
                  name: '60° Inclination',
                  data: [
                    { x: 400, y: 300 }, { x: 500, y: 280 }, { x: 600, y: 260 }, 
                    { x: 700, y: 240 }, { x: 800, y: 220 }, { x: 900, y: 200 }, 
                    { x: 1000, y: 180 }, { x: 1100, y: 160 }, { x: 1200, y: 140 }
                  ],
                  color: '#10b981',
                  type: 'line',
                  visible: true
                },
                {
                  id: '80deg',
                  name: '80° Inclination',
                  data: [
                    { x: 400, y: 280 }, { x: 500, y: 260 }, { x: 600, y: 240 }, 
                    { x: 700, y: 220 }, { x: 800, y: 200 }, { x: 900, y: 180 }, 
                    { x: 1000, y: 160 }, { x: 1100, y: 140 }, { x: 1200, y: 120 }
                  ],
                  color: '#f59e0b',
                  type: 'line',
                  visible: true
                },
                {
                  id: '98deg',
                  name: 'Sun-Synchronous',
                  data: [
                    { x: 400, y: 260 }, { x: 500, y: 240 }, { x: 600, y: 220 }, 
                    { x: 700, y: 200 }, { x: 800, y: 180 }, { x: 900, y: 160 }, 
                    { x: 1000, y: 140 }, { x: 1100, y: 120 }, { x: 1200, y: 100 }
                  ],
                  color: '#ef4444',
                  type: 'line',
                  visible: true
                }
              ]}
              title="Electron Performance Curves"
              xLabel="Circular Altitude (km)"
              yLabel="Payload Mass (kg)"
              width={700}
              height={450}
              showGrid={true}
              showLegend={true}
              interactive={true}
              animation={true}
            />
          </ScrollAnimation>

          <div className="bg-neutral-900/30 border-l-4 border-blue-500 pl-6 py-4">
            <P className="text-neutral-300">
              <strong>Key Insight:</strong> These curves revealed significant performance 
              drop-offs due to both altitude and inclination. More importantly, this graph 
              was the solution to calculating significantly more accurate payload capacity 
              for any mission parameters.
            </P>
          </div>
        </div>
      </Section>

      {/* ---------------- Solution Section ---------------- */}
      <Section id="solution" className="py-16 bg-neutral-950/50">
        <div className="space-y-8">
          <div className="space-y-4">
            <H2 className="text-3xl">The Solution</H2>
            <P className="text-lg text-neutral-300 leading-relaxed">
              Using the performance curves, I built a Python interpolation model 
              to calculate precise payload capacity for any altitude and inclination combination.
            </P>
          </div>

          {/* Method overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Methodology</h3>
              <ol className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <span>Extracted data points from performance curves</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <span>Created interpolation arrays in Python</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <span>Applied SciPy 2D linear interpolation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <span>Validated against actual mission data</span>
                </li>
              </ol>
            </div>

            {/* Code preview placeholder */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Code Preview</h3>
                <Muted>interpolation.py</Muted>
              </div>
              <div className="bg-black rounded-lg p-4 text-sm font-mono">
                <div className="text-green-400"># Multi-dimensional interpolation</div>
                <div className="text-neutral-300">from scipy.interpolate import interp2d</div>
                <div className="text-neutral-300">import numpy as np</div>
                <div className="text-neutral-500 mt-2"># Performance curve data</div>
                <div className="text-neutral-300">altitudes = [400, 600, 800, 1000, 1200]</div>
                <div className="text-neutral-300">inclinations = [40, 60, 80, 98]</div>
                <div className="text-neutral-500 mt-2"># Interpolation function</div>
                <div className="text-neutral-300">f = interp2d(altitudes, inclinations, capacity_matrix)</div>
                <div className="text-yellow-400 mt-2"># Calculate capacity for any mission</div>
                <div className="text-neutral-300">capacity = f(target_alt, target_inc)[0]</div>
              </div>
            </div>
          </div>

          {/* Interactive Capacity Calculator */}
          <ScrollAnimation animation="slideUp" delay={200}>
            <CapacityCalculator className="mt-8" />
          </ScrollAnimation>
        </div>
      </Section>

      {/* ---------------- Results Section ---------------- */}
      <Section id="results" className="py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <H2 className="text-3xl">Key Results</H2>
            <P className="text-lg text-neutral-300 leading-relaxed">
              The interpolation model revealed significant differences between simple 
              capacity assumptions and actual mission requirements.
            </P>
          </div>

          {/* Results comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Capacity Utilization Analysis</h3>
              
              {/* Placeholder for capacity utilization chart */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="text-center text-neutral-500 mb-4">
                  [Capacity Utilization Chart]
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Simple Method Average:</span>
                    <span className="text-red-400 font-semibold">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Interpolated Method Average:</span>
                    <span className="text-green-400 font-semibold">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Missions Over 90% Capacity:</span>
                    <span className="text-orange-400 font-semibold">12 missions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Mission Efficiency Insights</h3>
              
              {/* Key findings */}
              <div className="space-y-4">
                <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                  <div className="font-semibold text-green-400 mb-2">High Efficiency</div>
                  <div className="text-sm text-neutral-300">
                    Rocket Lab consistently operates near capacity limits, 
                    indicating strong demand for small satellite launches
                  </div>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
                  <div className="font-semibold text-yellow-400 mb-2">Operational Insight</div>
                  <div className="text-sm text-neutral-300">
                    Several missions exceeded 95% capacity, suggesting customers 
                    are willing to optimize payloads for Electron&apos;s constraints
                  </div>
                </div>
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                  <div className="font-semibold text-blue-400 mb-2">Market Validation</div>
                  <div className="text-sm text-neutral-300">
                    Results validate the small satellite market thesis and 
                    Rocket Lab&apos;s positioning strategy
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Data Coverage Stats */}
          <StaggeredAnimation staggerDelay={150} className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-neutral-100">
                <AnimatedCounter end={66} duration={2000} />
              </div>
              <div className="text-sm text-neutral-400">Missions Analyzed</div>
              <AnimatedProgressBar value={66} max={100} delay={500} color="bg-blue-500" className="mt-2" />
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-neutral-100">
                <AnimatedCounter end={2025} start={2017} duration={2500} />
              </div>
              <div className="text-sm text-neutral-400">Time Period</div>
              <AnimatedProgressBar value={80} max={100} delay={700} color="bg-green-500" className="mt-2" />
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-neutral-100">
                <AnimatedCounter end={4} duration={1500} />
              </div>
              <div className="text-sm text-neutral-400">Orbit Types</div>
              <AnimatedProgressBar value={100} max={100} delay={900} color="bg-purple-500" className="mt-2" />
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-neutral-100">
                ±<AnimatedCounter end={5} duration={1800} decimals={1} />%
              </div>
              <div className="text-sm text-neutral-400">Model Accuracy</div>
              <AnimatedProgressBar value={95} max={100} delay={1100} color="bg-yellow-500" className="mt-2" />
            </div>
          </StaggeredAnimation>
        </div>
      </Section>

      {/* ---------------- Technical Details Section ---------------- */}
      <Section id="technical" className="py-16 bg-neutral-950/50">
        <div className="space-y-8">
          <div className="space-y-4">
            <H2 className="text-3xl">Technical Implementation</H2>
            <P className="text-lg text-neutral-300 leading-relaxed">
              The analysis pipeline combines data processing, interpolation, and validation 
              to provide comprehensive mission efficiency insights.
            </P>
          </div>

          {/* Tech stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tools & Technologies</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-neutral-300"><strong>Python</strong> - Core analysis framework</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-300"><strong>Pandas</strong> - Data manipulation and processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-neutral-300"><strong>SciPy</strong> - 2D linear interpolation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-neutral-300"><strong>DuckDB</strong> - SQL analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span className="text-neutral-300"><strong>Matplotlib/Seaborn</strong> - Visualization</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Multi-dimensional interpolation across altitude and inclination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Mission validation against actual payload data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Capacity utilization analysis and benchmarking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Customer analytics and success rate tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Launch site utilization patterns</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission Database Explorer */}
          <ScrollAnimation animation="slideUp" delay={300}>
            <MissionBrowser className="mt-8" />
          </ScrollAnimation>
        </div>
      </Section>

      {/* ---------------- Conclusion Section ---------------- */}
      <Section id="conclusion" className="py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <H2 className="text-3xl">Conclusion</H2>
            <P className="text-lg text-neutral-300 leading-relaxed">
              This analysis provides a data-driven answer to the key investment question: 
              Rocket Lab is efficiently serving strong demand in the small satellite market, 
              not struggling with capacity constraints.
            </P>
          </div>

          <div className="bg-neutral-900/30 border border-neutral-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">High Utilization</div>
                <div className="text-sm text-neutral-400">
                  Missions consistently operate near capacity limits
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">Market Demand</div>
                <div className="text-sm text-neutral-400">
                  Strong validation of small satellite launch market
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">Model Accuracy</div>
                <div className="text-sm text-neutral-400">
                  Significantly improved capacity calculations
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="secondary" className="mr-4">
              <Link href="/work">← Back to Work</Link>
            </Button>
            <Button asChild variant="ghost">
              <a href="https://github.com/yourusername/rocket-lab-analysis" target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* ---------------- Footer Navigation ---------------- */}
      <footer className="py-8 text-center border-t border-neutral-800">
        <Muted>
          Built with Python, SciPy, and data-driven insights
        </Muted>
      </footer>
    </main>
    </RocketLabProvider>
  );
}