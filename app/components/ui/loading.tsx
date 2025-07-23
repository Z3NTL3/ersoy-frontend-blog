import { useNavigation } from "react-router";

// loading spinner
const Loading = () => {
    let nav = useNavigation()
    let isLoading = Boolean(nav.location)

    return (
        <>
            {   isLoading ? <></> : 
                <div className="relative flex flex-col w-screen h-screen justify-center items-center">
                    <svg width={100} viewBox="0 0 384 376" fill="#0575E6" xmlns="http://www.w3.org/2000/svg">
                        <path id="fin" d="M153 9.69999C45.7 -27.1 -1.8 56.3 0.0999992 61C2.1 66 9.1 65 27.1 66C40.6 66.7 55.7 74.8 62.5 78.8C84.2 46.9 115.9 22.4 153 9.69999Z" fill="url(#paint0_linear_0_1)"/>
                        <path id="full" className="hidden" d="M383.1 191C383.1 190.6 383.1 190.1 383 189.6C382.8 186.7 382.1 183.9 381.1 181.4C377.4 170.1 370.2 155.6 372.1 148C379.1 120 371.6 91.9 353.6 69.1C320.5 27 269.2 0 211.6 0C191.1 0 171.4 3.4 153.1 9.7C115.9 22.4 84.3 46.9 62.5 78.8C42.7 107.8 31.1 142.8 31.1 180.5C31.1 182.4 31.1 184.2 31.2 186.1L31.1 186C31.1 290.4 115.7 375 220.1 375C220.1 375 235.7 376.3 272.6 372.5C311.6 368.5 314 360 331.1 360C349.1 360 358.1 366 361.1 362C364.1 358 351.1 334 350.1 318C349.1 302 351.1 274 348.1 275C345.1 276 327.1 296 315.1 306C303.1 316 295.1 319 294.1 322C293.1 325 294.1 331 291.1 333C288.1 335 270.1 343 247.1 343C238.4 343 230.1 341.9 222.1 339.7C166.2 335.8 122.1 289.3 122.1 232.5C122.1 201.9 134.9 174.3 155.4 154.7C155.4 154.7 168.1 173 171.1 193C174.1 213 174.1 229.7 174.6 231.8C175.1 234 178.1 233 180.1 231C182.1 229 211.1 214 218.1 190C225 166.3 228 153.3 227.1 125C227.9 125 228.7 125 229.6 125C279.1 125 320.8 158.5 333.3 204.1C337.8 212.4 346.5 218 356.6 218C371.2 218 383.1 206.1 383.1 191.5C383.1 191.3 383 191.2 383.1 191Z" fill="url(#paint1_radial_0_1)"/>
                        <defs>
                        <linearGradient id="paint0_linear_0_1" x1="26.0054" y1="-5.57011" x2="113.587" y2="66.0942" gradientUnits="userSpaceOnUse">
                        <stop offset="0.2091" stopColor="#2CD5BF"/>
                        <stop offset="1" stopColor="#0575E6"/>
                        </linearGradient>
                        <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(207.054 187.604) scale(181.895)">
                        <stop offset="0.0104921" stopColor="#0575E6"/>
                        <stop offset="1" stopColor="#0575E6"/>
                        </radialGradient>
                        </defs>
                    </svg>
                    
                    <h3 className="text-md font-semibold ml-5 text-center mt-5" id="loading">Zamanin var mi?</h3>
                    <p className="absolute left-1/2 transform -translate-x-1/2 mx-5 bottom-5 font-medium text-[12px] text-[#0575E6] " id="author">z3ntl3</p>
                </div>
            }
        </>
    );
}

export { Loading }