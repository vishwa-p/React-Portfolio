import React from "react";
import axios from "axios";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socialMedia:[]
    };
  }
  componentDidMount() {
    axios({
      url: "https://laravel-portfolio123.herokuapp.com/api/socialmedia",
      method: "GET",
    }).then((res) => {     
      this.setState({
        socialMedia:res.data
      });
    });
  }
  render() {
    const { socialMedia} = this.state;
    return (
      <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont logos">
            {socialMedia.map((media) => (
            <a href={media.url}> <p className="socialMedia" dangerouslySetInnerHTML={{ __html: media.logo }}></p></a>
            ))}            
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h2 class="heading heading-sm text-lt">Vishwa Patel</h2>
            <p class="main-footer__short-desc">
              A Frontend focused Web Developer building
               Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </div>
        <div class="main-footer__lower">
          © Copyright
          <script>
            document.write(new Date().getFullYear());
          </script>
          2022. Made by
          <a href="" target="_blank" rel="noreferrer">Vishwa Patel</a>
        </div>
      </div>
    </footer>
      // <footer id="footer">
      //   <div className="copyright">&copy; Vishwa Patel, 2022.</div>             
      //   {socialMedia.map((media) => (
      //     <div className="smlogo" key={media.id}>              
      //      <a href={media.url}> <p className="socialMedia" dangerouslySetInnerHTML={{ __html: media.logo }}></p></a>
      //     </div>
      //   ))}
      // </footer>
    );
  }
}
export default Footer;
