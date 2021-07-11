import Jumbo from "../assets/jumbo.JPG";
import Hands from "../assets/hands.JPG";
import Reachme from "./Reachme";

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="homepage__heading">
        <h1>
          Hello, my name is Joanna. I'm a Front End Developer living in Berlin,
          Germany.
        </h1>
        <div className="homepage__jumbo">
          <img src={Jumbo} alt="jumbo pic" />
        </div>
      </div>
      <article className="about">
        <div className="about__bio">
          <h2>About</h2>
          <p>
            For the last ten years I had been working as an orchestral musician,
            music teacher, barkeeper, Instagram administrator and fine artist.
            Lastly I've decided to choose a path as a web developer to combine
            my love for aesthetics, design, organizing, technology and team
            work. Since October 2020 I've been intensively mastering my skills
            to reach a requiered level to work professionally as a web
            developer.
          </p>
          <h3>Skills</h3>
          <p>
            As a junior Front End Developer I'm building responsive, interactive
            websites using HTML, CSS, Sass, JavaScript as well as React. I'm
            familiar with Webpack, Gulp, NPM, Scrum and other technologies
            improving the work flow. I communicate in English, German and Polish
            on a daily basis.
          </p>
        </div>
      </article>
      <div className="homepage__heading">
        <div className="homepage__jumbo2">
          <img src={Hands} alt="jumbo pic" />
        </div>
      </div>
      <Reachme
        linkToFirst={"/contact"}
        textFirst="Send me a message"
        linkToSecond={"/projects"}
        textSecond="View my projects"
      />
    </section>
  );
};
export default Homepage;
