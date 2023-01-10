import logo from "../../images/logo-white.svg";
import facebook from "../../images/icon-facebook.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";

export default function Footer() {
  return (
    <div className="footer bg-verydarkviolet text-white">
      <div className="flex flex-col container mx-auto p-5 lg:flex-row space-y-5 lg:space-y-0">
        <div className="flex justify-center lg:block flex-1 ">
          <img src={logo} alt="" />
        </div>
        <div className="features flex-1">
          <h1 className="mb-4 font-bold">Features</h1>
          <h4>Link Shortening</h4>
          <h4>Branded Links</h4>
          <h4>Analytics</h4>
        </div>
        <div className="resources flex-1">
          <h1 className="mb-4 font-bold">Resources</h1>
          <h4>Blog</h4>
          <h4>Developers</h4>
          <h4>Support</h4>
        </div>
        <div className="company flex-1">
          <h1 className="mb-4 font-bold">Company</h1>
          <h4>About</h4>
          <h4>Our Team</h4>
          <h4>Carreers</h4>
          <h4>Contact</h4>
        </div>
        <div className="socials flex-1 flex justify-center lg:flex-row  space-x-3">
          <div>
            <img src={facebook} alt="" />
          </div>
          <div>
            <img src={twitter} alt="" />
          </div>
          <div>
            <img src={pinterest} alt="" />
          </div>
          <div>
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>

      <div className="attribution text-lg mt-10">
        Challenge by&nbsp;
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="font-bold"
        >
          Frontend Mentor
        </a>
        . Coded by&nbsp;
        <a
          href="https://github.com/tjalani"
          target="_blank"
          rel="noreferrer"
          className="font-bold"
        >
          Tajudeen Lukuman Aleru
        </a>
        .
      </div>
    </div>
  );
}
