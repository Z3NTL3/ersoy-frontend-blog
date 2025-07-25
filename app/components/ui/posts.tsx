import type { IPosts } from "~/routes/home";
import { Skeleton } from "./skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Posts({posts, loaded}: {posts: Array<IPosts>, loaded: Boolean}) {
    let postsList = posts.map((post) => {
        return (
            <div key={"container-posts-"+post.title}>
                <div key={`post-${post.id}`} className={!loaded ? "hidden" : ""}>
                    <div className="hover:scale-105 cursor-pointer flex flex-col border border-[#E8E8EA]/80 dark:border-[#242535] text-black w-[280px] p-3 rounded-lg min-h-[300px]">
                        <img className="rounded-lg" src={post.imgSrc} alt="" />
                        {/* badges */}
                        <span className="text-[#4B6BFB] bg-[#4B6BFB]/10 w-fit p-1 rounded-md px-4 mt-3 font-medium text-[12px]">Mockup</span>
                        {/* end */}

                        {/* title */}
                        <h1 className="text-left mt-3 font-semibold dark:text-white text-[20px]">{post.title}</h1>
                        {/* end */}

                        {/* author */}
                        <div className="flex grow  items-end gap-x-2 px-1 mt-2">
                            <img className="rounded-full border border-black/10" width={25} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOdfo4lewXJYT_2xPo_Xu2Lj6XPn78X9UJA&s" alt="" />
                            <span className="text-black/50 font-medium text-[14px] dark:text-gray-500">Mehdi Ersoy</span>

                            <span className="flex grow justify-end mr-1 text-black/50 font-medium text-[14px] dark:text-gray-500">Temmuz 15, 2025</span>
                        </div>
                        {/* end */}
                    </div>
                </div>
                
                {  !loaded &&
                    <Skeleton className="bg-gray-300 text-white flex flex-col w-[280px] p-3 rounded-lg h-[200px]">
                        <Skeleton className="flex flex-col w-full h-full justify-center items-center bg-gray-300">
                            <FontAwesomeIcon icon={"image"} size="2xl" className="w-full h-full"/>
                        </Skeleton>
                    </Skeleton>
                }
            </div>
        )
    })
    return (
        <div>

            <h1 className="text-black dark:text-white  font-bold text-[20px] text-left mt-5">Güncel Yazılar</h1>
            <div className="flex flex-col items-center place-content-center w-full">
            <div className="grid grid-cols-3 justify-center items-center mt-2 gap-x-15 gap-y-5">
                {postsList}
                {postsList.length === 0 && 
                    <p className="text-sm text-gray-400">Aramanız için sonuç bulunamadı.</p>
                }
            </div>
            <div className="flex justify-center mt-10 w-full">
                <p className="text-[#696A75] border p-2  rounded-md border-[#696A75] text-sm cursor-pointer">Tümünü göster</p>
            </div>
        </div>
        </div>
    )
}