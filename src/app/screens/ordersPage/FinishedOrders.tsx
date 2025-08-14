// import React from "react";
// import { Box, Stack } from "@mui/material";
// import Button from "@mui/material/Button";
// import TabPanel from "@mui/lab/TabPanel";
// import moment from "moment";

// export default function FinishedOrders() {
//   return (
//     <TabPanel value={"3"}>
//       <Stack>
//         {[1, 2].map((ele, index) => {
//           return (
//             <Box key={index} className={"order-main-box"}>
//               <Box className={"order-box-scroll"}>
//                 {[1, 2, 3].map((ele2, index2) => {
//                   return (
//                     <Box key={index2} className={"orders-name-price"}>
//                       <img
//                         src={"/img/kebab.webp"}
//                         className={"order-dish-img"}
//                       />
//                       <p className={"title-dish"}>kebab</p>
//                       <Box className={"price-box"}>
//                         <p>$12</p>
//                         <img src={"/icons/close.svg"} />
//                         <p>2</p>
//                         <img src={"/icons/pause.svg"} />
//                         <p style={{ marginLeft: "15px" }}>$24</p>
//                       </Box>
//                     </Box>
//                   );
//                 })}
//               </Box>

//               <Box className={"total-price-box"}>
//                 <Box className={"box-total"}>
//                   <p>Product price</p>
//                   <p>$24</p>
//                   <img
//                     src={"/icons/plus.svg"}
//                     style={{ marginLeft: "20px" }}
//                   ></img>
//                   <p>deliveri cost</p>
//                   <p>$2</p>
//                   <img
//                     src={"/icons/pause.svg"}
//                     style={{ marginLeft: "20px" }}
//                   />
//                   <p>Total</p>
//                   <p>$26</p>
//                 </Box>
//               </Box>
//             </Box>
//           );
//         })}

//         {false && (
//           <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
//             <img
//               src={"/icons/noimage-list.svg"}
//               style={{ width: 300, height: 300 }}
//             />
//           </Box>
//         )}
//       </Stack>
//     </TabPanel>
//   );
// }


import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

export default function FinishedOrders() {
  return (
    <TabPanel value={"3"}>
      <Stack>
        <Box className={"order-main-box"}>
          <Box className={"order-box-scroll"}>
            {['Fried chicken', 'Winner', 'Stack'].map((item, index) => (
              <Box key={index} className={"orders-name-price"}>
                <img src={"/img/lavash.webp"} className={"order-dish-img"} />
                <p className={"title-dish"}>{item}</p>
                <Box className={"price-box"}>
                  <p>$10</p>
                  <img src={"/icons/close.svg"} />
                  <p>2</p>
                  <img src={"/icons/pause.svg"} />
                  <p style={{ marginLeft: "15px" }}>$20</p>
                </Box>
              </Box>
            ))}
          </Box>

          <Box className={"total-price-box"}>
            <Box className={"box-total"}>
              <p>Product price</p>
              <p>$60</p>
              <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
              <p>Delivery cost</p>
              <p>$5</p>
              <img src={"/icons/pause.svg"} style={{ marginLeft: "20px" }} />
              <p>Total</p>
              <p>$65</p>
            </Box>
          </Box>
        </Box>
        <Box className={"order-main-box"}>
          <Box className={"order-box-scroll"}>
            {['Fried chicken', 'Winner', 'Stack'].map((item, index) => (
              <Box key={index} className={"orders-name-price"}>
                <img src={"/img/lavash.webp"} className={"order-dish-img"} />
                <p className={"title-dish"}>{item}</p>
                <Box className={"price-box"}>
                  <p>$10</p>
                  <img src={"/icons/close.svg"} />
                  <p>2</p>
                  <img src={"/icons/pause.svg"} />
                  <p style={{ marginLeft: "15px" }}>$20</p>
                </Box>
              </Box>
            ))}
          </Box>

          <Box className={"total-price-box"}>
            <Box className={"box-total"}>
              <p>Product price</p>
              <p>$60</p>
              <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
              <p>Delivery cost</p>
              <p>$5</p>
              <img src={"/icons/pause.svg"} style={{ marginLeft: "20px" }} />
              <p>Total</p>
              <p>$65</p>
            </Box>
          </Box>
        </Box>
      </Stack>
    </TabPanel>
  );
}