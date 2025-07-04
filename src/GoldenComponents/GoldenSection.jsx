import { useState } from "react";

function GoldenSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    dslr: true,
    Tphoto: true,
    drone: true,
    Avideo: true,
    colorG: true,
    Nreel: true,
    Icard: true,
  });

  const [days, setDays] = useState(1);

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const isFormDisabled = !Object.values(checkedItems).some(Boolean);

  const calculatePrice = () => {
    let total = 0;
    if (checkedItems.dslr) total += 7000 * days;
    if (checkedItems.Tphoto) total += 5000 * days;
    if (checkedItems.drone) total += 3500 * days;
    if (checkedItems.Avideo) total += 5000 * days;
    if (checkedItems.colorG) total += 3000 * days;
    if (checkedItems.Nreel) total += 1000 * days;
    if (checkedItems.Icard) total += 500 * days;
    return total;
  };

  const totalPrice = calculatePrice();

  return (
    <section className="golden-item" id="golden-item">
      <div className="golden-container">
        <div className="card">
          <h1 className="golden-title">Golden Package</h1>

          <div className="list-box">
            <div className="pairs">
              <input
                type="checkbox"
                name="checkbox1"
                id="checkBox1"
                checked={checkedItems.dslr}
                onChange={() => handleCheckboxChange("dslr")}
              />
              <h4>DSLR Videoshoot</h4>
            </div>
            <div className="pairs">
              <input
                type="checkbox"
                name="checkbox2"
                id="checkBox2"
                checked={checkedItems.Tphoto}
                onChange={() => handleCheckboxChange("Tphoto")}
              />
              <h4>Taditional Photoshoot</h4>
            </div>
            <div className="pairs">
              <input
                type="checkbox"
                name="checkbox3"
                id="checkBox3"
                checked={checkedItems.drone}
                onChange={() => handleCheckboxChange("drone")}
              />
              <h4>Drone Shoot</h4>
            </div>
            <div className="pairs">
              <input
                type="checkbox"
                name="checkbox4"
                id="checkBox4"
                checked={checkedItems.Avideo}
                onChange={() => handleCheckboxChange("Avideo")}
              />
              <h4>Advance Video Editing With Special Effects</h4>
            </div>
            <div className="pairs">
              <input
                type="checkbox"
                name="checkbox5"
                id="checkBox5"
                checked={checkedItems.colorG}
                onChange={() => handleCheckboxChange("colorG")}
              />
              <h4>Color Grading</h4>
            </div>
            <div className="pairs">
              <input
                type="checkbox"
                name="checkbox6"
                id="checkBox6"
                checked={checkedItems.Nreel}
                onChange={() => handleCheckboxChange("Nreel")}
              />
              <h4>Normal Reels</h4>
            </div>
            <div className="pairs">
              <input
                type="checkbox"
                name="checkbox7"
                id="checkBox7"
                checked={checkedItems.Icard}
                onChange={() => handleCheckboxChange("Icard")}
              />
              <h4>Invitation Card</h4>
            </div>
          </div>

          <div className="form-box">
            <div className="custom-dropdown">
              <div
                className="dropdown-button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                View Price Information ▼
              </div>
              {dropdownOpen && (
                <ul className="dropdown-list">
                  <li>DSLR Videoshoot - ₹7,000 (1 Day)</li>
                  <li>Taditional Photoshoot - ₹5,000 (1 Day)</li>
                  <li>Drone Shoot - ₹3,500 (1 Day)</li>
                  <li>
                    Advance Video Editing With Special Effects - ₹5,000 (1 Day)
                  </li>
                  <li>Color Grading - ₹3,000 (1 Day)</li>
                  <li>Normal Reels - ₹1,000 (1 Day)</li>
                  <li>Invitation Card - ₹500 (1 Day)</li>
                </ul>
              )}
            </div>
            <form action="#">
              <label htmlFor="days">Select Days</label>
              <select
                name="days"
                id="days"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                disabled={isFormDisabled}
              >
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>

              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                className="inputBox"
                value={`₹${totalPrice.toLocaleString()}`}
                disabled
              />

              <input
                type="text"
                name="name"
                id="name"
                className="inputBox"
                placeholder="Name"
                required
                disabled={isFormDisabled}
              />
              <input
                type="number"
                name="phone"
                id="phone"
                className="inputBox"
                placeholder="Phone"
                required
                disabled={isFormDisabled}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="inputBox"
                placeholder="Email"
                required
                disabled={isFormDisabled}
              />
              <input
                type="address"
                name="address"
                id="address"
                className="inputBox"
                placeholder="Address"
                required
                disabled={isFormDisabled}
              />

              <button
                type="submit"
                name="PayBtn"
                id="PayBtn"
                className="PayBtn"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoldenSection;
