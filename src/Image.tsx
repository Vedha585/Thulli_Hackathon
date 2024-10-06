import { Heart } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Image = ({ image }: { image: any }) => {
  return (
    <div className="relative flex items-center justify-center" key={image.id}>
      <img
        className="max-w-full align-middle inline-block w-full h-full object-cover"
        src={image.urls.regular}
        alt={image.slug}
      />
      <button
        className={`absolute top-2 right-2 p-2 rounded-full ${
          ""
          //   likedImages.includes(image.id) ? "bg-red-500" : "bg-white"
        }`}
        // onClick={(e) => toggleLike(image.id, e)}
        // aria-label={likedImages.includes(image.id) ? "Unlike" : "Like"}
      >
        <Heart
          size={20}
          //   className={
          //     likedImages.includes(image.id) ? "text-white" : "text-red-500"
          //   }
          //   fill={likedImages.includes(image.id) ? "white" : "none"}
        />
      </button>
    </div>
  );
};

export default Image;
