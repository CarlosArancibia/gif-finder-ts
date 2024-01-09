interface GifProps {
  id: string;
  title: string;
  url: string;
}

export const GifGridItem = ({ title, url }: GifProps) => {
  return (
    <figure className="card">
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};
