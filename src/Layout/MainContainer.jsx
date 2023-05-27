import React from 'react'

const MainContainer = ({children}) => {
  return (
    <div className="p-5 sm:px-12 sm:p-2 md:px-[120px] w-full h-screen overflow-y-scroll pt-[100px]">
        {children}
    </div>
  )
}

export default MainContainer