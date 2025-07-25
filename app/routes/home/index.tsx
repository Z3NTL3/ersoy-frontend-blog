import { useCallback, useContext, useEffect, useState } from "react"
import { type JSX } from "react"
import { NavbarSearchContext } from "~/contexts/navbarSearch"
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, EffectCoverflow, FreeMode } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import 'swiper/css';
import 'swiper/css/pagination';
import Posts from "~/components/ui/posts";
import { Skeleton } from "~/components/ui/skeleton";

interface RequiredFields {
  title: string
  description: string,
  id: number,
  imgSrc: string
}
export interface IPosts extends RequiredFields {
  [key: string]: string | number
} 

const POSTS: Array<IPosts> = [
  {title: "Post #1", description: "desc", id: 1, imgSrc: "https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg"},
  {title: "Post #2", description: "desc", id: 2, imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s"},
  {title: "Post #3", description: "desc", id: 3, imgSrc: "https://media.istockphoto.com/id/525508231/photo/moraine-lake-rocky-mountains-canada.jpg?s=612x612&w=0&k=20&c=a4pWewQGlZSblXWROA5o5ayaN5R7XPfDGOQ43B88IzY="},
  {title: "Post #4", description: "desc", id: 4, imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkoj4BZmD1KH2YPBIYWDrVUvthRhW_ik8Dg&s"},
  {title: "Post #5", description: "desc", id: 5, imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxpIt2uP9ILNuK1oI0qZdSAzuazaVluogFQ&s"}
]

export default function Home() {
  let search = useContext(NavbarSearchContext)
  let [posts, setPosts] = useState<Array<IPosts>>([])
  let [loaded, setLoaded] = useState(false);

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
    let worker = setInterval(() => {
      let images = document.images
      let totalLoaded = 0
      for (let i = 0; i < images.length; i++) {
        let img = images[i];
        if(img.complete){
          totalLoaded+=1
        }
      }
      
      if(totalLoaded == images.length) {
        setLoaded(true)
      }
    }, 1500)

    return () => clearInterval(worker)
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
       <script>
        alert('gello')
      </script>
      <div className="relative flex flex-col justify-center items-center w-full h-full">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, FreeMode]}
          spaceBetween={0}
          slidesPerView={1}
          speed={2000}
          pagination={{
            el: "#pagination",
            type: "progressbar",

          }}
          scrollbar={{ draggable: true }}
          className="w-[900px] h-[440px] light-shadow"
          effect="coverflow"
          freeMode={{
            enabled: true,
            sticky: true
          }}
          style={{zIndex: 10, marginBottom: 110, overflowX: "clip", overflowY: "visible"}}
          centeredSlides={true}
        >
          <SwiperSlide className="relative w-full h-full cursor-pointer">
            { !loaded &&
              <Skeleton className="flex w-full h-full justify-center items-center bg-gray-300">
                <FontAwesomeIcon icon={"image"} size="2xl" className="w-full h-full"/>
              </Skeleton>
            }
            <img width={900} className={`rounded-xl ${loaded ? "opacity-100" : "opacity-0"}`} src="./img/desk.svg" alt="desk"/>
            <div className={`hover:scale-105 flex flex-col absolute left-6 -bottom-18 border border-black/10 z-30 bg-white rounded-lg outline outline-[#E8E8EA] w-[400px] h-[200px] p-6 ${loaded ? "opacity-100" : "opacity-0"}`}>
              <span className="bg-[#4B6BFB] text-white p-2 rounded-md w-fit text-[11px]">Mockup</span>
              <h2 className="text-black text-2xl font-semibold mt-2">Makele yazısı göstermelik bla yes okay</h2>

              {/* author */}
              <div className="flex items-center gap-x-2 mt-8">
                  <img className="rounded-full border border-black/10" width={25} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOdfo4lewXJYT_2xPo_Xu2Lj6XPn78X9UJA&s" alt="" />
                  <span className="text-black/50 font-medium text-[14px] dark:text-gray-500">Mehdi Ersoy</span>

                  <span className="flex grow justify-end mr-1 text-black/50 font-medium text-[14px] dark:text-gray-500">Temmuz 15, 2025</span>
              </div>
              {/* end */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full cursor-pointer">
            { !loaded &&
              <Skeleton className="flex w-full h-full justify-center items-center bg-gray-300">
                <FontAwesomeIcon icon={"image"} size="2xl" className="w-full h-full"/>
              </Skeleton>
            }
            <img width={900} className={`rounded-xl ${loaded ? "opacity-100" : "opacity-0"}`} src="./img/desk.svg" alt="desk"/>
            <div className={`hover:scale-105 flex flex-col absolute left-6 -bottom-18 border border-black/10 z-30 bg-white rounded-lg outline outline-[#E8E8EA] w-[400px] h-[200px] p-6 ${loaded ? "opacity-100" : "opacity-0"}`}>
              <span className="bg-[#4B6BFB] text-white p-2 rounded-md w-fit text-[11px]">Mockup</span>
              <h2 className="text-black text-2xl font-semibold mt-2">Makele yazısı göstermelik bla yes okay</h2>

              {/* author */}
              <div className="flex items-center gap-x-2 mt-8">
                  <img className="rounded-full border border-black/10" width={25} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOdfo4lewXJYT_2xPo_Xu2Lj6XPn78X9UJA&s" alt="" />
                  <span className="text-black/50 font-medium text-[14px] dark:text-gray-500">Mehdi Ersoy</span>

                  <span className="flex grow justify-end mr-1 text-black/50 font-medium text-[14px] dark:text-gray-500">Temmuz 15, 2025</span>
              </div>
              {/* end */}
            </div>
          </SwiperSlide>
        </Swiper>
        <Posts posts={posts} loaded={loaded ?? false}/>
      </div>
    </>
  );
}