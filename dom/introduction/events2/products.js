const groceryProducts = [
    {
        name: 'Gala Apples',
        price: 1.99,
        description: 'Fresh and crisp Gala apples, perfect for snacking or baking.'
    },
    {
        name: 'Whole Wheat Bread',
        price: 2.49,
        description: 'Nutritious whole wheat bread, great for sandwiches and toast.'
    },
    {
        name: 'Organic 2% Milk',
        price: 3.50,
        description: 'Creamy and organic 2% milk, sourced from local dairy farms.'
    },
    {
        name: 'Free-Range Brown Eggs',
        price: 2.99,
        description: 'High-quality free-range brown eggs, rich in nutrients.'
    },
    {
        name: 'Penne Pasta',
        price: 1.79,
        description: 'Versatile penne pasta, ideal for various pasta dishes.'
    },
    {
        name: 'Salmon Fillet',
        price: 8.99,
        description: 'Fresh, wild-caught salmon fillet, perfect for a healthy meal.'
    },
    {
        name: 'Greek Yogurt',
        price: 4.25,
        description: 'Creamy Greek yogurt, a delicious and protein-rich dairy option.'
    },
    {
        name: 'Spinach',
        price: 2.75,
        description: 'Organic spinach, packed with vitamins and minerals.'
    },
    {
        name: 'Ground Beef',
        price: 5.49,
        description: 'Lean ground beef, great for making burgers and pasta sauces.'
    },
    {
        name: 'Quinoa',
        price: 3.99,
        description: 'Nutrient-rich quinoa, a versatile and gluten-free grain.'
    },
    {
        name: 'Orange Juice',
        price: 2.99,
        description: 'Freshly squeezed orange juice, a refreshing morning drink.'
    },
    {
        name: 'Tomatoes',
        price: 1.50,
        description: 'Vine-ripened tomatoes, perfect for salads and cooking.'
    },
    {
        name: 'Almond Butter',
        price: 6.99,
        description: 'Smooth almond butter, a healthy spread for toast and snacks.'
    },
    {
        name: 'Honey',
        price: 4.49,
        description: 'Pure honey, a natural sweetener with various health benefits.'
    },
    {
        name: 'Green Beans',
        price: 2.25,
        description: 'Fresh green beans, a nutritious and versatile vegetable.'
    },
    {
        name: 'Brown Rice',
        price: 2.99,
        description: 'Whole grain brown rice, a healthy and hearty side dish.'
    },
    {
        name: 'Cheddar Cheese',
        price: 3.75,
        description: 'Sharp cheddar cheese, great for snacking and melting.'
    },
    {
        name: 'Black Beans',
        price: 1.25,
        description: 'Canned black beans, a convenient protein source for meals.'
    },
    {
        name: 'Avocado',
        price: 1.99,
        description: 'Ripe avocados, perfect for salads, sandwiches, or guacamole.'
    },
    {
        name: 'Dark Chocolate',
        price: 3.99,
        description: 'High-quality dark chocolate, a sweet treat with health benefits.'
    }
];

const productsContainer = document.getElementById("products");

productsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.id) {
        console.log(groceryProducts[e.target.id])
    }
})

groceryProducts.forEach((product, index) => {
    const productElement = document.createElement("div");
    const title = document.createElement("b");
    title.innerText = product.name;
    const description = document.createElement("p");
    description.innerText = product.description;

    const price = document.createElement("span");
    price.innerText = `$${product.price}`
    productElement.className = "product";

    const button = document.createElement("button");
    button.innerText = "Add";
    // <button>Add</button>


    // button.addEventListener("click", listener)
    button.id = index


    productElement.append(title, description, price, button);

    productsContainer.appendChild(productElement)
})
