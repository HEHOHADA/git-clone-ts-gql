import React, { PropsWithChildren } from 'react'
import { Navbar } from '../shared/Navbar'

export const MainLayout: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return (
    <>
      <Navbar/>
      <div>
        { children }
      </div>
    </>
  )
}
