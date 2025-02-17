import React from 'react'
import {Link} from 'react-router-dom';

const Headernav = ({search, setSearch}) => {





  return (
    <header className='mainheader'>
        <h2 className ="logo">Perso</h2>
        <nav>
            <ul className="navigation">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="Post" >Post</Link></li>
                <li><Link to="Aboutme" >About </Link></li>
                <li><Link to="Contact" >Contact</Link></li>
            </ul>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}> 
              <input
                 id ="search"
                 type='text'
                 placeholder='Search Posts'
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}/>
            </form>  
            
          </nav>
        

    </header>
  )
}

export default Headernav







