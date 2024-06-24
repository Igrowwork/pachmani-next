import api from "@/lib/axios";
import { IProduct } from "@/lib/types/products";

export const addWish = async (
  id: string,
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
) => {
  try {
    const res = await api.post("product/wishlist/" + id);
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === id ? { ...product, isLike: !product.isLike } : product
      )
    );
    console.log(res, "==");
  } catch (err) {
    console.log(err, "wishlist error");
  }
};
