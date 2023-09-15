import React from 'react'

export default function TableComponent(){
  return (
    <table class="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Column 1
      </th>
      <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Column 2
      </th>
      <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Column 3
      </th>
     
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        Data 1
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        Data 2
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        Data 3
      </td>
     
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        Data 4
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        Data 5
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        Data 6
      </td>
     
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        Data 7
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        Data 8
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        Data 9
      </td>
     
    </tr>
    
  </tbody>
</table>

  )
}