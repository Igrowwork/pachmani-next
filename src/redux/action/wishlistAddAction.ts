import api from "@/lib/axios";

export const addWish = async (id:string) => {
    try{
      const res = await api.post("product/wishlist/"+id);
      // console.log(res.data, "aasda00");
    }
    catch(err){
      console.log(err, "wishlist error")
    }
  }
