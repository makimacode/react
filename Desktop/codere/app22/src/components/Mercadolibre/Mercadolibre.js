import {useState, useEffect } from "react"


const Mercadolibre = () => {
const [products, Setproducts] = useState ([])
const [input, setInput] = useState('')
     //useEffect (() => {
       // fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares')
      // .then(response => {
       // return response.json()
      // }).then(res => {
       // Setproducts(res.results.slice(0, 10))
    //   }) 
        
        
        
     //   .catch(error =>{
         //   console.log(error)
    //    })

  //  }, [ ])
   
   console.log(products)
   const handleSearch= () => { fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
   .then(response => {
    return response.json()
   }).then(res => {
    Setproducts(res.results.slice(0, 10))
   })
    
    
    
    .catch(error =>{
        console.log(error)
    })

   }
   
    return (
     <div>
        <h1>Mercadolibrepapa</h1>
       <input value={input} onChange={(e) => setInput(e.target.value)}/>
       <button onClick={(handleSearch)}>Buscar</button>
        {products.map(product => 
        <div key={product.id}>
            <img src={product.thumbnail} alt={product.title}/>
            {product.title}</div>)}
    
     </div>
    )
}

export default Mercadolibre

