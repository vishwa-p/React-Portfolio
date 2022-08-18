import React from "react";
import axios from "axios";
import myTxtFile from '../components/VishwaPatel-CV.docx';
class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
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
    
  }
  render() {
    const {content}=this.state;
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
        <div class="home-hero__socials">
          <div class="home-hero__social">
            <a
              href=""
              class="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="linkedin-dark.svg"
                alt=""
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a
              href=""
              class="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="twitter-dark.svg"
                alt=""
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a
              href=""
              class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
              rel="noreferrer"
              target="_blank"
            >
              <img src="yt-dark.svg" alt="" class="home-hero__social-icon" />
            </a>
          </div>
          <div class="home-hero__social">
            <a
              href=""
              class="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="github-dark.svg"
                alt=""
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a
              href=""
              class="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img src="book-dark.svg" alt="" class="home-hero__social-icon" />
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
