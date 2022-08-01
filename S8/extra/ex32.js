let Allorders={}
let idProduct={}

fetch('http://localhost:3000/products/')
.then(respon=>respon.json())
.then(productos =>{
    console.log(productos)
    repintar(productos)
   
})

fetch('http://localhost:3000/orders')
    .then(res => res.json())
    .then(ordersD => {console.log(ordersD)
     pintar(ordersO(ordersD))
    }
    )

    const ordersO = (ordersD) => {
        return ordersD.sort((a,b)=> new Date(a.date)-new Date(b.date)) }
    


        const repintar = (productos) =>{
            for (const producto of productos) {
                 idProduct=producto.id + producto.name
                console.log(idProduct)
        
              }
        
        }

        const pintar = (ordersO) => {
            for (const order of ordersO) {
             const div$$ = document.createElement("div");
             const arrayOrder =order.products;
              
              for (const orderProducts of arrayOrder) {
                
               
            console.log()
          div$$.innerHTML = `<h3>id :${Allorders.name}</h3>
                             <h5>date :${order.date}</h5>
                             <p>productId : ${orderProducts.productId}</p>
                          <p>quantity :${orderProducts.quantity}</p>`
          
              
                                  }
          
            document.body.appendChild(div$$)
          
             
          
              
            }
          
          }
          