import React from 'react'

function BtnCta() {
  return (
    <div className="border-t bg-muted/40 py-24">
      <div className="Content text-center flex gap-3 flex-col items-center">
        <h2 className="text-2xl">Ready To Grow And Build ?</h2>
        <p className='text-md text-muted-foreground'>Join hundreds of businesses already growing with micro-influencer marketing</p>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mt-8">Get Started Now <i className='bx bxs-right-arrow' ></i></button>
      </div>
    </div>
  )
}

export default BtnCta
