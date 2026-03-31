import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import ComparisonGraph from './components/ComparisonGraph'
import Solution from './components/Solution'
import ComparisonTable from './components/ComparisonTable'
import StepFlow from './components/StepFlow'
import Offer from './components/Offer'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-serif">
      <main className="flex-grow">
        <Hero />
        <Problem />
        <ComparisonGraph />
        <ComparisonTable />
        <Solution />
        <StepFlow />
        <Offer />
      </main>
      
      {/* Sticky Mobile CTA for better conversion */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-navy/95 backdrop-blur border-t border-brand-lightNavy z-50 md:hidden">
        <a href="#offer" className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-brand-crimson to-brand-red text-white font-bold rounded-lg shadow-[0_0_15px_rgba(227,0,15,0.5)]">
          まずは無料リストを受け取る
        </a>
      </div>
      
      <footer className="bg-brand-dark text-gray-500 py-8 text-center font-sans text-sm pb-24 md:pb-8">
        <p>© 2026 マクドせどりまん All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
