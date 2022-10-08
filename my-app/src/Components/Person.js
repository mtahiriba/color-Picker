import React from 'react'

export default function Person({person}) {
  return (
    <div>
      <li>I am {person.name}. I am {person.age} years old</li>
    </div>
  )
}
