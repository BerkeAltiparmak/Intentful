import React from 'react'
import { useSelector } from 'react-redux'
import LogOut from './components/Logout'
import FileSystem from './components/FileSystem'


export default function Dashboard() {
    const auth = useSelector((state) => state.auth.authenticated)
    if (auth) {
        return (
            <div>
                <LogOut />
                <h1>Intentful</h1>
                <h3>By order of the Techy Blinders</h3>
                <FileSystem />
            </div>
        )
    }
    else {
        return (
            <div>
                <h3>403 - Not Authenticated</h3>
            </div>)
    }
}
