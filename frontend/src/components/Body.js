"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import JavaEye from '../../public/JavaEye'
import JavaArrow from '../../public/JavaArrow'
import JavaPlus from '../../public/JavaPlus'
import Amount from './Amount'
import Filter from './Filter'
import Details from './Details'
import Card from './Card'
import AddRecord from './AddRecord'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { TitleContext } from "./Context"

const categories = [
    "Food & Drinks", 
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life $ Entertainment",
    "Communication, PC", 
    "Financial expenses",
    "Investments",
    "Income", 
    "Others"
]

function Body() {
    const [accounts, setAccounts] = useState([]);
    const [title, setTitle] = useContext(TitleContext)
    const [amount, setAmount] = useState("");


    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("http://localhost:4000/accounts")
            setAccounts(response.data);
        }

        getData();
    }, [])

    const createAccount = async () => {
        const newAccount = {
            title,
            amount,
        };

        const response = await axios.post("http://localhost:4000/accounts", newAccount);
        setAccounts([...accounts, response.data])
    }


    return (
        <div className='bg-[#f2f4f6] w-full h-full'>
            <div className='w-[1440px] px-24 pt-4 pb-8 flex gap-6 m-auto'>
                <div className='flex flex-col px-4 py-6 gap-6 bg-white w-[282px]'>
                    <b>Records</b>
                    <AddRecord />
                    <Input type='text' placeholder='Search' />
                    <div>
                        <h1 className='mb-4 font-bold'>Types</h1>
                        <RadioGroup defaultValue="comfortable" className="flex flex-col gap-3">
                            <div className="flex items-center space-x-2 gap-1">
                                <RadioGroupItem value="default" id="r1" />
                                <Label htmlFor="r1">All</Label>
                            </div>
                            <div className="flex items-center space-x-2 gap-1">
                                <RadioGroupItem value="comfortable" id="r2" />
                                <Label htmlFor="r2">Income</Label>
                            </div>
                            <div className="flex items-center space-x-2 gap-1">
                                <RadioGroupItem value="compact" id="r3" />
                                <Label htmlFor="r3">Expense</Label>
                            </div>
                        </RadioGroup>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <h1 className='mb-4 font-bold'>Category</h1>
                            <h1 className='text-gray-400'>Clear</h1>
                        </div>
                        {categories.map((category, index) => (
                            <div key={index} className='flex flex-col gap-2'>
                                <div  className='flex justify-between items-center'>
                                    <div className='flex gap-1 items-center'>
                                    <JavaEye />
                                        <h2 className='text-sm'>{category}</h2>
                                    </div>
                                    <JavaArrow />
                                </div>
                            </div>
                        ))}
                        <div className='flex items-center gap-1'>
                            <JavaPlus />
                            <p className='text-sm'>Add Category</p>
                        </div>
                    </div>
                    <Amount />
                </div>
                <div className="ml-6 mr-28 mt-12 mb-14 flex flex-col gap-6">
                    <Filter />
                    <Details />
                    <h1 className='mb-4 font-bold'>Today</h1>
                    <Card item = "Food & Drinks" amount={-3000}/>
                    <Card item = "Lending & Renting" amount={1000}/>
                    <Card item = "Food & Drinks" amount={-3000}/>
                    <h1 className='mb-4 font-bold'>Yesterday</h1>
                    <ul>
                        {accounts.map((accounts, index) => (
                            <Card key={index} item = {accounts.title} amount={accounts.amount}/>
                        // <li key={accounts.title + index}>
                        //     {accounts.title} - {accounts.amount}
                        //     </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 p-6">
                        <input 
                            className="border"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value)
                            }}
                        />
                         <input 
                            className="border"
                            value={amount}
                            onChange={(event) => {
                                setAmount(event.target.value)
                            }}
                        />

                        <button onClick={createAccount}>Create</button>
                    </div>

                    </div>
            </div>
        </div>
    )
}

export default Body
