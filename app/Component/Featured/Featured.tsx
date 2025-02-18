import React from 'react'
import Card from '../Card/Card'

const Featured = () => {
  return (
    <>
      <div className="mx-auto px-4 sm:px-8 lg:px-16 py-24">
        <h1 className="text-center mb-12 text-3xl sm:text-4xl font-bold">
          Why Choose InfluencerMatch
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card 
            title={"Smart Matching"} 
            description={"AI-powered technology finds the perfect influencers for your brand and audience"} 
          />
          <Card 
            title={"Performance Based"} 
            description={"Only pay for real results with our performance-based pricing model"} 
          />
          <Card 
            title={"Real-Time Analytics"} 
            description={"Track campaign performance, engagement, and ROI in real-time"} 
          />
          <Card 
            title={"Quick Setup"} 
            description={"Launch your first campaign in minutes with our intuitive platform"} 
          />
        </div>
      </div>
    </>
  )
}

export default Featured
