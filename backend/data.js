import bcrypt from "bcryptjs"
const data={
    users:[{
        name:"aniruddha",
        email:"patil@gmail.com",
        password: bcrypt.hashSync("1234",8),
        isAdmin:true
    },
    {
        name:"harshwardhan",
        email:"patilYFH@gmail.com",
        password: bcrypt.hashSync("1234",8),
        isAdmin:false
    }
    ],
    product:[
        {
            
            name:"Nike Slim Shirt",
            category:"Shirts",
            image:"/images/p1.jpg",
            price:120,
            CountInStock:10,
            brand:"nike",
            rating:5,
            numReviews:10,
            decsription:"high quality product"
            

        },
        {
            
            name:"addidas fit Shirt",
            category:"Shirts",
            image:"/images/p2.jpg",
            price:100,
            CountInStock:17,
            brand:"nike",
            rating:4,
            numReviews:10,
            decsription:"high quality product"


        },
        {
            
            name:"Lacoste free Shirt",
            category:"Shirts",
            image:"/images/p3.jpg",
            price:220,
            CountInStock:0,
            brand:"Lacoste",
            rating:2.5,
            numReviews:17,
            decsription:"high quality product"


        },
        {
            
            name:"Nike Slim pant",
            category:"Pants",
            image:"/images/p4.jpg",
            price:78,
            CountInStock:20,
            brand:"nike",
            rating:3.4,
            numReviews:10,
            decsription:"high quality product"


        },
        {
            
            name:"puma Slim Shirt",
            category:"Pants",
            image:"/images/p5.jpg",
            price:65,
            CountInStock:40,
            brand:"puma",
            rating:4.5,
            numReviews:10,
            decsription:"high quality product"


        },
        {
            
            name:"Addidas fit pant",
            category:"Pants",
            image:"/images/p6.jpg",
            price:139,
            CountInStock:7,
            brand:"Addidas",
            rating:4.5,
            numReviews:15,
            decsription:"high quality product"


        },
        

    ],
}
export default data;