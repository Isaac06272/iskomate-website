import React, { useState } from 'react';
import { Menu, X, Github, Download, Zap, Users, BarChart3, Eye } from 'lucide-react';

export default function IskoMateLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const engagementLevels = [
    { label: 'Highly Engaged', percentage: 35, color: '#B71C1C', textColor: 'white' },
    { label: 'Engaged', percentage: 28, color: '#EBE0D2', textColor: '#332C2B' },
    { label: 'Barely Engaged', percentage: 22, color: '#8B3A3A', textColor: 'white' },
    { label: 'Not Engaged', percentage: 15, color: 'white', textColor: '#201d1c', border: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="IskoMate" className="w-10 h-10 rounded-lg" />
              <span className="text-xl font-bold">IskoMate</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#features" className="hover:text-red-400 transition">Features</a>
              <a href="#how-it-works" className="hover:text-red-400 transition">How It Works</a>
              <a href="#team" className="hover:text-red-400 transition">Team</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              <a href="#features" className="hover:text-red-400 transition block">Features</a>
              <a href="#how-it-works" className="hover:text-red-400 transition block">How It Works</a>
              <a href="#team" className="hover:text-red-400 transition block">Team</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-red-900/20 border border-red-600/50 rounded-full">
                <span className="text-red-400 text-sm font-semibold">🎓 Student Engagement Monitor</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Real-Time Student <span className="text-red-500">Engagement</span> Tracking
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                IskoMate uses AI-powered computer vision to monitor and analyze student engagement in real-time. Designed for educators to create more interactive and attentive learning environments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/iskomate.apk" 
                  download="IskoMate.apk"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-bold text-lg transition transform hover:scale-105"
                >
                  <Download className="inline mr-2" size={20} />
                  Download App
                </a>
                <a
                  href="https://github.com/Isaac06272/iskomate-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-red-600 hover:bg-red-600/10 rounded-lg font-bold text-lg transition"
                >
                  <Github className="inline mr-2" size={20} />
                  View Source
                </a>
              </div>

              <div className="mt-12 flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-red-500">High</p>
                  <p className="text-gray-400">Accuracy</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-500">Four</p>
                  <p className="text-gray-400">Engagement Levels</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-500">Real-Time</p>
                  <p className="text-gray-400">Analysis</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-2xl blur-3xl" />
              <div className="relative bg-gray-800/50 border border-red-600/30 rounded-2xl p-8 backdrop-blur">
                <div className="space-y-4">
                  {engagementLevels.map((level, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold">{level.label}</span>
                        <span className="text-red-400">{level.percentage}%</span>
                      </div>
                      <div className="w-full h-8 bg-gray-700 rounded-full overflow-hidden border border-gray-600">
                        <div
                          className="h-full transition-all duration-500 flex items-center justify-center"
                          style={{
                            width: `${level.percentage}%`,
                            backgroundColor: level.color,
                            borderRight: level.border ? '2px solid #ccc' : 'none',
                          }}
                        >
                          {level.percentage >= 15 && (
                            <span style={{ color: level.textColor }} className="text-xs font-bold">
                              {level.percentage}%
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400">Everything you need to monitor student engagement</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Solo Mode Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600/30 rounded-xl p-8 hover:border-red-600/60 transition">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Solo Mode</h3>
              <p className="text-gray-300 mb-6">
                One-on-one monitoring for individual student sessions. Perfect for tutoring, assessments, or focused learning environments.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Real-time engagement tracking</li>
                <li>✓ Instant feedback to student</li>
                <li>✓ Individual session history</li>
              </ul>
            </div>

            {/* Classroom Mode Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600/30 rounded-xl p-8 hover:border-red-600/60 transition">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Classroom Mode</h3>
              <p className="text-gray-300 mb-6">
                Monitor entire classes at once. Track engagement across all students simultaneously for comprehensive classroom insights.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Multi-student monitoring</li>
                <li>✓ Class-wide analytics</li>
                <li>✓ Student roster management</li>
              </ul>
            </div>

            {/* Analytics Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600/30 rounded-xl p-8 hover:border-red-600/60 transition">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-6">
                Get detailed reports on engagement patterns, trends, and insights. Data-driven decisions for better teaching.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Session summaries</li>
                <li>✓ Historical data tracking</li>
                <li>✓ Export reports</li>
              </ul>
            </div>

            {/* AI Recognition Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600/30 rounded-xl p-8 hover:border-red-600/60 transition">
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Detection</h3>
              <p className="text-gray-300 mb-6">
                Uses advanced computer vision to detect engagement levels based on facial expressions and behavior analysis.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Real-time processing</li>
                <li>✓ High accuracy rate</li>
                <li>✓ Privacy-focused design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Three simple steps to start monitoring engagement</p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <h3 className="text-3xl font-bold">Select Mode</h3>
                </div>
                <p className="text-gray-400 text-lg">
                  Choose between Solo Mode for individual student monitoring or Classroom Mode to track entire classes.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-104 bg-black rounded-3xl shadow-2xl border-8 border-gray-800 overflow-hidden">
                  <img src="/feature1.jpg" alt="Solo Mode" className="w-full h-full object-contain bg-white" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <h3 className="text-3xl font-bold">Start Session</h3>
                </div>
                <p className="text-gray-400 text-lg">
                  Create a session with student details. The camera streams to our AI processing backend for real-time analysis.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-104 bg-black rounded-3xl shadow-2xl border-8 border-gray-800 overflow-hidden">
                  <img src="/feature2.jpg" alt="Solo Mode" className="w-full h-full object-contain bg-white" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <h3 className="text-3xl font-bold">Get Insights</h3>
                </div>
                <p className="text-gray-400 text-lg">
                  Receive real-time engagement percentages and detailed session summaries after completion.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-104 bg-black rounded-3xl shadow-2xl border-8 border-gray-800 overflow-hidden">
                  <img src="/feature3.jpg" alt="Solo Mode" className="w-full h-full object-contain bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Levels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Engagement Levels Explained</h2>
            <p className="text-xl text-gray-400">Four distinct categories to understand student behavior</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {engagementLevels.map((level, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-lg ${level.border ? 'border-2 border-gray-300' : ''}`}
                    style={{ backgroundColor: level.color }}
                  />
                  <h3 className="text-2xl font-bold">{level.label}</h3>
                </div>
                <p className="text-gray-300">
                  {idx === 0 && "Student is actively focused and engaged with the material. Showing strong attentiveness and participation."}
                  {idx === 1 && "Student is attentive but may occasionally lose focus. Generally on-task and responsive."}
                  {idx === 2 && "Student shows signs of distraction or disengagement. Periodic attention lapses detected."}
                  {idx === 3 && "Student appears disengaged or distracted. May need intervention or support."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Meet The Team</h2>
            <p className="text-xl text-gray-400">A group of passionate students building the future of education</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {['Austria', 'Ramos', 'Sutelleza', 'Tuazon'].map((name, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600/20 rounded-lg p-8 text-center hover:border-red-600/50 transition">
                <img src={`/member${idx + 1}.png`} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-red-600" />
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-400">Team Developer</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gray-800/50 border border-gray-700 rounded-lg text-center">
            <p className="text-gray-300 mb-2">
              <span className="font-bold">PUP COLLEGE OF ENGINEERING</span> • BSCPE 4-1
            </p>
            <p className="text-gray-400">CPE PRACTICE AND DESIGN 2</p>
            <p className="text-gray-400">ENGR. ROLITO L. MAHAGUAY</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/50 to-red-800/30 border-t border-red-600/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Your Classroom?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start monitoring student engagement today with IskoMate. Available on Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/iskomate.apk" 
              download="IskoMate.apk"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-bold text-lg transition transform hover:scale-105 inline-block"
            >
              Download Now
            </a>
            <a
              href="https://github.com/Isaac06272/iskomate-app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-red-600 hover:bg-red-600/10 rounded-lg font-bold text-lg transition"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="IskoMate" className="w-10 h-10 rounded-lg" />
                <span className="text-xl font-bold">IskoMate</span>
              </div>
              <p className="text-gray-400">Transforming education through AI-powered engagement monitoring.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-red-400 transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-red-400 transition">How It Works</a></li>
                <li><a href="#team" className="hover:text-red-400 transition">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://github.com/Isaac06272/iskomate-app" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 IskoMate. Built with love by the development team.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
