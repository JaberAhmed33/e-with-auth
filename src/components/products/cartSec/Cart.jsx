import { useMemo } from "react";
import useStore from "../../../store/cartStore"
import CardBox from "./CardBox";

export default function Cart() {
    const products = useStore((state) => state?.products);
    const removeProduct = useStore((state) => state?.removeProduct);
    const dec = useStore((state) => state?.dec);
    const reset = useStore((state) => state?.reset);

    console.log("products", products);

    const total = useMemo(() => {
        return products?.reduce((acc, product) => (acc + product?.price) * product?.quantity, 0);
    }, [products]);

    return (
        <div className="cart-container">
            <div className="cart-products">
                {
                    products?.map((product, index) => (
                        <CardBox key={index} product={product} removeProduct={removeProduct} dec={dec} />
                    ))
                }

            </div>
            <div className="cart-actions">
                
                <div className="cart-total">
                    <span>المجموع</span>
                    {total.toFixed(2)}
                </div>

                <div className="my-4">
                    <button className="btn bg-red-700 cursor-pointer" onClick={() => reset()}>مسح السلة</button>
                </div>
            </div>
        </div>
    )
}
