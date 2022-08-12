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
      url: "http://laravel-portfolio123.herokuapp.com/api/socialmedia",
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
      <footer id="footer">
        <div className="copyright">&copy; Vishwa Patel, 2022.</div>             
        {socialMedia.map((media) => (
          <div className="smlogo" key={media.id}>              
           <a href={media.url}> <p className="socialMedia" dangerouslySetInnerHTML={{ __html: media.logo }}></p></a>
          </div>
        ))}
      </footer>
    );
  }
}
export default Footer;
