import { useEffect, useState } from "react";

function Allproducts() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [data, setData] = useState([]);
  async function fetchproduct() {
    try {
      const data = await fetch(apiUrl + "/products");
      if (!data.ok) {
        throw new Error("error is coming");
      }
      const finaldata = await data.json();
      setData(finaldata);
    } catch (error) {
      console.log("this is error" + error);
    }
  }

  useEffect(() => {
    fetchproduct();
  }, []);
  const products = data.map((product) => (
    <div key={product.id} style={{ border: "1px solid black", width: "400px",margin:"10px" }}>
      <p> title:{product.title}</p>
      <img src={product.image} alt="" style={{ height: "100px" }} />
      <p>price: {product.price}</p>
      <p> description:{product.description}</p>
      <p>category:{product.category}</p>
    </div>
  ));
  return <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>{products}</div>;
}

export default Allproducts;
