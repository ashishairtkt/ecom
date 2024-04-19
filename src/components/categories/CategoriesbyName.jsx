import { useParams } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { useAxiosFetch } from "../../hooks/useAxiosFetch";
import Loader from "../../utils/loader";

import { FaRegHeart } from "react-icons/fa";
import Rating from "react-rating";
export default function CategoriesbyName() {
  let { Category_name } = useParams();

  const { data, isLoading, error } = useAxiosFetch(
    `https://dummyjson.com/products/category/${Category_name}`
  );
  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error fetching data</div>;

  console.log(data, "data");
  return (
    <div className="purchase_card">
      <h2 className="purchase_card_title">Shop Products by {Category_name}</h2>
      <div className="purchase_card_section">
        {data &&
          data?.products.map((product, i) => {
            let finalPrice = product.price - product.discountPercentage;
            return (
              <div
                className="purchase_Card"
                key={i}
                onClick={() => console.log("hi")}
              >
                <div className="add_fav">
                  {" "}
                  <FaRegHeart />
                </div>

                <div className="purchase_card_img">
                  <Image fluid src={product.thumbnail} alt="img" />
                </div>

                <div className="card_description">
                  <p className="card_title">{product.title} </p>

                  <div className="card_price">
                    <p className="card_dis_price">${finalPrice}</p>
                    <p className="card_before">${product.price}</p>
                  </div>
                  <p className="card_off">${product.discountPercentage} off</p>
                  <p className="card_rating">
                    <Rating
                      initialRating={product.rating}
                      readonly
                      emptySymbol="fa fa-star-o fa-2x "
                      fullSymbol="fa fa-star fa-2x icon"
                      fractions={2}
                    />
                  </p>
                  <div className="card_bottom">
                    {" "}
                    {/* <p className="instock"></p>+ -{" "} */}
                    <Button variant="dark">Add to cart</Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
