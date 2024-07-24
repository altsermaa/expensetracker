import React from 'react'
import { Checkbox } from './ui/checkbox'
import JavaHome from '../../public/JavaHome';
import JavaFood from '../../public/JavaFood';


function Card({item, amount}) {

    const renderIcon = () => {
        if (item === "Food & Drinks") {
            return <JavaHome />;
        } else {
            return <JavaFood />;
        }
    };

    const amountColor = amount > 0 ? "text-green-500" : "text-red-500";

  return (
    <div className='flex w-[894px] justify-between bg-white px-6 py-3 rounded-md'>
        <div className='flex items-center gap-4'>
            <Checkbox />
            {renderIcon()}
            <span>{item}</span>
            <span className={amountColor}>{amount}</span>
        </div>
    </div>
  )
}

export default Card;
