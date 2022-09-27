import React from "react";
import axios from "axios";
import myTxtFile from '../components/VishwaPatel-CV.docx';
import myTxtFile1 from '../components/Vishwa P CV.pdf';
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
            <a href={myTxtFile1} class="btn btn--bg">
              Resume
            </a>
          </div>
        </div>
       
      
        <div class="home-hero__mouse-scroll-cont">
          <div class="mouse"></div>
        </div>
      </section>
    );
  }
}
export default AboutMe;
