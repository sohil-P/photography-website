function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      address: form.address.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx25YF7-WQ_ng5fyvig-p-sLXAfZS3cAKN0e5Qqe_VDZuh7WuIMaLz1zCjYC97Zx7K1/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.result === "Success") {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <div
            className="info-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="icon-circle">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h4>Address</h4>
              <p>
                At.Post: Bhalusna, Ta: Satlasana, Dis: Mehsana, Gujarat - 384330
              </p>
            </div>
          </div>
          <hr />
          <div
            className="info-block"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="icon-circle">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <h4>Call Us</h4>
              <p>+91 78638 48293 - Komit</p>
              <p>+91 76989 17734 - Maulik</p>
            </div>
          </div>
          <hr />
          <div
            className="info-block"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="icon-circle">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h4>Email Us</h4>
              <p>aidigitalstudio360@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
            <textarea
              placeholder="Message"
              name="message"
              rows="5"
              required
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
