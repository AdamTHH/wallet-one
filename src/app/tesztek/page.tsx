import { db } from "@/db";
import { productsTable } from "@/db/schema";
import { AddProduct } from "./addProduct";
import { Button } from "@/components/ui/button";
import { RemoveAllproducts } from "./RemoveAllProducts";
import PageContainer from "@/components/PageContainer";

export default function AdminPage() {
  async function addProduct(formData: FormData) {
    "use server";



    try {
      await db.insert(productsTable).values({
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        date: formData.get("date") as string,
        image: formData.get("image") as string,
      });
      console.log("success");
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async function removeAllProducts() {
    "use server";
    try {
      await db.delete(productsTable);
      console.log("success");
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <PageContainer>
      <AddProduct onSubmit={addProduct} />
      <RemoveAllproducts onSubmit={removeAllProducts} />
    </PageContainer>
  );
}
