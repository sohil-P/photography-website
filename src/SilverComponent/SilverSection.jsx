import { useState } from "react";

function SilverSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    photo: true,
    video: true,
    edit: true,
    album: true,
  });

  const [days, setDays] = useState(1);

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const isFormDisabled = !Object.values(checkedItems).some(Boolean);

  const calculatePrice = () => {
    let total = 0;
    if (checkedItems.photo) total += 5000 * days;
    if (checkedItems.video) total += 5000 * days;
    if (checkedItems.edit) total += 2500 * days;
    if (checkedItems.album) total += 2500 * days;
    return total;
  };

  const totalPrice = calculatePrice();

  return (
    <section className="silver-item" id="silver-item">
      <div className="silver-container">
        <div className="detail-form">
          <div className="card">
            <h1 className="silver-title">Silver Package</h1>
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
                  checked={checkedItems.photo}
                  onChange={() => handleCheckboxChange("photo")}
                />
                <h4>Basic Photography</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox2"
                  id="checkBox2"
                  checked={checkedItems.video}
                  onChange={() => handleCheckboxChange("video")}
                />
                <h4>Basic Videography</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox3"
                  id="checkBox3"
                  checked={checkedItems.edit}
                  onChange={() => handleCheckboxChange("edit")}
                />
                <h4>Basic Video Editing</h4>
              </div>
              <div className="pairs">
                <input
                  type="checkbox"
                  name="checkbox4"
                  id="checkBox4"
                  checked={checkedItems.album}
                  onChange={() => handleCheckboxChange("album")}
                />
                <h4>Simple Color Correction With Album</h4>
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
                    <li>Basic Photography - ₹5,000 (1 Day)</li>
                    <li>Basic Videography - ₹5,000 (1 Day)</li>
                    <li>Basic Video Editing - ₹2,500 (1 Day)</li>
                    <li>Simple Color Correction With Album - ₹2,500 (1 Day)</li>
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
                  type="text"
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

export default SilverSection;
