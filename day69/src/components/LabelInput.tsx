import React from 'react'

interface LabelInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LabelInput({
  label,
  type= "text",
  placeholder,
  value,
  onChange
} : LabelInputProps) {
  return (
    <div className='py-2 flex flex-col space-y-1'>
      <label>{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='border border-gray-400 rounded' />
    </div>
  )
}
