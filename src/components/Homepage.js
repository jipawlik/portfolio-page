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
            I'm currently freelancing as a Web Developer, which is how I combine
            my love for aesthetics, design, organizing, technology and team
            work. I'm actively developing my skills and keeping in touch with
            modern solutions. Outside of work I'm a musician (I used to played
            double-bass professionally) and a fine artist (watercolor).
            Currently I'm looking for a full time job as a web developer as well
            as freelance commisions. If you have questions or would like to get
            in touch with me, don't hesitate to send me a message.
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
