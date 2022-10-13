import React from "react";
import axios from "axios";
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  }
  componentDidMount() {
    axios({
      url: "https://laravel-portfolio123.herokuapp.com/api/projects",
      method: "GET",
    }).then((res) => {
      console.log(res.data);
      this.setState({
        project: res.data,
      });
    });
  }
  render() {
    const { project } = this.state;
    return (      
      <section id="projects" class="projects sec-pad">
        <div class="main-container">
          <h2 class="heading heading-sec heading-sec__mb-bg">
            <span class="heading-sec__main">Recent Projects</span>
            <span class="heading-sec__sub">
             Here you will find list of my recents projects on which I worked on and still updating to add new features.
            </span>
          </h2>
          <div class="projects__content">
            {project.map((project) => (
              <div class="projects__row">              
                <div class="projects__row-img-cont">
                  <img
                    src={project.photo}
                    alt=""
                    class="projects__row-img"
                    loading="lazy"
                  />
                </div>
                <div class="projects__row-content">
                  <h3 class="projects__row-content-title">{project.title}</h3>
                  <p
                    class="projects__row-content-desc"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                  <p
                    class="projects__row-content-desc"
                    dangerouslySetInnerHTML={{ __html: project.technologies }}
                  ></p>
                  <a
                    class="btn btn--med btn--theme dynamicBgClr srccodebtn srccode"
                    href={project.gitUrl}
                    target="_blank"
                  >
                    Source Code
                  </a>
                  <a
                    class="btn btn--med btn--theme dynamicBgClr"
                    href={project.liveUrl}
                    target="_blank"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          
          
          </div>
        </div>
      </section>
    );
  }
}
export default Projects;
