
import Headernav from './Headernav'
import Home from './Home';
import Footer from './Footer';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Post from './Post';
import { useState,useEffect } from 'react';
import PostPage from './PostPage';
import NewPost from './NewPost';
import { format } from 'date-fns';
import Missing from './Missing';
import { Routes, Route } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import EditPage from './EditPage';
import api from './apiposts';









function App() {
  const[posts,setPosts] = useState([])
  
  const[search,setSearch] = useState('')
  const[searchResults,setSearchResults] = useState([])
  const[postTitle,setPostTitle] = useState('')
  const[postBody,setPostBody] = useState('')
  const[sendEmail,setSendEmail] = useState({
     name:'',
     email:'',
     message:''
  });
  const[editTitle,setEditTitle] = useState('')
  const[editBody,setEditBody] = useState('');
  const navigate = useNavigate();
  const [validation,setValidation] = useState({ validationMessage: '' })

  useEffect(() => {
     const fetchPosts = async () => {
       try{
        const response = await api.get('/posts');
        setPosts(response.data);
       }
      catch(err) {
        if(err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
     }
    fetchPosts();
  }, [])


  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      post.body.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);
  
  const handleSubmit = async (e) => {
       e.preventDefault();
       const id = posts.length ? posts[posts.length -1].id + 1 : 1;
       const datetime = format(new Date(), 'MMMM dd, yyyy pp');
       const newPost = {id, title: postTitle, datetime, body: postBody};
       try{
        const response = await api.post('/posts', newPost)
        const allPosts = [...posts, response.data];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/');
       }
       catch(err) {
          console.log(`Error: ${err.message}`);
        
      }
      
   }

   const handleValidation = (e) =>{
    const specialChars = /[!@#$%&()<?{}|<>]/g;
    const validationMessage = specialChars.test(e.target.value)
    ? 'Special Characters are not allowed' :'';
   

    setValidation({validationMessage});
  }

   const shareEmail = (e) => {
    e.preventDefault();  // Prevents the form from reloading the page
    
    emailjs.send('service_6fnrq6p', 'template_uespifc', sendEmail, '_57Gdr1-82hCBuGCT')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

      setSendEmail({
        name:'',
        email:'',
        message:''
      });
  };

   
  const handleChange = (e) => {
    setSendEmail({ ...sendEmail, [e.target.name]: e.target.value });


  };



  const handleDelete = async (id) => {
    try{
      await api.delete(`posts/${id}`)
      const postList = posts.filter(post => post.id !== id);
      setPosts(postList);
      navigate('/');
    }
    catch(err) {
      console.log(`Error: ${err.message}`);
    
  }
    
  } 
  
  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const editedPost = {id, title: editTitle, datetime, body: editBody};
    try{
      const response = await api.put(`/posts/${id}`,editedPost);
      setPosts(posts.map(post => post.id === id ? {... response.data} : post));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    }
    catch(err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else{
        console.log(`Error: ${err.message}`);
      }
    }
}
  



  return (
    <div className='body'>
       <Headernav
        search = {search} 
        setSearch = {setSearch}
       />
       <Routes>
         <Route path="/" element ={<Home
          posts ={searchResults}
         />}/>
         <Route path= "Post">
           <Route index element ={<NewPost
             handleSubmit={handleSubmit}
             postTitle={postTitle}
             setPostTitle={setPostTitle}
             postBody={postBody}
             setPostBody={setPostBody}
             handleValidation={handleValidation}
             validation = {validation}
             setValidation = {setValidation}
            />}/>
           <Route path= ':id' element={<PostPage
            posts ={posts}
            handleDelete={handleDelete}/>} />
          </Route> 
          <Route path="/edit/:id" element={<EditPage
                handleEdit={handleEdit}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
                editBody={editBody}
                setEditBody={setEditBody}
                handleValidation={handleValidation}
                validation = {validation}
                setValidation = {setValidation}
                posts ={posts}
             />}/>
          <Route path="Aboutme" element = {<Aboutme/>}/>
          <Route path="Contact" element = {<Contact
            sendEmail={sendEmail}
            setSendEmail={setSendEmail}
            handleChange={handleChange}
            shareEmail={shareEmail}
            handleValidation={handleValidation}
            validation = {validation}
            setValidation = {setValidation}
          />}/>
         
          <Route path="*" element = {<Missing/>}/> 
        </Routes>
        
       <Footer/>
    </div>
  );
}

export default App;



