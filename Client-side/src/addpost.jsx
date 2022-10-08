import { useState } from 'react';
import React from 'react';

import axios from 'axios';  
import {useNavigate} from 'react-router-dom';
const Post = () => {
    const[file_path, setFilePath] = useState("");
    const [form, setForm] = useState({});
    const navigate = useNavigate()
    function handleClick(event) {
        event.preventDefault()
        event.target.nextElementSibling.click();
    }
    function handleChange(event) {
        event.preventDefault();
        const filePath = event.target.files[0];
        setFilePath(filePath)
        setForm({...form, image: filePath})
    }
    function handleSubmit(event){
        
        event.preventDefault();
        let formData = new FormData();
        formData.append('image', form.image);
        formData.append('name', form.name);
        formData.append('location', form.location);
        formData.append('description', form.description);
        formData.append('date', new Date());
        console.log(formData);
        
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
            axios.post("https://insta-end.herokuapp.com/newpost", formData, config)
                .then (res => console.log(res));
                 navigate("/post")
        
    }
    return (
        <>
        <h1>Post a Picture!</h1>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='file-container'>
                    <input type="text" value={file_path.name}></input>
                    <button id="file" onClick={handleClick}>Browse</button>
                    <input type="file" name="file-upload" id="hide" onChange={handleChange}></input>
                </div>
                <div className='auth-container'>
                    <input type="text" name="name" placeholder='name' onChange={(e) => setForm({...form, name: e.target.value})}></input>
                    <input type="text" name="location" placeholder='Location' onChange={(e) => setForm({...form, location: e.target.value})}></input>
                </div>
                <div>
                    <input type="text" name="description" placeholder='Description' onChange={(e) => setForm({...form, description: e.target.value})}></input>
                    <button type='Submit'>Post</button>
                </div>
            </form>
        </div>
        </>
    );
}
export default Post;



