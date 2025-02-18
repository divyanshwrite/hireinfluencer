import React from 'react'

function CTA() {
  return (
    <div className='border-t bg-muted/40 py-24'>
      <div className="heading">
        <h1 className='mb-12 text-center text-3xl font-bold'>How It Works</h1>
      </div>
      <div className="Cards grid gap-8 md:grid-cols-3">
        <div className="text-center">
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground mx-auto'>1</div>
            <h3 className='mb-2 font-bold'>Create Your Campaign</h3>
            <p className='text-sm text-muted-foreground'>Define your goals, target audience, and campaign requirements</p>
        </div>

        <div className="text-center">
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground mx-auto'>2</div>
            <h3 className='mb-2 font-bold'>Track & Optimize</h3>
            <p className='text-sm text-muted-foreground'>Monitor performance and optimize campaigns in real-time</p>
        </div>

        <div className="text-center mr-2">
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground mx-auto'>3</div>
            <h3 className='mb-2 font-bold'>Match with Influencers</h3>
            <p className='text-sm text-muted-foreground'>Our AI matches you with the perfect micro-influencers for your brand</p>
        </div>
      </div>
    </div>
  )
}

export default CTA
