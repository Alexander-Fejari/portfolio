import {FaLinkedin, FaSquareGithub} from "react-icons/fa6";
import {Link} from "react-router-dom";

interface SocialIcon {
    size: '24' | '36' | '40'
}

const SocialIcon = ({size}: SocialIcon) => {
    const handleLinkedInClick = (event) => {
        event.preventDefault();
        window.open('https://www.linkedin.com/in/alexander-fejari-5a7802167', '_blank');
    };
    const handleGithubClick = () => {
        window.open('https://github.com/Alexander-Fejari', '_blank');
    };

    let sizeClasses;
    switch (size) {
        case "24":
            sizeClasses = "w-6 h-6";
            break;
        case "36":
            sizeClasses = "w-9 h-9";
            break;
        case "40":
            sizeClasses = "w-10 h-10";
            break;
        default:
            break;
    }

    return (
        <>
            <nav className={'flex items-center gap-x-2'}>
                <Link className={'transition-all ease-in-out duration-300 hover:text-primary'} to='https://www.linkedin.com/in/alexander-fejari-5a7802167' target='_blank' onClick={handleLinkedInClick}>
                    <FaLinkedin className={`${sizeClasses}`} />
                </Link>
                <Link className={'transition-all ease-in-out duration-300 hover:text-primary'} to='https://github.com/Alexander-Fejari' target='_blank' onClick={handleGithubClick}>
                    <FaSquareGithub className={`${sizeClasses}`}/>
                </Link>
            </nav>
        </>
    )
}

export default SocialIcon