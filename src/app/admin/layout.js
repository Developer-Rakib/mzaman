import React from 'react'
import AdminHeader from './AdminHeader'

export default function layout({ children }) {
    return (
        <div>
            <AdminHeader></AdminHeader>
            {children}
            <footer></footer>
        </div>
    )
}
