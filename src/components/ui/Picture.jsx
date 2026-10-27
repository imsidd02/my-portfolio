// Serves AVIF with a WebP fallback. `sources` are { avif, webp } srcSet strings
// and `fallback` is a WebP URL for browsers without <picture> srcset support.
const Picture = ({ sources, fallback, alt, width, height, sizes, className, loading = "lazy" }) => (
    <picture>
        <source type="image/avif" srcSet={sources.avif} sizes={sizes} />
        <source type="image/webp" srcSet={sources.webp} sizes={sizes} />
        <img
            src={fallback}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding="async"
            className={className}
        />
    </picture>
);

export default Picture;
