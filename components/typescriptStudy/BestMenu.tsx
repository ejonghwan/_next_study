import React from 'react'
import { Menu } from '@/types/info'

interface OwnProps extends Menu {
    bestMenuFn(name: string): string
}


const BestMenu: React.FC<OwnProps> = ({ name, category, price, bestMenuFn }) => {


    const handleCLick = () => {
        console.log( bestMenuFn('zzzz') );
    }

  return (
    <div>
        <h1>BestMenu</h1>
        {name}
        {category}
        {price}
        <button type="button" onClick={handleCLick}>name?</button>
    </div>
  )
}

export default BestMenu