import React from 'react'
import { useSelector } from 'react-redux'
import FileUploader from './components/FileUploader'
import Logout from './components/Logout'
import BubbleChart from './components/BubbleChart'

export default function Dashboard() {
    const auth = useSelector((state) => state.auth.authenticated)
    if(auth){
        return (
            <div>
                <Logout />
                <h1>Intentful</h1>
                <h3>By the order of Techy Blinders</h3>
                <FileUploader />
                <BubbleChart />
            </div>
        )
    }
    else{
        return(
        <div>
            <h3>403 - Not Authenticated</h3>
        </div>)
    }
}