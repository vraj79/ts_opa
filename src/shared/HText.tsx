import React from 'react'

type Props = {
    children:string
}

const HText = ({children}: Props) => {
  return (
    <h1 className='basis-3/5 font-montserrat text-2xl font-bold'>
        {children}
    </h1>
  )
}

export default HText