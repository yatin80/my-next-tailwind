import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function ProductCount() {
    const [count, setCount] = useState(1);

    const handleMinus = () => {
        if (count === 0) {

            setCount(0)

        } else {
            setCount(count - 1);
        }
        // setCount(count - 1);
    }
    const handlePlus = () => {
        setCount(count + 1);
    }
    return (
        <div className='my-5 inline-flex gap-4 border-1 border-gray-300 py-2.5 px-3 align-center'>
            <div className='cursor-pointer'>
                <FontAwesomeIcon icon={faMinus} onClick={() => handleMinus()} className={`${count === 0 ? 'text-gray-400' : ''}`} />
            </div>

            <input type='number' className='w-12 text-center' value={count} />

            <button className='cursor-pointer'>
                <FontAwesomeIcon icon={faPlus} onClick={() => handlePlus()} />
            </button>
        </div>
    )
}
