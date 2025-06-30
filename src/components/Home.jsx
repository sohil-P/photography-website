function Home() {
  return (
    <section className="home-section section-padding" id="home">
      <div className="home-container">
        <div className="home-content">
          <div className="main-content">
            <div className="content-imgs">
              <img src="./Images/home-img1.png" alt="" className="img1" />
              <img src="./Images/home-img2.png" alt="" className="img2" />
            </div>
            <div className="content-text">
              <h3>Welcome to Our Photography World!</h3>
              <h1>AI Digital Studio</h1>
              <p>
                We blend artificial intelligence with artistic vision to capture
                unforgettable moments and create stunning visuals. Whether it’s
                portraits, events, or branding, we turn your story into visual
                magic.
              </p>
              <button type="button" className="homeBtn">
                <a href="#">Visit Portfolio</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
