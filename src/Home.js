
import Feed from'./Feed';

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p  style={{ marginTop: "2rem" }}>No Posts to display</p>
      )}

      {/* Bubble Animation Wrapper */}
      <div className="wrapper">
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div> {/* Added more bubbles */}
        <div><span className="dot"></span></div> {/* Add more if needed */}
        <div><span className='dot'></span></div>
        <div><span className='dot'></span></div>
      </div>
    </main>
  );
};


export default Home