
type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="flex flex-1 justify-center">
        <div className="bg-white my-8 mx-4 px-2 py-4 md:px-28 md:py-6 rounded-lg shadow-2xl">
            <h1 className="text-3xl md:text-4xl text-center">SignUp to access your account</h1>
            <div className="flex flex-auto justify-center my-4">

            </div>
            <form action="" className="flex flex-col md:mx-16">
              <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="text" name="name" placeholder="Name" id="" />

                <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="email" name="email" placeholder="Email" id="" />
                <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="password" name="password" placeholder="Password" id="" />
                <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="password" name="password" placeholder="Repeat Password" id="" />

                <button className='bg-sky-600 text-white py-1 px-2 my-2 rounded-md'>Sign In</button>




            </form>

        </div>
    </div>
  )
}

export default SignUp