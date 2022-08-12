import React from "react";
import axios from "axios";

class Mainbody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      title: null,
      description: null,
      gitUrl: null,
      technologies: null,
      photo: "",
      credential: null,
      details: null,
      yearCompleted: null,
      credential1: null,
      details1: null,
      yearCompleted1: null,
      position: null,
      responsibilities: null,
      startDate: null,
      endDate: null,
      companyName: null,
      fontawesomeHTML: null,
      detailsSkill: null,
      type: null,
    };
    this.state = {
      projects: [],
      skills: [],
      contents:[]
    };
  }
  componentDidMount() {
    axios({
      url: "http://laravel-portfolio123.herokuapp.com/api/contents",
      method: "GET",
    }).then((res) => {     
      this.setState({
        content: res.data[0].content
      });
    });
    axios({
      url: "http://laravel-portfolio123.herokuapp.com/api/projects",
      method: "GET",
    }).then((res) => {
      this.setState({
        projects: res.data,
      });
    });
    axios({
      url: "http://laravel-portfolio123.herokuapp.com/api/qualifications",
      method: "GET",
    }).then((res) => {
      this.setState({
        credential: res.data[0].credential,
        details: res.data[0].details,
        yearCompleted: res.data[0].yearCompleted,
        credential1: res.data[1].credential,
        details1: res.data[1].details,
        yearCompleted1: res.data[1].yearCompleted,
      });
    });
    axios({
      url: "http://laravel-portfolio123.herokuapp.com/api/experiences",
      method: "GET",
    }).then((res) => {
      this.setState({
        position: res.data[0].position,
        companyName: res.data[0].companyName,
        responsibilities: res.data[0].responsibilities,
        startDate: res.data[0].startDate,
        endDate: res.data[0].endDate,
      });
    });
    axios({
      url: "http://laravel-portfolio123.herokuapp.com/api/skills",
      method: "GET",
    }).then((res) => {      
      this.setState({
        skills: res.data,
      });
    });
  }

  render() {
    const {
      content,
      credential,
      details,
      yearCompleted,
      credential1,
      details1,
      yearCompleted1,
      position,
      companyName,
      responsibilities,
      startDate,
      endDate,
      fontawesomeHTML,
      detailsSkill,
      type,
      projects,
      skills,
      contents
    } = this.state;
    return (
      <div className="root">
        <img
          src="./Images/profile.JPG"
          width={300}
          height={300}
          className="profileimg"
          alt="profile"
        ></img>
        <h2 className="abt">About Me</h2>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
       
        <h2 className="quali">My Qualifications</h2>
        <section className="qualification" id="qualification">
          <div>
            <h3
              className="credential"
              dangerouslySetInnerHTML={{ __html: credential }}
            ></h3>
            <div
              className="details"
              dangerouslySetInnerHTML={{ __html: details }}
            ></div>
            <div
              className="year"
              dangerouslySetInnerHTML={{ __html: yearCompleted }}
            ></div>
          </div>
          <div>
            <h3
              className="credential"
              dangerouslySetInnerHTML={{ __html: credential1 }}
            ></h3>
            <div
              className="details"
              dangerouslySetInnerHTML={{ __html: details1 }}
            ></div>
            <div
              className="year"
              dangerouslySetInnerHTML={{ __html: yearCompleted1 }}
            ></div>
          </div>
        </section>
        <section className="experinece">
          <h2 className="experi">My Experiences</h2>
          <h3
            className="companyName"
            dangerouslySetInnerHTML={{ __html: companyName }}
          ></h3>
          <h4
            className="position"
            dangerouslySetInnerHTML={{ __html: position }}
          ></h4>
          <p
            className="responsibility"
            dangerouslySetInnerHTML={{ __html: responsibilities }}
          ></p>
          Start Date:{" "}
          <span
            className="SD"
            dangerouslySetInnerHTML={{ __html: startDate }}
          ></span>
          <br></br>
          End Date:{" "}
          <span
            className="ED"
            dangerouslySetInnerHTML={{ __html: endDate }}
          ></span>
        </section>
        <section className="skill">
          <h1 className="skillhead">My Skills</h1>
          {skills.map((skill) => (
            <div className="skillslogo" key={skill.id}>              
              <p className="plogo" dangerouslySetInnerHTML={{ __html: skill.fontawesomeHTML }}></p>
            </div>
          ))}
        </section>
        <section className="project">
          <h1 className="workhead">My Works</h1>
          {projects.map((project) => (
            <div key={project.id}>
              <h1>{project.title} </h1>
              <img
                src={project.photo}
                alt="projectimg"
                width={300}
                height={200}
              ></img>
              <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
              <b className="tech">Used Technologies: </b>
              <span
                dangerouslySetInnerHTML={{ __html: project.technologies }}
              ></span>
              <br></br>
              <a href={project.gitUrl}>Source Code</a>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
export default Mainbody;
