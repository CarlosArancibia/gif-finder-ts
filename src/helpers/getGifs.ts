interface GifProps {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=6KDpgrZE9eaJAVl5M2hFfnq5B552fmx3&q=${category}&limit=10`;

  try {
    const resp = await fetch(url);

    if (!resp.ok) throw new Error('Error HTTP:' + resp.status);

    const { data } = await resp.json();
    const gifs = data.map(({ id, title, images }: GifProps) => {
      return {
        id,
        title,
        url: images.downsized_medium.url,
      };
    });

    return gifs;
  } catch (error) {
    console.log(error);
  }
};
