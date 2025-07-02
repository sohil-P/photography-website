function SilverSection() {
  return (
    <section className="silver-item" id="silver-item">
      <div className="silver-container">
        <div className="card">
          <h1>Silver Package</h1>

          <div className="list-box">
            <div className="pairs">
              <input type="checkbox" name="checkbox1" id="checkBox1" checked />
              <h4>Basic Photography</h4>
              <p>Price: 5,000</p>
            </div>
            <div className="pairs">
              <input type="checkbox" name="checkbox2" id="checkBox2" checked />
              <h4>Basic Videography</h4>
              <p>Price: 5,000</p>
            </div>
            <div className="pairs">
              <input type="checkbox" name="checkbox3" id="checkBox3" checked />
              <h4>Basic Video Editing</h4>
              <p>Price: 2,500</p>
            </div>
            <div className="pairs">
              <input type="checkbox" name="checkbox4" id="checkBox4" checked />
              <h4>Simple color correction with Album</h4>
              <p>Price: 2,500</p>
            </div>
          </div>

          <div className="form-box">
            <form action="#">
              <label htmlFor="days">Select Days</label>
              <select name="days" id="days">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>

              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                className="inputBox"
                value={"15,000"}
                disabled
              />

              <input
                type="text"
                name="name"
                id="name"
                className="inputBox"
                placeholder="Name"
                required
              />
              <input
                type="number"
                name="phone"
                id="phone"
                className="inputBox"
                placeholder="Phone"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                className="inputBox"
                placeholder="Email"
                required
              />
              <input
                type="address"
                name="address"
                id="address"
                className="inputBox"
                placeholder="Address"
                required
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SilverSection;
