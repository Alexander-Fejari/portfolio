
interface LogoProps {
    size: number;
    color?: string;
}

const Logo = ({ size, color }: LogoProps) => {
    // Déterminez la classe de couleur en fonction de la couleur passée
    const fillColorClass = color ? `${color}` : 'fill-primary';

    return (
        <svg
            id="logo"
            data-name="Calque 2"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            className={fillColorClass} // Utilisez la classe calculée pour définir la couleur
            viewBox="0 0 116.27 109.05"
        >
            <g id="Calque_1-2" data-name="Calque 1">
                <g>
                    <path d="M114.32,85.57L72.41,8.49c-6.16-11.32-22.41-11.32-28.56,0h0l14.31,26.16v-.03l5.3,9.72,.7,1.29,34.47,63.42h1.72c12.05,0,19.72-12.89,13.96-23.48Z"/>
                    <path d="M55.7,39.17l-6.46-11.89-7.8-14.34-14.22,26.16h0l.88,1.62,13.36,24.59,4.41,8.09,5.16,9.49H31.88l7.15-13.13-14.25-26.19L3.41,82.89h0l-1.46,2.69c-5.75,10.59,1.91,23.48,13.96,23.48H93.69L60.65,48.31l-4.96-9.14Z"/>
                </g>
            </g>
        </svg>
    );
};

export default Logo;
