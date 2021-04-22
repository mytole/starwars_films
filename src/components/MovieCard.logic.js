import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useMovieCard = (title, id) => {
  const [imgUrl, setImgUrl] = useState("");
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (Cookies.get("likes")) {
      const likesObject = Cookies.getJSON("likes");

      if (likesObject[id]) {
        setLiked(true);
      }
    }
  }, []);
  const fetchImg = async (title) => {
    try {
      const queryTitle = title.split(" ").join("+");
      const response = await fetch(
        `https://api.bing.microsoft.com/v7.0/images/search?q=${queryTitle}&&count=1`,
        {
          method: "GET",
          headers: {
            "Ocp-Apim-Subscription-Key": "6be2ad14f030404daa9f65e9e3a146d6",
          },
        }
      );
      const data = await response.json();
      setImgUrl(data.value[0].thumbnailUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnLike = (id) => {
    if (!Cookies.get("likes")) {
      Cookies.set("likes", { [id]: !liked });
      setLiked(!liked);
    } else {
      const likesObject = Cookies.getJSON("likes");
      Cookies.set("likes", { ...likesObject, [id]: !liked });
      setLiked(!liked);
    }
  };

  useEffect(() => {
    fetchImg(title);
  }, [title]);

  return {
    imgUrl,
    liked,
    handleOnLike,
  };
};
