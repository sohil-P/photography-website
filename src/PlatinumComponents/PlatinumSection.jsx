import { useState } from "react";

function PlatinumSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    TPshoot: true,
    TVshoot: true,
    Cphoto: true,
    Cvideo: true,
    Dshoot: true,
    CVedit: true,
    Creel: true,
    AIcard: true,
    PWshoot: true,
  });

  const [days, setDays] = useState(1);

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const isFormDisabled = !Object.values(checkedItems).some(Boolean);

  const calculatePrice = () => {
    let total = 0;
    if (checkedItems.TPshoot) total += 5000 * days;
    if (checkedItems.TVshoot) total += 5000 * days;
    if (checkedItems.Cphoto) total += 7000 * days;
    if (checkedItems.Cvideo) total += 8000 * days;
    if (checkedItems.Dshoot) total += 3500 * days;
    if (checkedItems.CVedit) total += 8000 * days;
    if (checkedItems.Creel) total += 2500 * days;
    if (checkedItems.AIcard) total += 1000 * days;
    if (checkedItems.PWshoot) total += 10000 * days;
    return total;
  };

  const totalPrice = calculatePrice();

  return (
    <section className="platinum-item" id="platinum-item">
      <div className="platinum-container">
        <div className="detail-form">
          <div className="card">
            <h1 className="platinum-title">Platinum Package</h1>
            <h3>Important Note*</h3>
            <p className="info-text-msg">
              This is not an online payment gateway. The form below is only for
              service inquiry and booking interest. Once you submit your
              details, our team will contact you shortly to discuss your
              requirements, confirm the final pricing, and proceed with offline
              payment and booking.
            </p>
            <hr />

            <div className="list-box">
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox1"
                  id="checkBox1"
                  checked={checkedItems.TPshoot}
                  onChange={() => handleCheckboxChange("TPshoot")}
                />
                <h4>Traditional Photoshoot</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox2"
                  id="checkBox2"
                  checked={checkedItems.TVshoot}
                  onChange={() => handleCheckboxChange("TVshoot")}
                />
                <h4>Traditional Videoshoot</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox3"
                  id="checkBox3"
                  checked={checkedItems.Cphoto}
                  onChange={() => handleCheckboxChange("Cphoto")}
                />
                <h4>Candid Photoshoot</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox4"
                  id="checkBox4"
                  checked={checkedItems.Cvideo}
                  onChange={() => handleCheckboxChange("Cvideo")}
                />
                <h4>Cinematic Videoshoot</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox5"
                  id="checkBox5"
                  checked={checkedItems.Dshoot}
                  onChange={() => handleCheckboxChange("Dshoot")}
                />
                <h4>Drone Shoot</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox6"
                  id="checkBox6"
                  checked={checkedItems.CVedit}
                  onChange={() => handleCheckboxChange("CVedit")}
                />
                <h4>Cinematic Video Editing (High-Level Color Grading)</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox7"
                  id="checkBox7"
                  checked={checkedItems.Creel}
                  onChange={() => handleCheckboxChange("Creel")}
                />
                <h4>Cinametic Reels</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox8"
                  id="checkBox8"
                  checked={checkedItems.AIcard}
                  onChange={() => handleCheckboxChange("AIcard")}
                />
                <h4>Advance Invitation Card</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox9"
                  id="checkBox9"
                  checked={checkedItems.PWshoot}
                  onChange={() => handleCheckboxChange("PWshoot")}
                />
                <h4>Pre-Wedding Shoot</h4>
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
                    <li>Traditional Photoshoot - ₹5,000 (1 Day)</li>
                    <li>Traditional Videoshoot - ₹5,000 (1 Day)</li>
                    <li>Candid Photoshoot - ₹7,000 (1 Day)</li>
                    <li>Cinematic Videoshoot - ₹8,000 (1 Day)</li>
                    <li>Drone Shoot - ₹3,500 (1 Day)</li>
                    <li>
                      Cinematic Video Editing(High-Level Color Grading) - ₹8,000
                      (1 Day)
                    </li>
                    <li>Cinametic Reels - ₹2,500 (1 Day)</li>
                    <li>Advance Invitation Card - ₹1,000 (1 Day)</li>
                    <li>Pre-Wedding Shoot - ₹10,000 (1 Day)</li>
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
                  type="button"
                  name="PayBtn"
                  id="PayBtn"
                  className="PayBtn"
                >
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatinumSection;
