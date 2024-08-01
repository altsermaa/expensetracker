import React from 'react'
import { Checkbox } from './ui/checkbox'
import JavaHome from '../../public/JavaHome';
import JavaFood from '../../public/JavaFood';


function Card({item, amount}) {

    const renderIcon = () => {
        if (item === "Food & Drinks") {
            return <JavaFood />;
        } else {
            return <JavaHome />;
        }
    };

    const amountColor = amount > 0 ? "text-green-500" : "text-red-500";

  return (
    <div className='flex w-[894px] justify-between bg-white px-6 py-3 rounded-md mb-3'>
        <div className='flex gap-4 items-center'>
            <Checkbox />
            {renderIcon()}
            <span>{item}</span>
        </div>
        <div>
            <span className={amountColor}>{amount}</span>
        </div>
    </div>
  )
}

export default Card;
