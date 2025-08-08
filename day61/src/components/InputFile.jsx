import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function InputFile() {
  const [file,setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log('버튼 클릭');
    await axios.post('/api/upload',{
      filename: file.name,
      filetype: file.type
    });
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type='file'
               accept='img/*'
               onChange={e => setFile(e.target.files[0])}/>
        <button type='submit'
                className='bg-blue-200 rounded'>업로드</button>
      </form>
    </div>
  )
}
