import { Layers, Link as LinkIcon, BarChart3, ChevronRight, LayoutTemplate } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-zinc-100 font-sans selection:bg-accent/30">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center font-bold text-white shadow-lg shadow-accent/20">
            F
          </div>
          <span className="font-semibold text-xl tracking-tight">FunkMyBrand</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-zinc-400">
          <a href="#why" className="hover:text-zinc-100 transition-colors">Why</a>
          <a href="#features" className="hover:text-zinc-100 transition-colors">Features</a>
          <a href="#formats" className="hover:text-zinc-100 transition-colors">Formats</a>
        </div>
        <div>
          <a href="https://app.funkmybrand.com" className="text-sm font-medium bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2 rounded-full transition-all">
            Sign in
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full opacity-50 mix-blend-screen"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm font-medium text-zinc-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            AI-powered brand & CV deployment studio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Your career, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">versioned.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Create, deploy, and track multiple versions of your CV from one focused workspace. 
            Stop sending static files and start deploying your professional brand.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.funkmybrand.com" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent hover:bg-orange-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] flex items-center justify-center group">
              Start building
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#preview" className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-semibold transition-all flex items-center justify-center">
              View product preview
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Why this exists */}
      <section id="why" className="py-24 bg-zinc-950/50 border-y border-zinc-900">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">A PDF CV is static. Your career is not.</h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Different roles, clients, recruiters, and opportunities need different versions of your story. 
            We make it effortless to branch your professional narrative while keeping everything organized.
          </p>
        </div>
      </section>

      {/* Section 2: What you can do */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Create CV versions</h3>
              <p className="text-zinc-400 leading-relaxed">
                Build focused versions for roles, clients, boards, or advisory work without losing track of your master record.
              </p>
            </div>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <LinkIcon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Deploy as a link</h3>
              <p className="text-zinc-400 leading-relaxed">
                Share a polished CV mini-site instead of another attachment. Instantly updateable, universally accessible.
              </p>
            </div>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Track engagement</h3>
              <p className="text-zinc-400 leading-relaxed">
                Understand which versions are being viewed and where interest is forming with lightweight analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Classic + Archetypes */}
      <section id="formats" className="py-24 bg-zinc-950/50 border-y border-zinc-900">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <div className="mb-16">
            <LayoutTemplate className="w-10 h-10 text-zinc-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Presentation matters.</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Start with a classic CV, or choose a more expressive format when the opportunity calls for it.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Classic CV', 'Operator', 'Strategist', 'Founder', 'Consultant'].map((archetype) => (
              <div key={archetype} className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                {archetype}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Product preview */}
      <section id="preview" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 p-2 md:p-4 shadow-2xl shadow-black/50 relative overflow-hidden">
            {/* UI Header Mock */}
            <div className="flex items-center space-x-2 px-4 pb-4 border-b border-zinc-800/50">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
            
            <div className="p-4 md:p-8 grid md:grid-cols-3 gap-6">
              {/* Left sidebar mock */}
              <div className="hidden md:block col-span-1 space-y-4">
                <div className="h-8 bg-zinc-800/50 rounded w-3/4 mb-8"></div>
                <div className="space-y-2">
                  <div className="h-6 bg-zinc-800/80 rounded w-full border-l-2 border-accent pl-2"></div>
                  <div className="h-6 bg-zinc-800/30 rounded w-5/6"></div>
                  <div className="h-6 bg-zinc-800/30 rounded w-4/6"></div>
                </div>
              </div>
              
              {/* Main content mock */}
              <div className="col-span-1 md:col-span-2 space-y-6">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h4 className="text-xl font-semibold">Active Deployments</h4>
                    <p className="text-sm text-zinc-500">Manage your live links</p>
                  </div>
                  <div className="h-8 w-24 bg-accent/20 border border-accent/30 rounded text-accent text-xs flex items-center justify-center font-medium">
                    + New Version
                  </div>
                </div>
                
                {/* Deployment Items */}
                {[
                  { name: 'VP Engineering - Stripe', status: 'Live', views: 12 },
                  { name: 'Advisory Board Profile', status: 'Live', views: 5 },
                  { name: 'Startup Advisor - FinTech', status: 'Draft', views: 0 }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-zinc-800 bg-zinc-800/20 flex items-center justify-between">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-zinc-500 mt-1 flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <span className={`w-2 h-2 rounded-full ${item.status === 'Live' ? 'bg-green-500' : 'bg-zinc-600'}`}></span>
                          {item.status}
                        </span>
                        <span>{item.views} views</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-zinc-400" />
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                        <LinkIcon className="w-4 h-4 text-zinc-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl pointer-events-none">
          <div className="w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full mx-auto mix-blend-screen"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Build the version of yourself <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">the world should see.</span>
          </h2>
          <a href="https://app.funkmybrand.com" className="inline-flex items-center px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-zinc-900 font-bold text-lg transition-all shadow-xl group">
            Start building
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center font-bold text-zinc-400 text-xs">
              F
            </div>
            <span>© {new Date().getFullYear()} FunkMyBrand</span>
          </div>
          <div className="flex gap-6">
            <a href="https://app.funkmybrand.com" className="hover:text-zinc-300 transition-colors">App</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;