import { useCallback, useContext, useEffect, useState } from "react"
import { type JSX } from "react"
import { NavbarSearchContext } from "~/contexts/navbarSearch"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, EffectCoverflow, FreeMode } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import 'swiper/css';
import 'swiper/css/pagination';

interface RequiredFields {
  title: string
  description: string,
  id: number
}
interface IPosts extends RequiredFields {
  [key: string]: string | number
} 

const POSTS: Array<IPosts> = [
  // {title: "Post #1", description: "desc", id: 1},
  // {title: "Post #2", description: "desc", id: 2},
  // {title: "Post #3", description: "desc", id: 3},
  // {title: "Post #4", description: "desc", id: 4},
  // {title: "Post #5", description: "desc", id: 5}
]

export default function Home() {
  let search = useContext(NavbarSearchContext)
  let [posts, setPosts] = useState<Array<IPosts>>([])

  let getPosts = useCallback((search: string) => {
    if(!search || search === "")
      return setPosts(POSTS)
    
    setPosts(POSTS.filter((v) => v.title.includes(search)))
  }, [search])

  let listPosts = posts.map<JSX.Element>((post) => {
    return (
      <div key={post.id} className="flex flex-col items-center justify-center">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <a href={`/posts/${post.id}`}>{post.id}</a>
      </div>
    )
  })

  useEffect(() => {
    getPosts(search)
  }, [search])

  let stylesheet =`.swiper-pagination-bullet-active { background-color: white !important; }`
  return (
    <>
      <style href="home-style">
        {stylesheet}
      </style>

      <div className="flex justify-center items-center w-full">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, FreeMode]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: "#next",
            prevEl: "#prev"
          }}
          speed={2000}
          pagination={true}
          scrollbar={{ draggable: true }}
          className="w-[800px] h-[400px] dark:drop-shadow-xl rounded-xl"
          parallax={true}
          effect="coverflow"
          freeMode={{
            enabled: true,
            sticky: true
          }}
          
        >
          <SwiperSlide className="relative">
            <img className="w-full h-full rounded-xl" src="./img/desk.svg" alt="desk" />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img  className="w-full h-full rounded-xl p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbgd6_OdP3o4h-Qzm8K6PPhZf5DjL0Xn2Gg&s" alt="" />
          </SwiperSlide>
          <div className="swiper-pagination-bullet"></div>
        </Swiper>
      </div>
    </>
    // <div className="w-screen h-screen justify-center items-center text-black">
    //   { posts ? 
    //     <div className="flex flex-col justify-center items-center gap-y-5">
    //       { listPosts ? listPosts : <h1>No posts found</h1>}
    //     </div>
    //   : <h1>No posts found</h1>}
    // </div>
  );
}