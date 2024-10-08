import React from "react";
import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/Header";
import getAnimeResponse from "./libs/api";
import { getNestedAnimeResponse } from "./libs/api";

const Home = async () => {
  const topAnime =  await getAnimeResponse("top/anime", "limit=8");
  const latestAnime =  await getAnimeResponse("seasons/now", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  const randomnum = Math.floor(Math.random() * 150) + 1;

  recommendedAnime = {data: recommendedAnime.slice(randomnum, randomnum+8)};
  
  return (
    <>
      <section>
        <Header title="Recommended Anime" linktitle="" linkref="" />
          <AnimeList api={recommendedAnime} />
      </section>

      <section>
        <Header title="Top Anime" linktitle="See All" linkref="/topanime" />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Latest Anime" linktitle="See All" linkref="/latest" />
        <AnimeList api={latestAnime} />
      </section>

    </>
  );
};

export default Home;
