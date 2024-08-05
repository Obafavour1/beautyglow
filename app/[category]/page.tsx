import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "@/components/ui/button";

// async function getData(category:string){
//   let response = await fetch("https://bokxfsre.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22product%22+%26%26+category-%3Ename+%3D%3D+%22Services%22%5D+%7B%0A++++++++_id%2C%0A++++++++++%22imageUrl%22%3A+images%5B0%5D.asset-%3Eurl%2C%0A++++++++++price%2C%0A++++++++++name%2C%0A++++++++++%22slug%22%3A+slug.current%2C%0A++++++++++%22categoryName%22%3A+category-%3Ename%0A++++++%7D")
//   let data = await response.json();

//   return data;
// }

async function getData(cateogry: string) {
  const query = `*[_type == "product" && category->name == "${cateogry}"] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage ({params}: {params :{category:string}}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 mt-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our products for <span className="text-[#B444FF]">{params.category}</span> 
          </h2>

          {/* <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link> */}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="relative bg-white shadow-md py-4 px-5 rounded">
              <div className="aspect-square w-full overflow-hidden rounded-md lg:h-60">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
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
