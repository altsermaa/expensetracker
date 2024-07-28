import React from 'react'
import JavaHome from '../../public/JavaHome'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

function AddCategory() {
    const categories = [
        {
            icon: <JavaHome />,
            title: "Add Category 1"
        },
        {
            icon: <JavaHome />,
            title: "Add Category 2"
        },
        {
            icon: <JavaHome />,
            title: "Add Category 3"
        },
        {
            icon: <JavaHome />,
            title: "Add Category 4"
        },
        {
            icon: <JavaHome />,
            title: "Add Category 5"
        },
        {
            icon: <JavaHome />,
            title: "Add Category 6"
        },
        {
            icon: <JavaHome />,
            title: "Add Category 7"
        }
    ]


  return (
    <>
        {categories.map((category, index) => (
        <SelectItem key={index} value={category.title} className='flex items-center gap-2 w-full'>
            {category.icon}
            <span>{category.title}</span>
        </SelectItem>  
        ))}
    </>
  )
}


export default AddCategory
