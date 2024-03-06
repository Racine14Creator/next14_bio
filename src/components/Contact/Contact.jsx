import BgImg from "../../../public/assets/img/dataAnalytics.jpg"


const Contact = () => {
    return (
        <div className="bg-black p-5">
            <div className="container pt-40 min-h-screen max-w-[1000px] m-auto">
                <div className="relative flex justify-between gap-10 w8/12 bg-white overflow-hidden rounded-md">
                    <div className="relative basis-1/2 md:basis-1/2 sm:basis-1 p-5">
                        <h3>Form</h3>
                        <form action="" method="post">
                            <input type="email" placeholder="Email" className="w-full my-10 form-input border-black bg-base-100 px-4 py-3 rounded-md" />
                        </form>
                    </div>
                    <div className="relative basis-1/2 md:basis-1/2 sm:basis-1 w1/2 bg-none bg-center bg-cover" style={{ background: BgImg }}>
                        <h3>Image</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium veniam repellat tenetur ipsa accusantium? Minus, explicabo. Itaque, vitae? Quaerat itaque nisi expedita, sed omnis delectus saepe. Numquam dolor a ipsam.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact