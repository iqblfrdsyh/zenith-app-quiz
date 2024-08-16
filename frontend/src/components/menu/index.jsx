import React from 'react'

const MenuBar = () => {
    return (
        <div className="fixed left-0 right-0 bottom-0">
            <div className='h-14 bg-white border-t shadow-md m-4 rounded-full flex px-5 items-center justify-between'>
                <img src="images/menyala/home.png" className='w-8 relative bottom-0.5' />
                <img src="images/category.png" className='w-11 relative left-2' />
                <img src="images/ai.png" className='w-14 relative -top-4 left-2' />
                <img src="images/lead.png" className='w-[4rem] relative bottom-0.5' />
                <img src="images/user.png" className='w-6 relative bottom-0.5' />
            </div>
        </div>
    )
}

export default MenuBar