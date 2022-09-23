import { useEffect } from "react";
import { useGetAllOrderQuery } from "../store/api/sushiApi";

const OrderPage = () => {
    const { data, error, isLoading } = useGetAllOrderQuery();

    useEffect(() => {
        console.log(data);
    }, [data])
    

    return (
        <>
            Order
        </>
    )
}
export default OrderPage;