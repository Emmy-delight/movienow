import Image from "next/image"

export default function HomePage () {
    return (
       <main>
         <div className="bg-[url('/ashoebi.jpg')] h-[100vh] bg-cover bg-no-repeat">
          <p className="text-3xl font-bold">Welcome to our Fashion House</p>
         </div> 
          <h1 className="text-4xl font-bold text-center text-blue-300">Welcome to my Fashion House</h1>
          <div className="grid grid-cols-3">
            <div className="w-[400px] h-[400px] rounded-md bg-amber-100 shadow-2xl shadow-gray-200 ">
              <Image
              width={400}
              height={350}
              src="/ashoebi.jpg"
              alt="image"
              className="rounded-md"
              />
              <p className="text-sm font-semibold">Our Products are the best </p>
            </div>
              <div className="w-[400px] h-[400px] rounded-md bg-amber-100 shadow-2xl shadow-gray-200 ">
              <Image
              width={400}
              height={350}
              src="/ashoebi.jpg"
              alt="image"
              className="rounded-md"
              />
              <p className="text-sm font-semibold">Our Products are the best </p>
            </div>
              <div className="w-[400px] h-[400px] rounded-md bg-amber-100 shadow-2xl shadow-gray-200 ">
              <Image
              width={400}
              height={350}
              src="/ashoebi.jpg"
              alt="image"
              className="rounded-md"
              />
              <p className="text-sm font-semibold">Our Products are the best </p>
            </div>
          </div>

       </main>
       
    )
}