import React from 'react'

function HeroSection() {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center h-screen flex-col px-4 sm:px-8 lg:px-16">
        <div className="xl:w-full md:w-3/4 lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Connect with Authentic Micro-Influencers
          </h2>
          <p className="text-center mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-muted-foreground">
            Find and partner with genuine creators who share your brand's values. Track performance and grow together.
          </p>
          <div className="flex justify-center mt-5 gap-4">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mt-8">Get Started Now <i className='bx bxs-right-arrow' ></i></button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-black border h-11 rounded-md px-8 mt-8">Become An Influcener</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
