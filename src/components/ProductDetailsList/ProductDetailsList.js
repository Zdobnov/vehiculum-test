import "./ProductDetailsList.scss";

const ProductDetailsList = ({ productDetails }) => (
  <>
    <div className="product-details-list__title">
      Description
    </div>
    <ul className="product-details-list__wrapper">
      <li className="product-details-list__item">
        <span>Color</span>
        <span>
          <span className="product-details-list__color" style={{ backgroundColor: productDetails.color }}/>
          {productDetails.color}
        </span>
      </li>
      <li className="product-details-list__item">
        <span>Year</span>
        <span>
          {productDetails.year}
        </span>
      </li>
      <li className="product-details-list__item">
        <span>Seats</span>
        <span>
          {productDetails.seats}
        </span>
      </li>
      <li className="product-details-list__item">
        <span>Power</span>
        <span>
          {productDetails.power.amount} HP
        </span>
      </li>
      <li className="product-details-list__item">
        <span>Fuel Type</span>
        <span>
          {productDetails.fuelType}
        </span>
      </li>
      <li className="product-details-list__item">
        <span>Gear Type</span>
        <span>
          {productDetails.gearType}
        </span>
      </li>
    </ul>
  </>
);

export default ProductDetailsList;
