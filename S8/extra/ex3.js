
fetch('http://localhost:3000/products/')
.then(respon=>respon.json())
.then(productos =>{
    repintar(productos)
})




let elProducto=[]
id=[]
const repintar = (productos) =>{
    for (const producto of productos) {
        const idProduct=producto.id +producto.name
        id=`${producto.id}`
       elProducto=idProduct
        

      }

}
console.log(id)
        console.log(elProducto)






fetch('http://localhost:3000/orders')
    .then(res => res.json())
    .then(ordersD => {
      
      pintar(ordersO(ordersD));
      
    });

    const ordersO = (ordersD) => {
      return ordersD.sort((a,b)=> new Date(a.date)-new Date(b.date))
    }





const pintar = (ordersO) => {
  for (const order of ordersO) {
    const div$$ = document.createElement("div");
    const arrayOrder =order.products;
    console.log(arrayOrder)
    
    finalOrder=[...arrayOrder,...elProducto]
    console.log(finalOrder)
    for (const orderProducts of arrayOrder) {
      
     
      console.log()
        div$$.innerHTML = `<h3>id :${order.name}</h3>
                            <h5>date :${order.date}</h5>
                            <p>productId : ${orderProducts.productId}</p>
                            <p>quantity :${orderProducts.quantity}</p>`

    
                        }

                        
    
   
                        document.body.appendChild(div$$)

   

    
  }

}
