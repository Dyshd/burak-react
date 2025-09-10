import axios from "axios"
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/product";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";

class OrderService { 
    private readonly path: string;

    constructor(){
        this.path = serverApi;
    }
}

export default OrderService;