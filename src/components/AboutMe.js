import React from "react";
import axios from "axios";
import myTxtFile from '../components/VishwaPatel-CV.docx';
class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      socialMedia: [],
    };
  }
  componentDidMount() {
    axios({
      url: "https://laravel-portfolio123.herokuapp.com/api/contents",
      method: "GET",
    }).then((res) => {           
      this.setState({        
        content: res.data[0].content
      });
    });
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
    const {content,socialMedia}=this.state;
    return (
      <section class="home-hero">
        <div class="home-hero__content">
          <h1 class="heading-primary">Hey, I'm Vishwa Patel</h1>
          <div class="home-hero__info">
            <p class="text-primary" dangerouslySetInnerHTML={{ __html: content }}>            
            </p>
          </div>
          <div class="home-hero__cta">
            <a href={myTxtFile} class="btn btn--bg">
              Resume
            </a>
          </div>
        </div>
        {socialMedia.map((media) => (
          <a href={media.url}> <p className="socialMedia" dangerouslySetInnerHTML={{ __html: media.logo }}></p></a>
          ))}            
        <div class="home-hero__socials">
        {socialMedia.map((media) => (
          <div class="home-hero__social">
            <a
              href={media.url}
              class="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
            <img
                src={media.logo}
                alt=""
                class="home-hero__social-icon"
                
              />            
            </a>
          </div>
          ))}  
        
        </div>
        <div class="home-hero__mouse-scroll-cont">
          <div class="mouse"></div>
        </div>
      </section>
    );
  }
}
export default AboutMe;
