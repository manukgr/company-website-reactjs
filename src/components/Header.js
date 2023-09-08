function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>Super Soft Technologies</h1>
    <h3 className="text-white">One stop solution for your software products with AI power 
        Free one month demo
    </h3>
      {/* // <div className="row">
      //   <button className="btn" style={{ cursor: "pointer" }}>
      //     Sign Up
      //   </button>

      //   <button className="btn" style={{ cursor: "pointer" }}>
      //     Log in
      //   </button>
      // </div> */}

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
