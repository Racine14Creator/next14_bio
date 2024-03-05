import Image from "next/image"

const people = [
    {
        name: 'Grace Bisimwa',
        role: 'CEO',
        imageUrl:
            'https://avatars.githubusercontent.com/u/148460524?v=4',
    },
    {
        name: 'Diane Uwase',
        role: 'Finance mananger',
        imageUrl:
            '',
    },
    {
        name: 'Peter Kahumuza',
        role: 'Co-Founder / Director of Finance',
        imageUrl: '',
    },
    {
        name: 'Bahizi Kananda',
        role: 'Chef of Digital Marketing',
        imageUrl:
            '',
    },
    {
        name: 'Germain Chiruza',
        role: 'IT Maintance Chef',
        imageUrl:
            '',
    },

]

export default function Teams() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
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
                                    width={16}
                                    height={16}
                                    className="h-16 w-16 rounded-full"
                                    src={
                                        person.imageUrl ?
                                            person.imageUrl :
                                            '/asstes/img/NoImage.jpg'
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