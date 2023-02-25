import React from 'react'

function Table({ email, name, phone,category,yoe }) {
    return (

        <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
            <tr>
                <td className="px-3 py-2">
                    <p>{name}</p>
                </td>
                <td className="px-3 py-2">
                    <span>{category}</span>
                </td>
                <td className="px-3 py-2">
                    <p>{phone}</p>
                </td>
                <td className="px-3 py-2">
                    <p>{email}</p>
                </td>
                <td className="px-3 py-2">
                    <p>{yoe}</p>
                </td>
                <td className="px-3 py-2">
                    <button
                        type="button"
                        title="Open details"
                        className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                    >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                        </svg>
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

export default Table