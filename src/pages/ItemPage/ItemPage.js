import React from 'react'
import Header from '../../components/Header/Header'

export function ItemPage({itemInfo}) {
  return (
    <div>
      <Header />
      Hello from ItemPage! <br />
      {itemInfo}
    </div>
  )
}
