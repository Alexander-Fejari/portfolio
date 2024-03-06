interface DivideProps {
    divideHeight: 'xs' | 'sm'
    divideLength: 'fitContent' | 'center' | 'start'
    className?: string

}

const Divide = ({divideHeight, divideLength, className}: DivideProps) => {
    let heightClasses;
    let lengthClasses;

    switch (divideHeight) {
        case 'xs':
            heightClasses = 'border-t'
            break;
        case 'sm':
            heightClasses = 'border-t-2'
            break;
    }

    switch (divideLength) {
        case 'fitContent':
            lengthClasses = 'w-full'
            break;
        case 'center':
            lengthClasses = 'w-1/2 mx-auto'
            break;
        case 'start':
            lengthClasses = 'w-1/2'
            break;
    }


    return (
        <section
            className={`${heightClasses} ${lengthClasses} ${className} flex border-t border-primary/30 dark:border-white/30`}></section>
    )
}

export default Divide