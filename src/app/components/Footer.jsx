import React from 'react'

export default function Footer() {
  return (
    <footer className= "h-36 bg-slate-800 flex items-center justify-center text-white">
        <p>&copy; univelCity {(new Date('01-01-2023').getFullYear())} - {(new Date().getFullYear())}</p>
    </footer>
  )
}
