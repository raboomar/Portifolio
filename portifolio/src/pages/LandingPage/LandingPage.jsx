import IMAGES from "../../Images/images";
import "./landingPage.css";

function LandingPage() {
  return (
    <div className="profile-top  p-2">
      <div className="img-container">
        <img
          className="me"
          src="https://me-img-react.s3.us-east-1.amazonaws.com/rami.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC3kh5TPzllkgU9fRFNwWhHPcfVr%2BT9x%2FDcKzsskoPx%2FgIhAKehg2BwLs%2FQcUJO5PMVB7u0USjlnfm7eH33dh%2Bx%2F5HGKvECCMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzUwODgyMTA2MTgxIgyAmpnJjsbd68vvwTQqxQJUyhwjuGmOMOYv4WW0sfgciN83q0pCPTKY8kREO7EMFMCjRa6p5324ct1Xa9qcEmWAiYM7ud7w%2FWxmmbkHKr6tVhZlPcZb%2BGbLHsoRy0gfB6Ffo0Vrz%2FpyJ%2B%2BRdC0wyBbiEJNBAT13Xhq54NR%2FhXH2RagCF7125qCyPZqQ4wDmGt08SV%2F4y8fLXOeW2AZ%2FkhUNgeyTtRu8KQp88lAHD6gQPNdzqy%2B5sZkipfvTWCAwFtDSbsrpNvV2d8GvCSiFKL6I3PxpdXtgG5cdcLy1yVBEzMjKgJYyNtP3WH%2F9Jgmha4O2o5%2FJFwY%2FvNLeY6Dm1IIA7YmVXSwbxXPQEy0qPDs0GHKFizj0GU5%2FuPq%2BCKR%2F5WOf56VW6r1he%2FDkUChf2ZJaPu%2BV5AtYZ1yWyVmIf5Qquw0JrQ%2FtS0M3PeX%2FEXcdhFBgTV9AMMmIkJsGOrICi%2FWkbiL%2B0s4mLPrsXVjreK5xz0EGX%2Fzn1e0Xz3FtZH4w97kB1CBTkgapwu4uBKTSa7TTduf4G6iN7qeK3Kj0aSK0r9MiA4p3QdcFy5XNPsr0b9MCn0xqdDkKlAqfyXqe4Fv9OmlxWALSHBfsz6YvmXZEjjCiV%2Bkrr2xqoC7m2RlIuc6uFMqq2%2BexP14YdYIGjNANoLN%2BUU06FV%2FIuQ6Rb%2FcnNIIgnS8uLLaHR5mIDLRyauLEZa2ZlHGH1dR3n1DJBq%2FfMo4KZ%2Blf62C5xS7P%2BDyYn4uhxhkEezwZqyE8%2FnrGB2mhqTtSPpYMVM8QEsU1xputnlk48xmjk3Iy9bm1rwe%2Brft2KqlzSBjeraE%2For950qJ1i8NklwFmge4KIgBZruGOafBMcmTcOe6EOAu9054v&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221103T192640Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVDMRUBNC4DUK55GI%2F20221103%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=af78583e6956f2899c093e4aa692473864006afad698d5d6eb6cb13140a6b579"
          alt="Rami-profile-img"
        />
      </div>
      <div className="title-text">
        <h1>I'm Rami Aboomar.</h1>

        <h2>A Full-Stack Developer</h2>
        <p>Columbus, Ohio</p>
        <div className="icons my-1">
          <a href="mailto:aboomar.2@osu.edu" target="email">
            <i className="fas fa-envelope fa-2x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/rami-aboomar-4553a8b0/"
            target="linkedin"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>

          <a href="https://github.com/raboomar" target="github">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
