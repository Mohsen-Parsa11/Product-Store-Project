import React from 'react'

function Container({children}:{children:React.ReactNode}) {
  return (
    <div className='container mx-auto px-6 lg:px-0 box-border'>
        {children}
    </div>
  )
}

export default Container