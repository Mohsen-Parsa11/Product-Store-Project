"use client"
import React from 'react'

function SelectBox() {
  return (
    <div>
         <div className="space-x-4">
            <select onChange={e=>e.target.value} className="text-gray-500 font-semibold outline-0 sepia-50">
                <option value="USD $">USD $ </option>
                <option value="UWD $">UWD $ </option>
                <option value="UED $">UED $ </option>
            </select>

            <select onChange={e=>e.target.value} className="text-gray-500 font-semibold outline-0 sepia-50">
                <option value="English">English</option>
                <option value="Persian">Persian</option>
                <option value="Turkish">Turkish</option>
            </select>
          </div>
    </div>
  )
}

export default SelectBox