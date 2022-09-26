import { useRecordContext } from "react-admin";

const AdminProductImage = () => {
    const record = useRecordContext();
    let { img, name } = record;
    img = JSON.parse(img)[0]

    return (
        <>
            <img 
                style={{width: "60px", height: "60px"}}
                src={`https://newtechshop.s3.eu-north-1.amazonaws.com/${img}`} 
                alt={name}
            />
        </>
    )
}

export default AdminProductImage;