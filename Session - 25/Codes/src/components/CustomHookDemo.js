import { useFetchData } from "../hooks/useFetchData"

export default function CustomHookDemo()
{
    const {data} = useFetchData("http://fakestoreapi.com/products");

    return(
        <div className="container-fluid">
            {console.log(data)}
            <h2>Products</h2>
            <ol>
                {
                    // console.log(data)
                    // data.map(product=>
                    //     <li >{product.title}</li>
                    //     )
                }
            </ol>
        </div>
    )
}

