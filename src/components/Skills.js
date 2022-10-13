import React from "react";
import axios from "axios";
class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      experiences:[],
      qualifications: [],
    };
  }
  componentDidMount() {
    axios({
      url: "https://laravel-portfolio123.herokuapp.com/api/skills",
      method: "GET",
    }).then((res) => {
      this.setState({
        skills: res.data,
      });
    });
    axios({
      url: "https://laravel-portfolio123.herokuapp.com/api/experiences",
      method: "GET",
    }).then((res) => {
      this.setState({
        experiences: res.data,
      });
    });
    axios({
      url: "https://laravel-portfolio123.herokuapp.com/api/qualifications",
      method: "GET",
    }).then((res) => {
      console.log(res.data);
      this.setState({
        qualifications: res.data,
      });
    });
  }
  render() {
    const { skills, experiences,qualifications } = this.state;
    return (
      <section id="about" class="about sec-pad">
        <div class="main-container">
          <h2 class="heading heading-sec heading-sec__mb-med">
            <span class="heading-sec__main">About Me</span>
            <span class="heading-sec__sub">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </span>
          </h2>
          <div class="about__content">
            <div class="about__content-main">
              <h3 class="about__content-title">Qualifications</h3>
              <div class="about__content-details">
                <p class="about__content-details-para">
                  <strong>
                  {qualifications.map((qualification) => (
                    <div
                      class="skills__skill"
                      dangerouslySetInnerHTML={{ __html: qualification.details+"->"+qualification.credential +" ("+qualification.yearCompleted+")"}}
                    >                    
                    </div>
                  ))}
                  </strong>
                </p>
              </div>
              <h3 class="about__content-title">Experiences</h3>
              <div class="about__content-details">              
                <p class="about__content-details-para">
                  <strong>
                  {experiences.map((experience) => (
                   <div
                      class="skills__skill experi"
                      dangerouslySetInnerHTML={{ __html: experience.companyName+" ("+experience.position +")"+""+experience.responsibilities +experience.startDate+" to "+experience.endDate}}
                    >                    
                    </div>
                    </div>
                  ))}
                  </strong>
                </p>
              </div>
            </div>
            <div id="skill" class="about__content-skills">
              <h3 class="about__content-title">My Skills</h3>
              <div class="skills">
                {skills.map((skill) => (
                  <div
                    class="skills__skill"
                    dangerouslySetInnerHTML={{ __html: skill.fontawesomeHTML }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;
