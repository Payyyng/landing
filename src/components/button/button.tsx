import React from 'react'

interface ButtonProps {
    text: string
}
function Button({text}: ButtonProps) {
  return (
    <div>
        <button type="button" className="bg-primary ease-in-out duration-300 hover:bg-secondary text-white font-bold py-2 px-2 md:px-6 rounded">
            {text}
        </button>
    </div>
  )
}

export default Button
