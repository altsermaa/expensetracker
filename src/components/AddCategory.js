import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import JavaHome from '../../public/categoryIcon/JavaHome';
import AddIcons from './AddIcons';

function AddCategory() {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
      setOpenDialog(true);
    };

  const categories = [
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
        {categories.map((category, index) => (
          <div
            key={index}
            className='flex items-center gap-2 cursor-pointer'
          >
            {category.icon}
            <span>{category.title}</span>
          </div>
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
