import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Wrapper from "../../components/Wrapper/Wrapper";
import { getProductDetails } from "../../utils/api";
import {
  currencyFormatter,
  vehicleMakeModelFormatter,
} from "../../utils/vehicleHandler";
import ProductDetailsList from "../../components/ProductDetailsList/ProductDetailsList";
import Carousel from "../../components/Carousel/Carousel";

import "./ProductDetails.scss";

import Spinner from '../../images/spinner.svg';


const ProductDetails = () => {
  let { id } = useParams();

  const [productDetails, setProductDetails] = useState(null);
  
  useEffect(() => {
    getProductDetails(id)
      .then(data => {
        setProductDetails(data);
      });
  }, [id]);

  const renderProductDetails = () => {
    const { make, model } = vehicleMakeModelFormatter(productDetails.model);
    const rate = currencyFormatter(productDetails.grossMonthlyRate);

    return (
      <>
        <div className="product-details__wrapper">
          <h2 className="product-details__make">
            {make}
          </h2>
          <h1 className="product-details__model">
            {model}
          </h1>
          <Carousel productDetails={productDetails} />
          <div className="product-details__rate">
            {rate}
          </div>
        </div>
        <ProductDetailsList productDetails={productDetails} />
      </>
    );
  }

  return (
    <Wrapper className="product-details">
      {productDetails ? (
        renderProductDetails()
      ) : (
        <img src={Spinner} alt="spinner"/>
      )}
    </Wrapper>
  );
};

export default ProductDetails;
