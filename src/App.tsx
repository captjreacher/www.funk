import { ArrowRight, BarChart3, Briefcase, ChevronRight, Copy, Eye, FileText, Globe, Lightbulb, Rocket, Users } from 'lucide-react';
import React from 'react';

function App() {
  const scrollToPreview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-orange-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
              <span className="font-bold text-white text-xl leading-none tracking-tighter">F</span>
            </div>
            <span className="font-bold text-lg tracking-tight">FunkMyBrand</span>
          </div>
          <a
            href="https://app.funkmybrand.com"
            className="text-sm font-medium hover:text-orange-400 transition-colors"
          >
            Sign in
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/40 to-transparent blur-3xl rounded-full mix-blend-screen" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
              Your career, versioned.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Create, deploy, and track multiple versions of your CV from one focused workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.funkmybrand.com"
                className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                Start building
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#preview"
                onClick={scrollToPreview}
                className="w-full sm:w-auto px-8 py-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2"
              >
                View product preview
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 border-y border-neutral-900 bg-neutral-900/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-2xl md:text-4xl font-medium leading-tight text-neutral-300">
              A PDF CV is static. <span className="text-white">Your career is not.</span><br className="hidden md:block" />
              <span className="text-neutral-500 text-xl md:text-3xl mt-4 block">
                Different roles, clients, and opportunities require different versions of your story.
              </span>
            </p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                  <Copy className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Create CV versions</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Build focused versions for roles, clients, and opportunities.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                  <Globe className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Deploy as a link</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Share a live CV instead of sending attachments.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                  <BarChart3 className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Track engagement</h3>
                <p className="text-neutral-400 leading-relaxed">
                  See which versions are being viewed and where interest is building.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Archetypes Section */}
        <section className="py-24 md:py-32 bg-neutral-900/30 border-t border-neutral-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Choose how you want to present yourself</h2>
              <p className="text-xl text-neutral-400">Start with a classic CV or choose a more expressive format</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: FileText, title: "Classic CV", desc: "The standard format" },
                { icon: Rocket, title: "Operator", desc: "Execution focused" },
                { icon: Lightbulb, title: "Strategist", desc: "Vision & planning" },
                { icon: Briefcase, title: "Founder", desc: "Zero to one" },
                { icon: Users, title: "Consultant", desc: "Client & advisory" }
              ].map((archetype, i) => (
                <div key={i} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-orange-500/50 hover:bg-neutral-900 transition-all cursor-default group">
                  <archetype.icon className="w-8 h-8 text-neutral-500 group-hover:text-orange-400 mb-4 transition-colors" />
                  <h4 className="font-semibold text-lg mb-1">{archetype.title}</h4>
                  <p className="text-sm text-neutral-500">{archetype.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Preview Section */}
        <section id="preview" className="py-24 md:py-32 scroll-mt-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">One workspace for your professional identity</h2>
            </div>
            
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 shadow-2xl shadow-orange-500/5 overflow-hidden">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 flex flex-col md:flex-row min-h-[400px]">
                
                {/* Sidebar mock */}
                <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-neutral-800 p-4">
                  <div className="h-8 w-24 bg-neutral-800 rounded mb-8"></div>
                  <div className="space-y-2">
                    <div className="h-8 bg-neutral-800/50 rounded flex items-center px-3 text-sm text-neutral-300 font-medium border border-neutral-700/50">
                      Overview
                    </div>
                    <div className="h-8 rounded flex items-center px-3 text-sm text-neutral-500 font-medium">
                      Deployments
                    </div>
                    <div className="h-8 rounded flex items-center px-3 text-sm text-neutral-500 font-medium">
                      Analytics
                    </div>
                  </div>
                </div>

                {/* Main content mock */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Your CVs</h3>
                      <p className="text-sm text-neutral-500">Manage and track your active versions</p>
                    </div>
                    <div className="px-4 py-2 bg-orange-500 rounded-lg text-sm font-medium">New Version</div>
                  </div>

                  <div className="grid gap-4">
                    {/* CV Row 1 */}
                    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-neutral-400" />
                        </div>
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            Senior PM - FinTech
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">Live</span>
                          </div>
                          <div className="text-sm text-neutral-500 mt-1 flex items-center gap-3">
                            <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> 142 views</span>
                            <span>Updated 2d ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-400 cursor-pointer"><Globe className="w-4 h-4" /></div>
                        <div className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-400 cursor-pointer"><ChevronRight className="w-4 h-4" /></div>
                      </div>
                    </div>

                    {/* CV Row 2 */}
                    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                          <Rocket className="w-5 h-5 text-neutral-400" />
                        </div>
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            Startup Generalist
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">Live</span>
                          </div>
                          <div className="text-sm text-neutral-500 mt-1 flex items-center gap-3">
                            <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> 89 views</span>
                            <span>Updated 1w ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-400 cursor-pointer"><Globe className="w-4 h-4" /></div>
                        <div className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-400 cursor-pointer"><ChevronRight className="w-4 h-4" /></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Build the version of yourself the world should see.
            </h2>
            <a
              href="https://app.funkmybrand.com"
              className="inline-flex px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium rounded-full transition-all items-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/25"
            >
              Start building
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-neutral-900 text-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} FunkMyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
