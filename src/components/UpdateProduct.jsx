import {useState} from 'react'
import {useEffect} from 'react'
import Client from '../services/api';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'  

const UpdateProduct=({user, sellerProducts, setSellerProducts, productToUpdate})=>{
    // this is a random commment
    // this is another random commment
    const [product,setProduct]=useState([])

    const nav=useNavigate()

    useEffect(()=>{
        const getProduct=async ()=>{
            let res=await axios.get(`http://localhost:3001/api/products/${productToUpdate}`)
            setProduct(res.data)
        }
        getProduct()

    },[])

    const [formValues, setFormValues] = useState({
        name: "",
        units: "",
        quantity: "",
        texture: "",
        productImageUrl: "",
        price: "",
        description: "",
    });
    
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await Client.put(`http://localhost:3001/api/products/update/${product.id}`, {

        name: formValues.name,
        units: formValues.units,
        quantity: formValues.quantity,
        texture: formValues.texture,
        productImageUrl: formValues.productImageUrl,
        price: formValues.price,
        description: formValues.description
        });
        let temp=[...sellerProducts,res.data]
        setSellerProducts(temp)
        nav('/profile')

    
    };



    return (
        <div className="add-product">
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          {/* <label htmlFor="name">~~name~~</label> */}
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder={product.name}
            value={formValues.name}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="units"
            type="text"
            placeholder={product.units}
            value={formValues.units}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="quantity"
            type="text"
            placeholder={product.quantity}
            value={formValues.quantity}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="texture"
            type="text"
            placeholder={product.texture}
            value={formValues.texture}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="productImageUrl"
            type="text"
            placeholder={product.productImageUrl}
            value={formValues.productImageUrl}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="price"
            type="text"
            placeholder={product.price}
            value={formValues.price}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="description"
            type="text"
            placeholder={product.description}
            value={formValues.description}
            required
          />
        </div>
        <button>update</button>
      </form>
    </div>
    )
}

export default UpdateProduct