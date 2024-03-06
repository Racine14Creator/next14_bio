"use client"

import Image from "next/image"
import { Typewriter, Cursor } from "react-simple-typewriter"


const people = [
    {
        name: 'Grace Bisimwa',
        role: 'Co-Founder / CEO',
        imageUrl:
            '/assets/img/ceo.jpeg',
    },
    {
        name: 'Diane Uwase',
        role: 'Finance mananger',
        imageUrl:
            '/assets/img/Diane.jpg',
    },
    {
        name: 'Peter Kahumuza',
        role: 'Co-Founder / Director of Finance',
        imageUrl: '/assets/img/Peter.jpg',
    },
    {
        name: 'Bahizi Kananda',
        role: 'Chef of Digital Marketing',
        imageUrl:
            '/assets/img/Bahizi.jpg',
    },
    {
        name: 'Germain Chiruza',
        role: 'IT Maintance Chef',
        imageUrl:
            '/assets/img/NoImage.jpg',
    },

]
export default function Teams() {

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Meet our <span className="text-success font-normal">
                            <Typewriter
                                words={['leadership', 'Co-founders', 'Partners', "Chefs", "Managers"]}
                                loop={5}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        <span className="text-primary">
                            <Cursor />
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                        suspendisse.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <Image
                                    width={200}
                                    height={200}
                                    className="h-16 w-16 rounded-full object-fill"
                                    src={
                                        person.imageUrl ||
                                        "/asstes/img/NoImage.jpg"
                                    }
                                    alt={person.name}
                                />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}