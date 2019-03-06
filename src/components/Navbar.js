import React from 'react'

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="text-white">
                Menu
                    <span className='badge badge-pill badge-light ml-2'>
                    Nombre usuario
                    </span>
                 </a>
            </nav>
        )

        
    }
}


export default Navbar