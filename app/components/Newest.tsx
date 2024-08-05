import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../utilities/formatCurrency";

async function getData() {
  const query = `*[_type == "product"] [0...4] | order(_createdAt desc)[0...4] {
    _id,
      price,
    name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const data:simplifiedProduct[] = await getData();

  return (
    
    <div className="bg-gray-100 maxContainer lg:px-32">
      <div className=" px-4 py-16 sm:px-6 sm:py-24 ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className=" relative  bg-white shadow-md py-4 px-5 rounded">
              <div className="aspect-square w-full overflow-hidden rounded-md lg:h-60">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-cover object-center   lg:h-[200px] lg:w-[200px] mx-auto rounded-md"
                  width={300}
                  height={250}
                />
              </div>

              <div className="mt-4 ">
                <div className="flex justify-between">
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm font-medium text-gray-900">
                    {formatCurrency (product.price)}
                  </p>
                 
                </div>
                <div  className="flex justify-between mt-4">
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                  <Link href={`/product/${product.slug}`} className="bg-purple-900 py-2 px-4 rounded-lg text-[white] text-[14px]">View</Link>

                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}