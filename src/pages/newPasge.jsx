import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Sun, Zap, BarChart, DollarSign } from 'lucide-react';

export default function Component() {
  const [activeTab, setActiveTab] = useState("why-invest");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sun className="h-8 w-8 text-yellow-500" />
          <span className="text-2xl font-bold">Vested Solar</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-sky-600 transition-colors">Invest</a>
          <a href="#" className="hover:text-sky-600 transition-colors">Learn</a>
          <a href="#" className="hover:text-sky-600 transition-colors">About</a>
          <Button variant="outline" className="ml-4">Log in</Button>
          <Button>Sign up</Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Earn income while helping India move to clean energy
          </h1>
          <p className="text-xl mb-8 text-slate-600">
            Invest in solar panels and contribute to a sustainable future
          </p>
          <Button size="lg" className="text-lg">
            Start Investing <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="why-invest">Why Invest with Vested?</TabsTrigger>
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
          </TabsList>
          <TabsContent value="why-invest">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Sun className="h-12 w-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">First-of-its-kind</h3>
                  <p className="text-slate-600">Vested's fractional solar ownership platform is truly unique</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-sky-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fully Digital</h3>
                  <p className="text-slate-600">Invest in a physical asset fully digitally</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <BarChart className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Real-time tracking</h3>
                  <p className="text-slate-600">Receive daily & monthly performance updates on your solar panels</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <DollarSign className="h-12 w-12 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Low minimum investment</h3>
                  <p className="text-slate-600">Buy solar panels starting from just ₹25,000 per panel</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="how-it-works">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Investing in Solar: A Simple Process</h3>
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-800 font-semibold mr-4">1</span>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Select a solar project</h4>
                    <p className="text-slate-600">Browse our curated list of solar projects and choose one that aligns with your investment goals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-800 font-semibold mr-4">2</span>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Complete KYC</h4>
                    <p className="text-slate-600">Quickly verify your identity through our secure, fully digital KYC process.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-800 font-semibold mr-4">3</span>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Invest</h4>
                    <p className="text-slate-600">Make your investment and become a proud owner of solar panels.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-800 font-semibold mr-4">4</span>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Track & Earn</h4>
                    <p className="text-slate-600">Monitor your investment's performance and receive regular returns from the energy generated.</p>
                  </div>
                </li>
              </ol>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Vested Solar</h3>
              <p className="text-sm text-slate-300">Empowering sustainable investments for a brighter future.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Vested Solar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}