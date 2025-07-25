import { useContext, useEffect, useRef, useState } from "react";
import { ThemeChangerContext } from "~/contexts/themeChanger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavbarSearchContext } from "~/contexts/navbarSearch";

// Navbar component
const Navbar = ({children}) => {
    let getter = useContext(ThemeChangerContext)
    let getCorrectScheme = getter.currentTheme === "dark" ? "./logo-dark.svg" : "./logo.svg"
    let [search, setSearch] = useState("")
    
    useGSAP(() => {
        // theme anim only if dark
        if(getter.currentTheme !== "dark")
            return

        gsap.to("#toggler", {
            left: "+25px"
        })
        gsap.to("#container-theme-toggler", {
            background: "#4B6BFB"
        })
    })

    const handleThemeToggle = () => {
        let currentTheme = getter.currentTheme

        if(currentTheme === "dark") {
            gsap.to("#toggler", {
                left: "0px"
            })
            gsap.to("#container-theme-toggler", {
                background: "#E8E8EA"
            })
            return getter.change("light")
        } 

        gsap.to("#toggler", {
            left: "+25px"
        })
        gsap.to("#container-theme-toggler", {
            background: "#4B6BFB"
        })
        getter.change("dark")
    }

    
    let linksCls = "text-white dark:text-black"
    let remove = "bg-black/80 border border-black/70 dark:bg-white/60 rounded-lg backdrop-blur-xl".split(" ")
        
    const rmClasses = (nav: HTMLElement) => {
        for (let i = 0; i < remove.length; i++) {
            let del = remove[i];
            nav.classList.remove(del)
        }
    }
    const linksManipulator = (links: HTMLElement, task: "add" | "del") => {
        for (let i = 0; i < links.children.length; i++) {
            let child = links.children.item(i)
            if(task === "del")
                child?.classList.remove(...linksCls.split(" "))
            else
                child?.classList.add(...linksCls.split(" "))
        }
    }

    useEffect(() => {
        var nav = document.getElementById("navbar")
        var links = document.getElementById("nav-links")

        document.addEventListener("scroll", (_) => {
            let gapY = window.scrollY
            let navState = 10

            if(typeof nav === "undefined" || nav === null)
                return
            
            if(typeof links === "undefined" || links === null)
                return


            if(gapY >= navState) {
                let currentClasses = nav.getAttribute("class")
                nav.setAttribute("class", `${currentClasses} bg-black/80 border border-black/70 dark:bg-white/60 rounded-lg backdrop-blur-xl`)
        
                  if(getter.currentTheme === "dark")
                    document.getElementById("logo")?.setAttribute("src", "logo.svg")
                else document.getElementById("logo")?.setAttribute("src", "logo-dark.svg")
                for (let i = 0; i < links.children.length; i++) {
                    let child = links.children.item(i)
                    console.log(child)
                    linksManipulator(links, "add")
                }
                return
            }

            rmClasses(nav)
            linksManipulator(links, "del")

            document.getElementById("logo")?.setAttribute("src", getCorrectScheme)
            return () => {
                // @ts-ignore
                rmClasses(nav)
                // @ts-ignore
                linksManipulator(links, "del")
                
                document.getElementById("logo")?.setAttribute("src", getCorrectScheme)

            }
        })
    })

    return (
        <NavbarSearchContext value={search}>
            <div className="flex justify-center" id="pagination"></div>
            <div className="fixed top-2 flex justify-center justify-items-center items-center w-full h-fit" style={{zIndex: 100}}>
                <div id="navbar" className="flex justify-start items-center w-[70%] h-[80px] p-4">
                    {/* logo */}
                    <div className="flex">
                        <img id="logo" width={150} src={getCorrectScheme} alt="logo" />
                    </div>
                    {/* end */}

                    {/* items */}
                    <div id="nav-links" className="flex grow justify-center gap-x-8 text-[16px] font-normal text-[#3B3C4A] dark:text-white">
                        <a className="p-2" href="#">Anasayfa</a>
                        <a className="p-2" href="#">Kategoriler</a>
                        <a className="p-2" href="#">Güncel</a>
                        <a className="p-2" href="#">Kitaplarim</a>
                    </div>
                    {/* end */}

                    {/* search */}
                    <div className="flex">
                        <input style={{
                            outline: "none"
                        }} value={search} onChange={(e) => {
                            setSearch(e.currentTarget.value)
                        }} type="text" placeholder="Ara" className="px-4 flex text-black dark:text-gray-400 bg-[#F4F4F5] dark:bg-[#242535] min-w-[100px] max-w-[105px] p-2 rounded-lt-[5px] rounded-bl-[5px]"/>
                        
                        <img src="./icons/search.svg" alt="search" width={35} className="cursor-pointer bg-[#F4F4F5] dark:bg-[#242535] p-2 rounded-tr-[5px] rounded-br-[5px]" />
                    </div>
                    {/* end */}

                    {/* toggle theme */}
                    <div id="container-theme-toggler" className="relative ml-8 flex items-center bg-[#E8E8EA] w-[70px] dark:bg-[#4B6BFB] h-[40px] rounded-full">
                        <div id="toggler" onClick={handleThemeToggle} className="cursor-pointer bg-white w-[35px] ml-1 h-[30px] mr-1 absolute left-0 flex rounded-full justify-center items-center p-1">
                            <img width={16} src="/icons/light.svg" alt="toggle icon" />
                        </div>
                    </div>
                    {/* end */}
                </div>
            </div>  
            {children}
        </NavbarSearchContext>
    );
}

export { Navbar }