import Reachme from "./Reachme";
import { ExternalLink } from "react-external-link";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__heading">
        <h1>My recent projects I currently work on</h1>
      </div>
      <article className="projects__article">
        <h2>Giveaway React Project</h2>
        <div className="projects__jumbo">
          <ExternalLink href="https://jipawlik.github.io/giveaway-react-project/#/">
            <div className="img-link">
              <h3 className="logo">grp</h3>
            </div>
          </ExternalLink>
          <ExternalLink
            href="https://github.com/jipawlik/giveaway-react-project"
            className="img-description"
          >
            View project on Github
          </ExternalLink>
        </div>
      </article>
      <article className="projects__article">
        <h2>Custom Daily Planner</h2>
        <div className="projects__jumbo">
          <ExternalLink href="https://jipawlik.github.io/daily-planner/#/">
            <div className="img-link">
              <h4 className="logo">cdp</h4>
            </div>
          </ExternalLink>
          <ExternalLink
            href="https://github.com/jipawlik/daily-planner"
            className="img-description"
          >
            View project on Github
          </ExternalLink>
        </div>
      </article>
      <article className="projects__article">
        <h2>BestShop</h2>
        <div className="projects__jumbo">
          <ExternalLink href="https://jipawlik.github.io/bestshop/">
            <div className="img-link">
              <h5 className="logo">bs</h5>
            </div>
          </ExternalLink>
          <ExternalLink href="https://github.com/jipawlik/bestshop">
            <p className="img-description">View project on Github</p>
          </ExternalLink>
        </div>
      </article>
      <Reachme
        linkToFirst={"/contact"}
        textFirst="Send me a message"
        linkToSecond={"/"}
        textSecond="Back to homepage"
      />
    </section>
  );
};
export default Projects;
