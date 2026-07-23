import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'


function DeletePost() {
    const navigate = useNavigate()
    const {id} = useParams();
    
    const deleteUser = async () => {
        const response = await fetch(`http://127.0.0.1:4567/posts/${id}`, {
            method: 'DELETE'
        })
    }
    
    useEffect(() => {
        deleteUser()
        navigate("/admin-home")
    })
    
    return (<>
        <div>deletando elemento</div>
    </>)
}

export default DeletePost;