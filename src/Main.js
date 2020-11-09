const products=[
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:1
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:2
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:4.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    }

];
export default function Main() {
    return (
        <section className="section main">
            <div className="container">
                <h1 className="grid-title">Grid</h1>
                <div className="row">
                    {
                        products.map(function (e,i) {
                            return (
                                <div className="col-md-4">
                                    <div className="item text-center">
                                        <img className="product-image" src={e.image}/>
                                        <h2 className="product-name">{e.name}</h2>
                                        <div className="star">
                                            <div className="star-box">
                                                <div className="star-rate" style={{width:(e.star/5*100)+"%"}}></div>
                                            </div>
                                        </div>
                                        <p className="price">${e.price}</p>
                                        <a href="#" className="add-to-cart text-uppercase">Add To Cart</a>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}