import React from "react";
class Contact extends React.Component {
  render() {
    return (
      <section id="contact" class="contact sec-pad dynamicBg">
        <div class="main-container">
          <h2 class="heading heading-sec heading-sec__mb-med">
            <span class="heading-sec__main heading-sec__main--lt">Contact</span>
            <span class="heading-sec__sub heading-sec__sub--lt">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </span>
          </h2>
          <div class="contact__form-container">
            <form action="" class="contact__form" method="post">
              <input type="hidden" name="form-name" value="form 1" />
              <div class="contact__form-field">
                <label class="contact__form-label" for="name">
                  Name
                </label>
                <input
                  required
                  placeholder="Enter your name"
                  type="text"
                  class="contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div class="contact__form-field">
                <label class="contact__form-label" for="name">
                  Email
                </label>
                <input
                  required
                  placeholder="Enter your email"
                  type="email"
                  class="contact__form-input"
                  name="email"
                  id="email"
                />
              </div>
              <div class="contact__form-field">
                <label class="contact__form-label" for="name">
                  Messsage
                </label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  class="contact__form-input"
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn--theme contact__btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
