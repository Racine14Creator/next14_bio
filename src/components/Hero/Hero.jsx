"use client"

import Image from "next/image"
import { Typewriter, Cursor } from "react-simple-typewriter"

const Hero = () => {
    return (

        <div className="container max-w-[1000px] m-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image width={750} height={550} src="/assets/img/dataAnalytics.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Racine14 Tech
                        </h1>
                        <h1 className="text-left font-normal text-2xl">
                            <span className="text-success">
                                <Typewriter
                                    words={["Solutions", "Analysis", "Security", "Contract..."]}
                                    loop={false}

                                />
                            </span>
                            <span className="text-danger"><Cursor /></span>
                        </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero