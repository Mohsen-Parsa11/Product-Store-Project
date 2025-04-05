import Container from "@/components/Container";
import Link from "next/link";
import { Iproducts } from "@/server-type/type";

async function Store() {
  const result = await fetch(`https://dummyjson.com/products?limit=15`);
  const data = (await result.json()) as Iproducts;

  return (
    <div>
      <Container>
        <h3 className="text-2xl text-slate-600 mt-10 font-semibold">
          You & Me Shop
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
          {data.products.map((item) => (
            <div key={item.id} className="border shadow-lg rounded-md p-2">
              <Link href={`/store/${item.id}`}>
                <img
                  src={item.thumbnail}
                  alt="image"
                  className="rounded my-2 h-40 mx-auto w-fit"
                />
                <h3 className="text-xl font-semibold line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-lg font-semibold">${item.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
