//Typography.tsx
// Définir un type union pour les éléments HTML autorisés
type AllowedElements =
    'span'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'strong'
    | 'em'
    | 'a'
    | 'blockquote'
    | 'cite'
    | 'code'
    | 'pre'
    | 'small'
    | 'sub'
    | 'sup'
    | 'hr';

// Définir les types pour les props
type TypographyProps = {
    as: AllowedElements;
    children: React.ReactNode;
    className?: string;
};

// Créer le composant Typographie
const Typography = ({as: Element, children, className}: TypographyProps) => {
    // Logique du switch pour définir les classes en fonction de la valeur de "as"
    let classes = className || ''
    switch (Element) {
        case 'h1':
            classes += ' dark:text-white font-heading font-bold text-6xl md:text-7xl';
            break;
        case 'h2':
            classes += ' dark:text-white font-heading font-bold text-5xl md:text-6xl';
            break;
        case 'h3':
            classes += ' dark:text-white font-heading font-bold text-3xl md:text-4xl';
            break;
        case 'h4':
            classes += ' dark:text-white font-heading font-medium text-2xl';
            break;
        case 'h5':
            classes += ' dark:text-white text-xl';
            break;
        default:
            break;
    }
    return <Element className={` ${classes}`}>{children}</Element>;
};

export default Typography;