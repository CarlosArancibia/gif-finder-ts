interface GifProps {
  category: string;
}

export const GifGrid = ({ category }: GifProps) => {
  return (
    <ul>
      <li>{category}</li>
    </ul>
  );
};
