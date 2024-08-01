import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import JavaHome from '../../public/categoryIcon/JavaHome';
import AddIcons from './AddIcons';
import { SelectItem } from './ui/select';

function AddCategory() {
    const [openDialog, setOpenDialog] = useState(false);
    const [title, setTitle] = useState(""); 

    const handleOpenDialog = () => {
      setOpenDialog(true);
    };

    // const createAccount = async () => {
    //     const newAccount = {
    //         title,
    //         amount,
    //     };

    //     const response = await axios.post("http://localhost:4000/accounts", newAccount);
    //     setAccounts([...accounts, response.data])
    // }

  const titles = [
    { icon: <JavaHome />, title: "Add Category 1" },
    { icon: <JavaHome />, title: "Add Category 2" },
    { icon: <JavaHome />, title: "Add Category 3" },
    { icon: <JavaHome />, title: "Add Category 4" },
    { icon: <JavaHome />, title: "Add Category 5" },
    { icon: <JavaHome />, title: "Add Category 6" },
    { icon: <JavaHome />, title: "Add Category 7" }
  ];

  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-2 cursor-pointer' onClick={handleOpenDialog}>
        <JavaHome />
        <span>New dialog</span>
      </div>
      
      <div className='flex flex-col'>
        {titles.map((title, index) => (
          <SelectItem 
            key={index}
            className='flex items-center gap-2 cursor-pointer'
            value={title.title}
            onClick={() => setTitle(title.title)}
            >
              {title.icon}
              <span>{title.title}</span>
          </SelectItem>
        ))}
      </div>

      {openDialog && (
        <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Category</DialogTitle>
              <AddIcons />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default AddCategory;
