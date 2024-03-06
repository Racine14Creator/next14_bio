import BgImg from "../../../public/assets/img/dataAnalytics.jpg"


const Contact = () => {
    return (
        <div className="bg-black p-5">
            <div className="container pt-40 min-h-screen max-w-[1000px] m-auto">
                <div className="relative flex justify-between gap-10 w8/12 bg-white overflow-hidden rounded-md">
                    <div className="relative basis-1/2 md:basis-1/2 sm:basis-1 p-5">
                        <h3 className="text-4xl font-bold text-base-100">Contact Us</h3>
                        <form action="" method="post">
                            <div className="group my-10">
                                <label htmlFor="email" className="text-base-100">Email</label>
                                <input type="email" placeholder="Email" className="w-full text-white my-4 form-input border-black bg-base-100 px-4 py-3 rounded-md" />
                            </div>
                            <div className="group my-5">
                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            placeholder="Write your message here..."
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset bg-base-100 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write your message in...</p>
                                </div>
                            </div>
                            <div className="group mt-5">
                                <button
                                    type="submit"
                                    className="rounded-md bg-success px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="relative flex justify-center items-center flex-col text-left basis-1/2 md:basis-1/2 sm:basis-1 w1/2 bg-none bg-center bg-cover" style={{ background: BgImg }}>
                        <h3 className="text-base-100 text-3xl font-bold">Write Us message to</h3>
                        <p>
                            <span className="text-coral-red">Suggest </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium veniam repellat tenetur ipsa accusantium? Minus, explicabo. Itaque, vitae? Quaerat itaque nisi expedita, sed omnis delectus saepe. Numquam dolor a ipsam.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact