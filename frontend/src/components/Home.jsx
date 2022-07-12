import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import { Button, DisabledButton } from "./Button";

const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 products">
            {
              data && data?.map((product) => (
                <div className="p-4 lg:w-1/3" key={product.id}>
                  <div className="h-full bg-gray-200 bg-opacity-75 px-5 pt-5 pb-5 rounded-lg overflow-hidden text-center relative">
                    <div>
                      <img src={"https://electronic-ecommerce.herokuapp.com/" + product.image} alt={product.name} className="object-contain h-48 w-96"></img>
                    </div>
                    <div className="mt-5">
                      <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                        CATEGORY : {product.category[1]}
                      </h2>
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                        {product.name}
                      </h1>
                      <h3 className="leading-relaxed text-lg">Price: {product.price}</h3>
                      <h3 className="leading-relaxed text-lg">Stock: {
                        product.stock <= 0 ? <p className="text-red-700">Out of stock</p> : <p>{product.stock}</p>
                      }
                      </h3>
                      <h3 className="leading-relaxed mb-3 text-lg">Created Date: {product.createDate} </h3>
                    </div>
                    {
                      product.stock <= 0 ?
                        <DisabledButton disabled >Add to Cart</DisabledButton>
                        :
                        <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
