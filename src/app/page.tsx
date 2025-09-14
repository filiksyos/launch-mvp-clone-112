
import { CheckCircle, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="text-blue-600" />
            <h1 className="text-xl font-bold tracking-tight">LaunchMVP</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all text-sm">
            Get Started
          </button>
        </div>
      </header>

      <main className="pt-24">
        <section className="container mx-auto px-4 text-center py-20">
          <h2 className="text-5xl font-extrabold tracking-tighter mb-4">The Ultimate Next.js & Stripe Boilerplate</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Launch your SaaS application faster than ever with our production-ready starter kit. Focus on your product, not the boilerplate.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-all">
              Start Building Now
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-300 transition-all">
              Learn More
            </button>
          </div>
        </section>

        <section id="pricing" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold tracking-tight">Pricing</h3>
              <p className="text-gray-600 mt-2">Choose the plan that's right for you.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Free Plan */}
              <div className="border rounded-lg p-6 flex flex-col">
                <h4 className="text-2xl font-bold mb-3">Free</h4>
                <p className="text-4xl font-extrabold mb-4">$0<span className="text-lg font-normal text-gray-500">/mo</span></p>
                <p className="text-gray-600 mb-6 min-h-[48px]">For hobby projects and experiments.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2"><CheckCircle className="text-green-500 w-5 h-5" /><span>1 Project</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="text-green-500 w-5 h-5" /><span>Basic Features</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="text-green-500 w-5 h-5" /><span>Community Support</span></li>
                </ul>
                <button className="mt-auto w-full bg-gray-200 text-gray-800 py-2 rounded-md font-semibold hover:bg-gray-300 transition-all">Current Plan</button>
              </div>
              {/* Pro Plan */}
              <div className="border-2 border-blue-600 rounded-lg p-6 flex flex-col relative">
                <div className="absolute top-0 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                <h4 className="text-2xl font-bold mb-3">Pro</h4>
                <p className="text-4xl font-extrabold mb-4">$29<span className="text-lg font-normal text-gray-500">/mo</span></p>
                <p className="text-gray-600 mb-6 min-h-[48px]">For startups and small businesses ready to scale.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2"><CheckCircle className="text-green-500 w-5 h-5" /><span>Unlimited Projects</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="text-green-500 w-5 h-5" /><span>All Features</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="text-green-500 w-5 h-5" /><span>Priority Support</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="text-green-500 w-5 h-5" /><span>Stripe Integration</span></li>
                </ul>
                <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-all">Get Started</button>
              </div>
              {/* Enterprise Plan */}
              <div className="border rounded-lg p-6 flex flex-col">
                <h4 className="text-2xl font-bold mb-3">Enterprise</h4>
                <p className="text-4xl font-extrabold mb-4">Contact Us</p>
                <p className="text-gray-600 mb-6 min-h-[48px]">For large teams with custom needs.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2"><CheckCircle className="text-green-500 w-5 h-5" /><span>Dedicated Infrastructure</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="text-green-500 w-5 h-5" /><span>Custom Integrations</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="text-green-500 w-5 h-5" /><span>24/7 Support</span></li>
                </ul>
                <button className="mt-auto w-full bg-gray-800 text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition-all">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} LaunchMVP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
