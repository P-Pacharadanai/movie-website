import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className="`w-full bg-black/25 py-6">
            <div className="container mx-auto text-center text-white">
                <p className="mb-4">Contact with me</p>
                <div className="flex justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/pacharadanai-pinake"
                        target="_blank"
                        className="text-white hover:text-cyan-600 duration-200"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a
                        href="https://github.com/P-Pacharadanai"
                        target="_blank"
                        className="text-white hover:text-cyan-600 duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a
                        href="mailto:pacharadanaipinake@gmail.com"
                        target="_blank"
                        className="text-white hover:text-cyan-600 duration-200"
                    >
                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    &copy; 2024 MovieNight. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
