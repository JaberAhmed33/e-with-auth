
export default function CardBox({ product, removeProduct, dec }) {
    return (
        <div className="cart-card">
            <img src={product?.thumbnail} alt="test" />
            <div className="cart-qty">
                    <span>الكمية</span>
                    {product?.quantity}
                </div>
            <div className="cart-checkout">
                <button className="btn" onClick={() => {
                    removeProduct(product?.id)
                    dec()
                }}>
                    امسح
                </button>
            </div>
        </div>
    )
}
