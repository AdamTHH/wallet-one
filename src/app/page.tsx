import ColorfulLabel from "@/components/ColorfulLabel";
import PageContainer from "@/components/PageContainer";
import StackDrawer from "@/components/StackDrawer";
import { Button } from "@/components/ui/button";
import { defaultProducts, noImage } from "@/constants";
import { db } from "@/db";
import { productsTable } from "@/db/schema";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await db.select().from(productsTable);

  return (
    <PageContainer>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {(products.length == 0 ? defaultProducts : products).map((product, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center justify-center shadow-xl rounded-xl p-5">
            <img src={product.image || noImage} className="lg:w-1/3 lg:h-auto" />
            <div className="lg:ml-8 mt-4 lg:mt-0 text-center lg:text-left">

              <h1 className="text-xl font-bold">
                {product.title.toUpperCase().max(50)}
              </h1>

              <ColorfulLabel>
                <span>{product.date}</span>
                <span className="ml-3 text-gray-custom">Mark De Leon</span>
              </ColorfulLabel>

              <p className="text-gray-custom lg:max-w-[20vw] text-justify break-all">
                {product.description.slice(0, 250)}
              </p>

              <Link href={`/termekek/${encodeURIComponent(product.title)}`}>
                <Button className="mt-5">Megnyitás</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}