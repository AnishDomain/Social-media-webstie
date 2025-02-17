import youtube from './youtubeicon.jpg'
import facebook from'./fbicon.jpg'
import insta from'./instaicon.jpg'



const Contact = ({sendEmail,shareEmail,handleChange,validation,handleValidation}) => {
  return (
    <section className='contactinfo'>
      <div className='Contact'>
        <h1>Contact:</h1>
        <p>Get in touch with me via social media or send me an email.</p>
      </div>
      <section  className='socialmedialinks'>
        
         <a href='https://www.facebook.com/' className='fbicon'><img src={facebook}></img></a>
         <a href='https://www.instagram.com/'className='instaicon'><img src={insta}></img></a>
         <a href='https://www.youtube.com/'className='youtubeicon'><img src={youtube}></img></a>
      </section>
        <form className='emailform'  onSubmit={shareEmail}>
          <h3>Send me an email:</h3>
          <label>Name</label>
           <input type="text"
            name='name'
            required
            placeholder=''
            value={sendEmail.name}
            onChange = {(e) => {
              
              handleValidation(e);
              handleChange(e)
              
             }}
            />
            <p>{validation.validationMessage}</p>

          <label>Email</label>
          <input  type='text'
            name='email'
            required
            value={sendEmail.email}
            onChange = {(e) => {
              
              handleValidation(e);
              handleChange(e);
              
             }}
          />
            <p>{validation.validationMessage}</p>
          <label className='messagelabel'>Message</label>
          <input className='message' type='text'
            name='message'
            required
            value={sendEmail.message}
            onChange = {(e) => {
              
              handleValidation(e);
              handleChange(e);
              
             }}
          />

          <button type='submit'>Send email</button>
        </form>
        <div className="wrapper3">
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div>
        <div><span className="dot3"></span></div> {/* Added more bubbles */}
        <div><span className="dot3"></span></div> {/* Add more if needed */}
        <div><span className='dot3'></span></div>
        <div><span className='dot3'></span></div>
      </div>

      
    </section>
  )
}

export default Contact