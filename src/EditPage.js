
import {useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';




const EditPage = ({posts,handleEdit,editTitle,setEditTitle,editBody,setEditBody,validation,setValidation,handleValidation}) => {
   const {id} = useParams();  
   const post = posts.find(post => post.id.toString
    () === id );

    useEffect(() => {
      if (post) {
        setEditTitle(post.title);
        setEditBody(post.body);
      }
    }, [post, setEditTitle, setEditBody]); 

  
  return (

       <div className="NewPost">
        {editTitle &&
          <>
          <h3>ADD POST:</h3>
          <form className='postForm' onSubmit={(e) => e.preventDefault()} >
          <label htmlFor="postTitle">Title:</label> 
          <input 
           id= "title"
           type='text'
           required
           placeholder='Enter Title'
           value={editTitle}
           onChange = {(e) => {
            setEditTitle(e.target.value);
            handleValidation(e);
            
           }}
           />
           <p>{validation.validationMessage}</p>
         
         <label htmlFor="postBody">Post:</label> 
         <input 
          id= "post"
          type='text'
          required
          placeholder='Provide Post'
          value={editBody}
          onChange = {(e) => {
            setEditBody(e.target.value);
            handleValidation(e);
            
           }}
         
         />
          <p>{validation.validationMessage}</p>
         <button  type="submit" onClick={()=> handleEdit(post.id)} >Submit</button>
       </form>

          </>
        }
        {!post &&
          <>
           <h2>Post Not Found</h2>
             <p>
              <Link to='/'>check out the home page</Link>
             </p>
          </>

        }
       
       <div className="wrapper1">
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div>
          <div><span className="dot1"></span></div> {/* Added more bubbles */}
          <div><span className="dot1"></span></div> {/* Add more if needed */}
          <div><span className='dot1'></span></div>
          <div><span className='dot1'></span></div>
        </div>
  
    </div>
    )
  }
  
  export default EditPage