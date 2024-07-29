import React, { useState } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import JavaHome from '../../public/categoryIcon/JavaHome';
import JavaHouseline from '../../public/categoryIcon/JavaHouseline';
import JavaExcel from '../../public/categoryIcon/JavaExcel';
import JavaIdentify from '../../public/categoryIcon/JavaIdentify';
import JavaImage from '../../public/categoryIcon/JavaImage';
import JavaLadder from '../../public/categoryIcon/JavaLadder';
import JavaMagnify from '../../public/categoryIcon/JavaMagnify';
import JavaNote from '../../public/categoryIcon/JavaNote';
import JavaSquare from '../../public/categoryIcon/JavaSquare';
import JavaBlue from '../../public/categoryColor/JavaBlue';
import JavaGreen from '../../public/categoryColor/JavaGreen';
import JavaOrange from '../../public/categoryColor/JavaOrange';
import JavaRed from '../../public/categoryColor/JavaRed';
import JavaYellow from '../../public/categoryColor/JavaYellow';
import { Button } from "@/components/ui/button"

function AddIcons() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedName, setSelectedName] = useState(null);

  const icons = [
    { icon: <JavaHome />, value: 'home' },
    { icon: <JavaHouseline />, value: 'houseline' },
    { icon: <JavaExcel />, value: 'excel' },
    { icon: <JavaIdentify />, value: 'identify' },
    { icon: <JavaImage />, value: 'image' },
    { icon: <JavaLadder />, value: 'ladder' },
    { icon: <JavaMagnify />, value: 'magnify' },
    { icon: <JavaNote />, value: 'note' },
    { icon: <JavaSquare />, value: 'square' },
  ];

  const names = ['Rent', 'Food', 'House', 'Drinks', 'blaaaa']

  const handleSubmit = () => {
    alert(`Selected Icon: ${selectedIcon}, Selected Name: ${selectedName}`);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex gap-3'>
        <Select onValueChange={setSelectedIcon} placeholder="Select Icon">
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <div className='grid grid-cols-5 border-b-2 gap-2'>
              {icons.map((icon) => (
                <SelectItem key={icon.value} value={icon.value} >
                  {icon.icon}
                </SelectItem>
              ))}
            </div>
            <div className='flex gap-5 justify-start'>
              <JavaBlue />
              <JavaGreen />
              <JavaOrange />
              <JavaRed />
              <JavaYellow />
            </div>
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedName} placeholder="Select Name">
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Select Name" />
          </SelectTrigger>
          <SelectContent>
            <div className='flex flex-col'>
              {names.map((name, index) => (
                <SelectItem key={index} value={name} >
                  {name}
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Button variant="outline" onClick={handleSubmit} classname="w-full bg-lime-600">Add</Button>
      </div>
      

      </div>
  );
}

export default AddIcons;
