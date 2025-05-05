import React from 'react'

export const List = ({arr , liststyle , boxstyle}) => {
  return (
    <ul className={boxstyle}>
        {arr.map((item, index) => <li className={liststyle} key={index}>{item.icon}{item.name}</li>)}
    </ul>
  )
}
