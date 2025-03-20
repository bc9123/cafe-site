import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import homeStyles from "../css/Home.module.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <NavBar onHomePage={true}/>
      </div>
      <div className={homeStyles.svgContainer}>
        <div className={homeStyles.svgGroup}>
          <svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 275.353 275.353" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <g> <path fill="#30261c" d="M229.784,199.712c27.269,0,45.568-29.692,45.568-57.419c0-20.117-12.418-22.843-24.562-22.843 c-3.468,0-7.21,0.234-11.167,0.479c-3.195,0.176-6.507,0.332-9.848,0.41l0.039-0.889H1.514c0,42.959,24.132,80.321,59.686,99.49 C24.787,221.333,0,226.043,0,231.445c0,7.865,51.782,14.196,115.659,14.196s115.649-6.331,115.649-14.196 c0-5.432-24.904-10.132-61.454-12.516c10.63-5.725,20.263-13.004,28.529-21.641 C208.026,199.712,219.448,199.712,229.784,199.712z M229.364,128.272c3.683-0.088,7.289-0.244,10.737-0.469 c3.83-0.205,7.464-0.42,10.698-0.42c11.509,0,16.658,2.159,16.658,14.909c0,23.419-15.466,49.515-37.664,49.515 c-9.751,0-18.3-0.205-25.285-1.358C218.559,173.196,227.537,151.731,229.364,128.272z M98.982,97.203 c-0.557-0.547-13.414-13.922,0.156-30.327c16.58-20,0.01-37-0.156-37.166l-3.595,3.595c0.557,0.537,13.414,13.932-0.166,30.327 c-16.58,20.029-0.01,37.039,0.166,37.195L98.982,97.203z M118.737,97.203c-0.557-0.547-13.414-13.922,0.166-30.327 c16.56-20,0-37-0.166-37.166l-3.605,3.595c0.557,0.537,13.414,13.932-0.156,30.327c-16.56,20.039-0.01,37.039,0.166,37.205 L118.737,97.203z M140.251,97.203c-0.557-0.547-13.414-13.922,0.156-30.327c16.57-20,0-37-0.156-37.166l-3.615,3.595 c0.547,0.537,13.424,13.932-0.166,30.327c-16.56,20.039,0,37.039,0.176,37.205L140.251,97.203z"></path> </g> </g> </g> </g> </g></svg>
          <h5>Hot Coffee</h5>
        </div>
        <div className={homeStyles.svgGroup}>
          <svg fill="#30261c" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="matrix(1,0,0,1,-1152,-256)"> <rect id="Icons" x="0" y="0" width="1280" height="800" fill="none"></rect> <g id="Icons1"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)"> <g id="coffee-beans"> <g id="coffee-bean1"> </g> </g> </g> <g id="coffee-bean-filled" transform="matrix(0.866025,0.5,-0.5,0.866025,717.879,-387.292)"> <g transform="matrix(1,0,0,1,0,-0.699553)"> <path d="M737.673,328.231C738.494,328.056 739.334,328.427 739.757,329.152C739.955,329.463 740.106,329.722 740.106,329.722C740.106,329.722 745.206,338.581 739.429,352.782C737.079,358.559 736.492,366.083 738.435,371.679C738.697,372.426 738.482,373.258 737.89,373.784C737.298,374.31 736.447,374.426 735.735,374.077C730.192,371.375 722.028,365.058 722.021,352C722.015,340.226 728.812,330.279 737.673,328.231Z"></path> </g> <g transform="matrix(-1,0,0,-1,1483.03,703.293)"> <path d="M737.609,328.246C738.465,328.06 739.344,328.446 739.785,329.203C739.97,329.49 740.106,329.722 740.106,329.722C740.106,329.722 745.206,338.581 739.429,352.782C737.1,358.507 736.503,365.948 738.383,371.527C738.646,372.304 738.415,373.164 737.796,373.703C737.177,374.243 736.294,374.356 735.56,373.989C730.02,371.241 722.028,364.92 722.021,352C722.016,340.255 728.779,330.328 737.609,328.246Z"></path> </g> </g> <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)"> <g id="coffee-beans-filled"> <g id="coffee-bean2"> </g> </g> </g> <g id="clipboard"> </g> <g transform="matrix(1,0,0,1,128.011,1.35415)"> <g id="clipboard-paste"> </g> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g> </g></svg>
          <h5>Fresh Beans</h5>
        </div>
        <div className={homeStyles.svgGroup}>
          <svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 263.633 263.633" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#30261c" d="M189.576,66.372L189.576,66.372H48.783c-57.766,84.66-60.272,149.767-18.335,197.261h175.258 C243.83,216.872,242.653,149.204,189.576,66.372z M195.838,252.665H40.069C2.796,210.455,5.025,152.587,56.367,77.341h125.138 C228.678,150.962,229.723,211.104,195.838,252.665z"></path> <path id="_237276784" fill="#30261c" d="M25.861,156.443h183.374c7.414,31.01,2.021,59.324-12.811,88.313H40.019 C20.451,214.417,17.772,187.453,25.861,156.443L25.861,156.443z"></path> <path fill="#30261c" d="M216.268,6.03l-9.23,17.484c24.371,6.905,38.047,36.604,35.945,84.666 c-0.166,3.159,18.282,3.679,18.549-0.012C264.284,62.614,246.946,19.467,216.268,6.03z"></path> <path fill="#30261c" d="M216.268,6.03L216.268,6.03c-3.857-1.705-7.709-3.294-12.305-0.398 c-23.349,23.597-27.861,37.671-44.854-1.447L29.339,0l0,0l5.966,17.348l6.561,19.056l6.94,20.199l140.77-0.022l17.461-33.066 L216.268,6.03C216.267,6.03,216.268,6.03,216.268,6.03z"></path> </g> </g></svg>
          <h5>Cold Coffee</h5>
        </div>
        <div className={homeStyles.svgGroup}>
          <svg fill="#30261c" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.427734 3C14.056734 3 12.861484 3.9278594 12.521484 5.2558594L12.330078 6L37.65625 6L37.474609 5.2714844C37.139609 3.9354844 35.9415 3 34.5625 3L15.427734 3 z M 12 8C8.657 8 8.09 11.01 8 13C8 13.553 8.448 14 9 14L41 14C41.552 14 42 13.553 42 13C41.909 11.01 41.341 8 38 8L12 8 z M 10.248047 16L13.976562 45.044922C14.146562 46.141922 15.197141 47 16.369141 47L33.632812 47C34.803812 47 35.855297 46.141578 36.029297 45.017578L37.185547 36L39.751953 16L10.248047 16 z M 24.90625 20C24.95025 19.994 24.952609 20 24.974609 20C27.861609 20 30.297672 22.025 31.388672 25L31.490234 25L36.580078 25L35.683594 32L31.527344 32L31.390625 32C31.155625 32.655 30.874766 33.28375 30.509766 33.84375C29.216766 35.82575 27.241797 36.975047 25.091797 36.998047L25.023438 36.998047C22.901438 36.998047 20.929422 35.895891 19.607422 33.962891C19.203422 33.372891 18.893719 32.702 18.636719 32L18.521484 32L14.318359 32L13.419922 25L18.484375 25L18.589844 25C19.650844 22.056 22.03625 20.032 24.90625 20 z M 24.951172 24 A 4.5 3.0050001 89.375 0 0 21.996094 28.533203 A 4.5 3.0050001 89.375 0 0 25.048828 33 A 4.5 3.0050001 89.375 0 0 28.005859 28.466797 A 4.5 3.0050001 89.375 0 0 24.951172 24 z"></path></g></svg>
          <h5>Takeout</h5>
        </div>
      </div>
      <div className="slider-container">
        <Slider />
      </div>
      <div className={homeStyles.catalogueSectionContainer}>
        <div>
          <h1>Check our catalogue</h1>
          <Link to={"/catalogue"}>Explore catalogue &gt;</Link>
        </div>
      </div>
      <div className={homeStyles.locationSectionContainer}>
        <div className={homeStyles.locationSectionContainerLeft}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
          <h4>Lorem, ipsum dolor.</h4>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
        </div>
        <div className={homeStyles.locationSectionContainerRight}>
          <img src="/assets/images/home-location-img.jpg" alt="" loading="lazy"/>
        </div>
      </div> 
      <div className={homeStyles.contactSectionContainer}>
        <div>
          <h1>Get in contact</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, recusandae.</p>
        </div>
        <div>
          <Link to={"/contact"}>Contact &gt;</Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home