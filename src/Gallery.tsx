/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInfiniteQuery } from "@tanstack/react-query";
import unsplash from "./api/unsplash";
import React, { useCallback, useEffect } from "react";
import Image from "./Image";
import { RefreshCcw } from "lucide-react";

const Gallery = () => {
  const fetchImages = async ({ pageParam }: { pageParam: number }) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: "fashion",
        client_id: import.meta.env.VITE_UNSPLASH_API_KEY,
        page: pageParam,
      },
    });

    return response.data.results;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  const infiniteScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infiniteScroll]);

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <div className="p-10">
      <div className="grid gap-4 grid-flow-dense grid-cols-auto-fit">
        {data?.pages?.map((group, i) => (
          <React.Fragment key={i}>
            {group?.map((image: any) => (
              <Image key={image.id} image={image} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? (
            "Loading more..."
          ) : hasNextPage ? (
            <RefreshCcw />
          ) : (
            "Nothing more to load"
          )}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};

export default Gallery;
