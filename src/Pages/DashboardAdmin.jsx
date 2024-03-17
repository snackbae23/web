import React from 'react'
import AdminNav from '../Components/AdminNav'
import AdminLeftBar from '../Components/AdminLeftBar';

function DashboardAdmin() {
    return (
        <div>
            {/* header */}
            <div> 
                <AdminNav />
            </div>

            <div className='w-full'>
                {/* left bar */}
                <div className='w-[20%]'>
                    <AdminLeftBar />
                </div>

                {/*  */}
                <div className='w-[80%]'>

                </div>
            </div>

        </div>
    )
}

export default DashboardAdmin