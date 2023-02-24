import Header from '../Components/header/Header';
import Categories from '../Components/categories/Categories'
import Products from '../Components/products/Products';
import CartTotals from '../Components/cart/CartTotals';

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="home flex md:flex-row flex-col justify-between px-6 gap-10 mb-6 ">
                <div className="categories  overflow-auto max-h-[calc(100vh_-_112px)] md:pb-64">
                    <Categories />
                </div>
                <div className="products flex-[8] max-h-[calc(100vh_-_130px)] overflow-y-auto pb-10 ">
                    <Products />
                </div>
                <div className="cart-wrapper  min-w-[300px] md:-mr-[24px] md:-mt-[20px] border">
                    <CartTotals />
                </div>
            </div>
        </>
    )
}
export default HomePage;
