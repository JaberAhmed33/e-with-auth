import { Link } from "react-router";
import "./products.css";
import useStore from "../../store/cartStore";
import { useMemo } from "react";
export default function ProductCard({ product }) {
    const inc = useStore((state) => state.inc);
    const addProduct = useStore((state) => state.addProduct);
    const products = useStore((state) => state.products);
    const incQty = useStore((state) => state.incQty);
    const decQty = useStore((state) => state.decQty);

    //   const [quantity, setQuantity] = useState(1);

    const isSelected = useMemo(() => {
        return products?.find((item) => item?.id === product?.id);
    }, [products, product?.id]);

    return (
        <div className="card">
            <div className="card-image">
                <img src={product?.thumbnail} alt={product?.title} loading="lazy" />
            </div>
            <Link to={`/products/${product?.id}`}>
                <div className="card-content">
                    <div className="card-text">
                        <h2 className="card-title">{product?.title}</h2>
                        <p className="card-description">{product?.description}</p>
                        <p className="card-price">${product?.price}</p>
                    </div>
                </div>
            </Link>
            <div className="card-button-container ">
                {isSelected ? (
                    <div className="quantity-container dark:!bg-slate-500 dark:text-black">
                        <button
                            disabled={isSelected?.quantity === 1}
                            className="quantity-btn"
                            onClick={() => {
                                decQty(product?.id);
                            }}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            className="quantity-input dark:!bg-slate-500"
                            value={isSelected?.quantity || 1}
                            readOnly
                            min={1}
                        />
                        <button
                            className="quantity-btn"
                            onClick={() => {
                                incQty(product?.id);
                            }}
                        >
                            +
                        </button>
                    </div>
                ) : (
                    <button
                        className="order-btn"
                        onClick={() => {
                            inc();
                            addProduct(product);
                        }}
                    >
                        اطلب الان
                    </button>
                )}

            </div>
        </div>
    );
}
