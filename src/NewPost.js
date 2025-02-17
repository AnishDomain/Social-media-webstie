

const NewPost = ({handleSubmit,postTitle,setPostTitle,postBody,setPostBody,validation,setValidation,handleValidation}) => {
  return (
     <div className="NewPost">
      <h3>ADD POST:</h3>
      <form className='postForm' onSubmit={handleSubmit} >
        <label htmlFor="postTitle">Title:</label> 
        <input 
         id= "title"
         type='text'
         required
         placeholder='Enter Title'
         value={postTitle}
         onChange = {(e) => {
          setPostTitle(e.target.value);
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
        value={postBody}
        onChange = {(e) => {
          setPostBody(e.target.value);
          handleValidation(e);
          
         }}
       
       />
        <p>{validation.validationMessage}</p>
       <button  type="submit">Submit</button>
     </form>
     
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

export default NewPost