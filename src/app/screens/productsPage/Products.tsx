import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { url } from "inspector";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Stack className="top-content">
              <Box className="text">Burak Restaurant</Box>
              <Box className="search-container">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Type here"
                />
                <Button className="search-button" variant="contained">
                  Search
                </Button>
              </Box>
            </Stack>
          </Stack>
          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
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
                  color={"primary"}
                  className={"order"}
                >
                  DISH
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"order"}
                >
                  SALAD
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"order"}
                >
                  DRINK
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"order"}
                >
                  DESERT
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"order"}
                >
                  OTHER
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
              products.map((ele, index) => {
                return (
                  <Stack key={index} className={"product-card"}>
                    <Stack
                      className={"product-img"}
                      sx={{
                        backgroundImage: `url(${ele.imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                        width: "100%",
                        borderRadius: "0px 50px 0px 0px",
                        position: "relative",
                      }}
                    >
                      <div className={"product-sale"}>Normal size</div>

                      <Button
                        className={"shop-btn"}
                        sx={{ position: "absolute", bottom: 20, left: 100 }}
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
                        <Badge badgeContent={20} color="secondary">
                          <RemoveRedEyeIcon
                            // sx={{ color: 20 ? "gray" : "white" }}
                            sx={{ color: "gray" }}
                          />
                        </Badge>
                      </Button>
                    </Stack>

                    <Box className={"product-desc"}>
                      <span className={"product-title"}>{ele.productName}</span>
                      <div className={"product-desc"}>
                        <MonetizationOnIcon />
                        {12}
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
              count={3} 
              page={1}
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
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"barands-logo"}>
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
