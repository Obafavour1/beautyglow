
import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import hero from '../assests/hero.jpeg'

// async function getData() {
//   const query = "*[_type == 'heroImage'][0]";

//   const data = await client.fetch(query);
//   return data;
  
// }

// async function getData() {
//   const query = "*[_type == 'heroImage'][0]";
//   const data = await client.fetch(query);

//   return data;
// }

export default async function Hero() {
  // const data = await getData();
  
  return (
    <section className=" bg-[#f3e7f8] pb-2  max-sm:min-h-screen maxContainer px-4 md:px-32">
      <div className=" flex flex-wrap-reverse  md:mb-1 ">
        <div className="md:mb-2  flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-2/3 pb-6 lg:pt-10">
          <h1 className=" font-bold text-black sm:text-2xl leading-normal md:mb-8 md:text-5xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality products for you.
            We are the best so come and shop with us.
          </p>
        </div>

        <div className=" flex w-full h-full md:mb-16 lg:w-1/3">
          <div >
            <Image src={hero} alt="Hair" width={250} height={200} className="mt-24 rounded-md md:rounded-full h-full w-[100vw]  mx-auto  md:block max-sm:h-[300px]" />
            {/* <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            /> */}
          </div>

          {/* <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div> */}
        </div>
      </div>

      <div className="flex   items-center justify-between gap-8 md:flex-row">
        <div className="flex  h-12 w-80  overflow-hidden rounded-lg border-[1px] border-purple-100 shadow-md">
          <Link
            href="/Human"
            className="flex w-1/3 items-center justify-center  text-gray-500 transition duration-300 hover:bg-purple-300 hover:text-white active:bg-gray-200"
          >
            Human Hair
          </Link>
          <Link
            href="/Synthetic"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-300  hover:bg-purple-300 hover:text-white active:bg-gray-200"
          >
            Hair Blend
          </Link>
          <Link
            href="/Services"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-300 hover:bg-purple-300 hover:text-white active:bg-gray-200"
          >
            Services
          </Link>
        </div>
      </div>
    </section>
  );
}
