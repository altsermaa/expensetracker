"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from "@/components/ui/dialog"
  import { Button } from './ui/button'
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
  import { Calendar } from "@/components/ui/calendar"
  import * as React from "react"


function AddRecord() {
    const [date, setDate] = React.useState(new Date())

  return (
    <div>
       <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full h-fit">
                    + Add
                </Button>
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
                                    <div className='flex gap-3'>
                                        <div className='flex-1'>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Choose"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="calendar">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        className="rounded-md border"
                                                    />
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        </div>
                                        <div className='flex-1'>
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Choose"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="light">Light</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Add Record</Button>
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
                                    <Button>Add Record</Button>
                                </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className='flex-1'>
                        <div className='mb-6'>
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
                        <div className="grid w-full gap-1.5">
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
