import { ArrowRight, FileText, Globe, LineChart, Briefcase, User, Zap, LayoutDashboard } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-fmb-dark)] text-white selection:bg-[var(--color-fmb-orange)] selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[var(--color-fmb-dark)]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center font-bold text-lg">
              F
            </div>
            <span className="font-semibold text-lg tracking-tight">FunkMyBrand</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://app.funkmybrand.com/login" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Sign in
            </a>
            <a 
              href="https://app.funkmybrand.com" 
              className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-[var(--color-fmb-dark)] to-[var(--color-fmb-dark)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Your career, versioned.
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Create, deploy, and track multiple versions of your CV from one focused workspace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://app.funkmybrand.com" 
              className="flex items-center gap-2 bg-[var(--color-fmb-orange)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-[0_0_30px_rgba(249,115,22,0.3)]"
            >
              Start building
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#preview" 
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View product preview
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Why this exists */}
      <section className="py-20 bg-black/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">A PDF CV is static. Your career is not.</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Different roles, clients, recruiters, and opportunities need different versions of your story. FunkMyBrand lets you build and maintain a dynamic portfolio of professional identities.
          </p>
        </div>
      </section>

      {/* Section 2: What you can do */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-fmb-card)] border border-white/5 p-8 rounded-3xl hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Create CV versions</h3>
              <p className="text-gray-400 leading-relaxed">
                Build focused versions for roles, clients, boards, or advisory work. Tailor your experience to the opportunity.
              </p>
            </div>
            
            <div className="bg-[var(--color-fmb-card)] border border-white/5 p-8 rounded-3xl hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Deploy as a link</h3>
              <p className="text-gray-400 leading-relaxed">
                Share a polished CV mini-site instead of another attachment. Instantly updateable, always accessible.
              </p>
            </div>

            <div className="bg-[var(--color-fmb-card)] border border-white/5 p-8 rounded-3xl hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Track engagement</h3>
              <p className="text-gray-400 leading-relaxed">
                Understand which versions are being viewed and where interest is forming with built-in analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Classic + Archetypes */}
      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Classic + Archetypes</h2>
            <p className="text-xl text-gray-400">
              Start with a classic CV, or choose a more expressive format when the opportunity calls for it.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Briefcase, name: "Classic CV" },
              { icon: Zap, name: "Operator" },
              { icon: LayoutDashboard, name: "Strategist" },
              { icon: User, name: "Founder" },
              { icon: FileText, name: "Consultant" }
            ].map((archetype, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[var(--color-fmb-card)] border border-white/10 px-6 py-4 rounded-full text-gray-300">
                <archetype.icon className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{archetype.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Product preview */}
      <section id="preview" className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[2.5rem] p-2 bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-[var(--color-fmb-card)] rounded-[2.25rem] border border-white/5 overflow-hidden shadow-2xl">
              <div className="border-b border-white/5 px-6 py-4 flex items-center gap-4 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs text-gray-500 font-medium font-mono">app.funkmybrand.com</div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Active Deployments</h3>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full border border-green-500/20">All Systems Go</span>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { name: "Senior PM - Fintech", views: 124, lastActive: "2h ago", status: "Live" },
                        { name: "Advisory Board - Startup", views: 42, lastActive: "1d ago", status: "Live" },
                        { name: "Classic Corporate", views: 89, lastActive: "5h ago", status: "Live" }
                      ].map((deploy, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[var(--color-fmb-dark)] flex items-center justify-center border border-white/5">
                              <Globe className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                              <div className="font-semibold">{deploy.name}</div>
                              <div className="text-sm text-gray-500">Updated {deploy.lastActive}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-orange-400">{deploy.views} views</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1 justify-end">
                              <span className="w-2 h-2 rounded-full bg-green-500"></span>
                              {deploy.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Analytics Overview</h3>
                    <div className="bg-[var(--color-fmb-dark)] border border-white/5 rounded-2xl p-6 space-y-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Total Views (30d)</div>
                        <div className="text-3xl font-bold">255</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Top Performing</div>
                        <div className="font-medium">Senior PM - Fintech</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-2">Engagement Activity</div>
                        <div className="h-20 flex items-end gap-2">
                          {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-orange-500/20 rounded-t-sm relative group">
                              <div 
                                className="absolute bottom-0 w-full bg-orange-500 rounded-t-sm transition-all"
                                style={{ height: `${h}%` }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
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
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-fmb-orange)]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Build the version of yourself the world should see.</h2>
          <a 
            href="https://app.funkmybrand.com" 
            className="inline-flex items-center gap-2 bg-[var(--color-fmb-orange)] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.4)]"
          >
            Start building
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40 text-center text-gray-500">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center font-bold text-xs text-white">
            F
          </div>
          <span className="font-semibold text-gray-400">FunkMyBrand</span>
        </div>
        <p>© {new Date().getFullYear()} FunkMyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
