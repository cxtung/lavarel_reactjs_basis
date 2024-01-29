import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function FileUpload(props) {
    var addImage = props.addImage
    var [file, setFile] = useState(null)
    const handleChange = (e) => {
        setFile(e.target.files[0])
        console.log('chon file', e.target.files)
    }
    const handleUpload = async (e) => {
        console.log('Send', file)
        const data = new FormData();
        data.append('files', file)
        e.target.innerText = 'Uploading......'
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:1337/api/upload',
            data
        })
        e.target.innerText = 'Upload'
        console.log(response)
        var id = response.data[0].id
        var url = response.data[0].url
        addImage(id, url)
        console.log('id', id)
    }
    return (
        <div className='fileUpload'>
            <input type='file' onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}