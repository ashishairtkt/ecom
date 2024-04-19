import { Image } from "react-bootstrap";
import { useAxiosFetch } from "../../hooks/useAxiosFetch";
import Loader from "../../utils/loader";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useAxiosFetch(
    "https://dummyjson.com/products/categories"
  );

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="categories_container">
      <h2 className="categories_title">Shop by Categories</h2>
      <div className="categories_section">
        {data &&
          data.map((category, i) => (
            <div
              className="categories_Card"
              key={i}
              onClick={() => navigate(`/Categories/${category}`)}
            >
              <div className="categories_img">
                <Image
                  fluid
                  src="https://via.placeholder.com/200x200"
                  alt="img"
                />
              </div>
              <div className="card__overlay">
                <h3>{category}</h3>
                <p className="para">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
