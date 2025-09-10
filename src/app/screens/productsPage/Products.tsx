import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch , useSelector} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts} from "./slice";
import {createSelector} from "reselect";
import {retrieveProducts} from "./selector"
import { Product, ProductInquiry } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";


/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsretriever = createSelector(retrieveProducts,(products) => ({
   products, 
}));

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}


export default function Products(props: ProductsProps) {
  const {onAdd} = props
  const {setProducts}= actionDispatch(useDispatch());
  const {products} = useSelector(productsretriever);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
      page: 1,
      limit: 8,
      order: "createdAt",
      productCollection: ProductCollection.DISH,
      search: "",
  });
  const [searchText, setSearchText] = useState<string>("")
  const history = useHistory();



  useEffect(() => {
    const product = new ProductService();
    product.getProducts(productSearch)
    .then((data) => setProducts(data)) 
    .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if(searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch});

    }
  }, [searchText]);

// HANDLERS
const searchCollectionHandler = (collection: ProductCollection) => {
  productSearch.page = 1;
  productSearch.productCollection = collection;
  setProductSearch({ ...productSearch});
}

const searchOrderHandler = (order: string) => {
  productSearch.page = 1;
  productSearch.order = order;
  setProductSearch({ ...productSearch});
  // alert(order)d
}
const searchProductHandler = () => {
  productSearch.search = searchText;
  setProductSearch({...productSearch});
};

const paginationHandler = (e: ChangeEvent<any>, value: number) => {
  productSearch.page = value;
  setProductSearch({...productSearch});
}

const chooseDishHendler = (id: string) => {
  history.push(`/products/${id}`)
}
  return (
    <div className={"products"}>
      <Container >
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Stack className="top-content">
              <Box className="text">Burak Restaurant</Box>
              <Box className="search-container">
                <input
                  type={"search"}
                  className={"search-input"}
                  placeholder={"Type here"}
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value)
                  }}
                  onKeyDown={(e) => {
                    if(e.key === "Enter") searchProductHandler()
                  }}
                />
                <Button 
                  className="search-button"
                  variant="contained"
                  onClick={searchProductHandler}
                >
                  Search
                </Button >
              </Box>
            </Stack>
          </Stack>
          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                className={"order"}
                color={productSearch.order === "createdAt"? "primary" : "secondary"}
                onClick={() => searchOrderHandler("createdAt")}
                >
                New
              </Button>
              <Button
                variant={"contained"}
                className={"order"}
                 color={productSearch.order === "productPrice"? "primary" : "secondary"}
                onClick={() => searchOrderHandler("productPrice")}

              >
                Price
              </Button>
              <Button
                variant={"contained"}
                className={"order"}
                 color={productSearch.order === "productViews"? "primary" : "secondary"}
                onClick={() => searchOrderHandler("productViews")}


              >
                Views
              </Button>
            </Stack>
          </Stack>
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className="category-main">
                <Button
                  variant={"contained"}
                   color={ productSearch.productCollection === ProductCollection.OTHER ?"primary" : 
                    "secondary"
                  }
                  className={"order"}
                   onClick={() => searchCollectionHandler(ProductCollection.OTHER)}>
                  Other
                </Button>
                <Button
                  variant={"contained"}
                   color={ productSearch.productCollection === ProductCollection.DESSERT ?"primary" : 
                    "secondary"
                  }
                  className={"order"}
                  onClick={() => searchCollectionHandler(ProductCollection.DESSERT)}>
                  Dessert
                </Button>
                <Button
                  variant={"contained"}
                  color={ productSearch.productCollection === ProductCollection.DRINK ?"primary" : 
                    "secondary"
                  }
                  className={"order"}
                  onClick={() => searchCollectionHandler(ProductCollection.DRINK)}>
                  Drink
                </Button>
                <Button
                  variant={"contained"}
                  color={ productSearch.productCollection === ProductCollection.SALAD ?"primary" : 
                    "secondary"
                  }
                  className={"order"}
                  onClick={() => searchCollectionHandler(ProductCollection.SALAD)}>
                  Salad
                </Button>
                <Button
                  variant={"contained"}
                  color={ productSearch.productCollection === ProductCollection.DISH ?"primary" : 
                    "secondary"
                  }
                  className={"order"}
                  onClick={() => searchCollectionHandler(ProductCollection.DISH)}>
                  Dish
                </Button>
              </div>
            </Stack>
          </Stack>
          <Stack
            className={"product-wrapper"}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 2,
              padding: 2,
            }}
          >
            {products.length !== 0 ? (
              products.map((product: Product) => {
               const imagePath = `${serverApi}/${product.productImages[0]}`
               const sizeVolume = product.productCollection === ProductCollection.DRINK ? product.productVolume + "litre" : product.productSize +"size"
          
                function stopPropagation() {
                  throw new Error("Function not implemented.");
                }

                return (
                  <Stack key={product._id} className={"product-card"} onClick={() =>chooseDishHendler (product._id)}>
                    <Stack
                      className={"product-img"}
                      sx={{
                        backgroundImage: `url(${imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                        width: "100%",
                        borderRadius: "0px 50px 0px 0px",
                        position: "relative",
                      }}
                    >
                      //e xarifda xato berdi 244 satir
                      <div className={"product-sale"}>{sizeVolume}</div>
                      <Button
                        className={"shop-btn"}
                        sx={{ position: "absolute", bottom: 20, left: 100 }}
                        onClick={() => {
                          onAdd({
                            _id: product._id,
                            quantity:1,
                            name: product.productName,
                            price: product.productPrice,
                            image: product.productImages[0],
                          });
                          stopPropagation();
                        }}
                      >
                        <img
                          src={"/icons/shopping-cart.svg"}
                          alt="cart"
                          style={{ display: "flex", width: 24, height: 24 }}
                        />
                      </Button>

                      <Button
                        className={"view-btn"}
                        sx={{ position: "absolute", bottom: 20, right: 10 }}
                      >
                        <Badge badgeContent={product.productViews} color="secondary">
                          <RemoveRedEyeIcon
                            sx={{ color: product.productViews === 0 ? "gray" : "white", }}
                            // sx={{ color: "gray" }}
                          />
                        </Badge>
                      </Button>
                    </Stack>

                    <Box className={"product-desc"}>
                      <span className={"product-title"}>{product.productName}</span>
                      <div className={"product-desc"}>
                        <MonetizationOnIcon />
                        {product.productPrice}
                      </div>
                    </Box>
                  </Stack>
                );
              })
            ) : (
              <Box className="no-data">New products are not available!</Box>
            )}
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={products.length !== 0 ? productSearch.page + 1 : productSearch.page} 
              page={productSearch.page}
              renderItem={(item) => (
                <PaginationItem
                  components={{  
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"barands-logo"} style={{marginTop: "150px"}}>
        <Container className="family-brands">
          <Box className="category-title">Our Family Brands</Box>
          <Stack
            className="brand-list"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 2,
              marginTop: "70px",
            }}
          >
            <Box className="review-box">
              <img src="/img/gurme.webp" />
            </Box>
            <Box className="review-box">
              <img src="/img/seafood.webp" />
            </Box>
            <Box className="review-box">
              <img src="/img/sweets.webp" />
            </Box>
            <Box className="review-box">
              <img src="/img/doner.webp" />
            </Box>
          </Stack>
        </Container>
      </div>
      <div className={"address"}>
        <Container>
          <Stack className="address-are" sx={{ width: "1300px" }}>
            <Box className="title">Our address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47974.52215811875!2d69.26707855177827!3d41.27823197720393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skr!4v1737127589590!5m2!1sen!2skr"
              width={"1300"}
              height={"600"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
