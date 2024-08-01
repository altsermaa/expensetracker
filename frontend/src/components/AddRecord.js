"use client"

import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose,} from "@/components/ui/dialog"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import AddCategory from "./AddCategory"
import axios from "axios"


function AddRecord() {
    const [date, setDate] = useState(new Date())
    const [accounts, setAccounts] = useState([]);
    const [amount, setAmount] = useState("");
    const [title, setTitle] = useState(""); 

    const createAccount = async () => {
        const newAccount = { title, amount };

        const response = await axios.post("http://localhost:4000/accounts", newAccount);
        setAccounts([...accounts, response.data])
    }
        
  return (
    <div>
       <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full h-fit">+ Add</Button>
            </DialogTrigger>
            <DialogContent className="p-6 bg-white rounded shadow-lg">
                <h2 className='text-lg font-bold mb-4'>Add Record</h2>
                <div className='flex'>
                    <div className='flex-1'>
                        <Tabs defaultValue="Expense" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="expense">Expense</TabsTrigger>
                                <TabsTrigger value="income">Income</TabsTrigger>
                            </TabsList>
                            <TabsContent value="expense">
                                <Card>
                                <CardHeader>
                                    <CardTitle>Expense</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 flex flex-col gap-5">
                                    <div className="space-y-1">
                                        <Input 
                                            type="number" 
                                            placeholder="Amount" 
                                            defaultValue="000.00" 
                                            className="border"
                                            value={amount}
                                            onChange={(event) => {
                                                setAmount(event.target.value)
                                            }}
                                            />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="message">Category</Label>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Find or choose category"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <AddCategory />
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='flex-1'>
                                            <Label htmlFor="time">Date</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-fit justify-start text-left font-normal",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                    >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className='flex-1'>
                                            <Label htmlFor="time">Time</Label>
                                            <Input type="time" />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button onClick={createAccount} className="w-full bg-[#0066fe]">Add Record</Button>
                                </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="income">
                                <Card>
                                <CardHeader>
                                    <CardTitle>Income</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 flex flex-col gap-5">
                                    <div className="space-y-1">
                                        <Input type="number" placeholder="Amount" defaultValue="000.00" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="message">Category</Label>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Choose"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="light">Light</SelectItem>
                                                <SelectItem value="dark">Dark</SelectItem>
                                                <SelectItem value="system">System</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-[#0066fe]" onClick={createAccount}>Add Record</Button>
                                </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className='flex-1 flex flex-col h-full'>
                        <div className='flex-none mb-6'>
                            <Label htmlFor="message">Payee</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Write here" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col flex-1 w-full gap-1.5">
                            <Label htmlFor="message">Notes</Label>
                            <Textarea placeholder="Write here." id="message" />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddRecord
