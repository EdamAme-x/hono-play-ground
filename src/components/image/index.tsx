export function Image({
    src,
    alt,
    width,
    height,
    ...props
}: {
    src: string;
    alt: string;
    width: number;
    height: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}) {
    return <img src={src} srcSet={`${src} 1x, ${src} 2x`} alt={alt} width={width} height={height} loading="lazy" {...props} />;
}
