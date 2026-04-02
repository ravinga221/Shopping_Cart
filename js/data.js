// js/data.js

const DEFAULT_CATEGORIES = [
    { id: '1', name: 'Vegetables' },
    { id: '2', name: 'Fruits' },
    { id: '3', name: 'Cakes' },
    { id: '4', name: 'Biscuits' }
];

const DEFAULT_PRODUCTS = [
    {
        id: '1',
        name: 'Fresh Tomatoes',
        price: 100,
        description: 'Locally grown organic tomatoes.',
        imageUrl: 'https://i.pinimg.com/1200x/a8/95/67/a895671850b8d42fcea318ac030626a5.jpg',
        categoryId: '1'
    },
    {
        id: '2',
        name: 'Organic Carrots',
        price: 120,
        description: 'Crunchy and sweet organic carrots.',
        imageUrl: 'https://i.pinimg.com/736x/85/a7/b8/85a7b8192ac58b4e0a270fca4587eca7.jpg',
        categoryId: '1'
    },
    {
        id: '3',
        name: 'Bananas',
        price: 80,
        description: 'Ripe and ready to eat bananas.',
        imageUrl: 'https://i.pinimg.com/736x/7c/2d/23/7c2d23df7578a62e66faa52aaac5fc73.jpg',
        categoryId: '2'
    },
    {
        id: '4',
        name: 'Red Apples',
        price: 200,
        description: 'Crisp and juicy red apples.',
        imageUrl: 'https://i.pinimg.com/736x/a8/b6/35/a8b635d4f04a5e4c8370ceb5d4c51ca1.jpg',
        categoryId: '2'
    },
    {
        id: '5',
        name: 'Chocolate Cake',
        price: 1500,
        description: 'Rich and decadent chocolate cake.',
        imageUrl: 'https://i.pinimg.com/1200x/3c/15/fe/3c15fec74eb6b3da01efd32361e7920a.jpg',
        categoryId: '3'
    },
    {
        id: '20',
        name: 'Fruit Cake',
        price: 1800,
        description: 'Traditional fruit cake packed with premium dried fruits and nuts.',
        imageUrl: 'https://i.pinimg.com/736x/7f/dd/31/7fdd31a3d4ad8b96617be6a62d092b3f.jpg',
        categoryId: '3'
    },
    {
        id: '21',
        name: 'Butter Cake',
        price: 1200,
        description: 'Classic rich and moist butter cake, perfect for any occasion.',
        imageUrl: 'https://i.pinimg.com/1200x/ad/64/b3/ad64b3ecc203dcdcecfeee40a4b2ff36.jpg',
        categoryId: '3'
    },
    {
        id: '22',
        name: 'Ribbon Cake',
        price: 1600,
        description: 'Beautiful multi-layered ribbon cake with a velvety texture.',
        imageUrl: 'https://i.pinimg.com/1200x/88/69/87/8869873f3c98e1bfd7549a61a5aaa3b3.jpg',
        categoryId: '3'
    },
    {
        id: '23',
        name: 'Red Velvet Cake',
        price: 2200,
        description: 'Elegant red velvet cake with a smooth cream cheese frosting flavor.',
        imageUrl: 'https://i.pinimg.com/1200x/62/9e/45/629e4501f6b221413c7f468d5c96f074.jpg',
        categoryId: '3'
    },
    {
        id: '6',
        name: 'Chocolate Chip Cookies',
        price: 200,
        description: 'Classic homemade style chocolate chip cookies.',
        imageUrl: 'https://i.pinimg.com/736x/89/c0/90/89c090e95b4c3e91ddd2b58857c8b147.jpg',
        categoryId: '4'
    },
    {
        id: '24',
        name: 'Cream Crackers',
        price: 150,
        description: 'Crispy and light sugar-free cream crackers, perfect with tea.',
        imageUrl: 'https://i.pinimg.com/1200x/6d/46/8a/6d468a417e29689f81da701f01657688.jpg',
        categoryId: '4'
    },
    {
        id: '25',
        name: 'Marie Biscuits',
        price: 100,
        description: 'Classic crunchy Marie biscuits, a favorite for all ages.',
        imageUrl: 'https://i.pinimg.com/1200x/2d/8e/3c/2d8e3c45738090771239f88c8868c2d2.jpg',
        categoryId: '4'
    },
    {
        id: '26',
        name: 'Lemon Puff',
        price: 180,
        description: 'Zesty lemon cream sandwiched between two crispy biscuits.',
        imageUrl: 'https://i.pinimg.com/736x/ef/22/01/ef2201b87a8089856f685741870183b2.jpg',
        categoryId: '4'
    },
    {
        id: '27',
        name: 'Ginger Biscuits',
        price: 160,
        description: 'Spicy and crunchy ginger biscuits with a hint of sweetness.',
        imageUrl: 'https://i.pinimg.com/1200x/9d/9e/42/9d9e42880775cf015a8870183b28c3b2.jpg',
        categoryId: '4'
    },
    {
        id: '7',
        name: 'Potatoes',
        price: 80,
        description: 'Versatile and fresh farm potatoes.',
        imageUrl: 'https://i.pinimg.com/736x/86/92/1a/86921a331d7e84e48e009ffa2365a8bc.jpg',
        categoryId: '1'
    },
    {
        id: '8',
        name: 'Beans',
        price: 150,
        description: 'Fresh and crunchy green beans.',
        imageUrl: 'https://i.pinimg.com/736x/31/47/15/31471519885b0481e2eb627063b959f7.jpg',
        categoryId: '1'
    },
    {
        id: '9',
        name: 'Leeks',
        price: 120,
        description: 'Flavorful leeks, perfect for soups.',
        imageUrl: 'https://i.pinimg.com/736x/d5/16/1a/d5161a2df64e88667f4895bdbdf1e4ec.jpg',
        categoryId: '1'
    },
    {
        id: '10',
        name: 'Beetroots',
        price: 100,
        description: 'Earthy and vibrant fresh beetroots.',
        imageUrl: 'https://i.pinimg.com/736x/a5/98/29/a598296533b425d768b9c9cb92d782ce.jpg',
        categoryId: '1'
    },
    {
        id: '11',
        name: 'Pumpkin',
        price: 100,
        description: 'Sweet and nutritious whole pumpkin.',
        imageUrl: 'https://i.pinimg.com/1200x/b9/fd/ca/b9fdcad092df313d34a31a2e990a4c4f.jpg',
        categoryId: '1'
    },
    {
        id: '12',
        name: 'Onions',
        price: 120,
        description: 'Essential cooking ingredient, pungent onions.',
        imageUrl: 'https://i.pinimg.com/1200x/d7/fa/70/d7fa7049e4467c7123d056c6ce1b04a6.jpg',
        categoryId: '1'
    },
    {
        id: '13',
        name: 'Cabbage',
        price: 100,
        description: 'Crisp green cabbage for salads and cooking.',
        imageUrl: 'https://i.pinimg.com/736x/55/48/c6/5548c6b8539dfdfa93c7e987d82800c1.jpg',
        categoryId: '1'
    },
    {
        id: '14',
        name: 'Pineapple',
        price: 100,
        description: 'Tropical, sweet and tangy fresh pineapple.',
        imageUrl: 'https://i.pinimg.com/736x/0e/f9/ff/0ef9ff8f00d0ae17223c694a2829f97a.jpg',
        categoryId: '2'
    },
    {
        id: '15',
        name: 'Papaya',
        price: 160,
        description: 'Deliciously soft and sweet ripe papaya.',
        imageUrl: 'https://i.pinimg.com/736x/40/e9/e4/40e9e44ed7e9f607150d7922c2ea9626.jpg',
        categoryId: '2'
    },
    {
        id: '16',
        name: 'Mango',
        price: 200,
        description: 'Juicy, tropical and incredibly fresh mango.',
        imageUrl: 'https://i.pinimg.com/736x/3b/08/c3/3b08c3dfcdd87c5f345e19f7b58e354e.jpg',
        categoryId: '2'
    },
    {
        id: '17',
        name: 'Guava',
        price: 140,
        description: 'Fragrant and sweet tropical guava.',
        imageUrl: 'https://i.pinimg.com/1200x/dc/af/94/dcaf9447d71b93c21be92a042f68bbab.jpg',
        categoryId: '2'
    },
    {
        id: '18',
        name: 'Grapes',
        price: 350,
        description: 'Sweet, crisp, and refreshing grapes.',
        imageUrl: 'https://i.pinimg.com/736x/7a/68/62/7a6862bc649ed189b78744e36c1da507.jpg',
        categoryId: '2'
    },
    {
        id: '19',
        name: 'Orange',
        price: 200,
        description: 'Bright, juicy and vitamin C packed orange.',
        imageUrl: 'https://i.pinimg.com/1200x/6d/06/92/6d0692f15352e023b7712a17cedd08f8.jpg',
        categoryId: '2'
    }
];

function initData() {
    if (!localStorage.getItem('categories')) {
        localStorage.setItem('categories', JSON.stringify(DEFAULT_CATEGORIES));
    }
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(DEFAULT_PRODUCTS));
    } else {
        // Sync new image URLs from DEFAULT_PRODUCTS to existing localStorage products
        let storedProducts = JSON.parse(localStorage.getItem('products'));
        DEFAULT_PRODUCTS.forEach(defaultProd => {
            let existingProd = storedProducts.find(p => p.id === defaultProd.id);
            if (existingProd) {
                // Sync price and image URL if they have changed in DEFAULT_PRODUCTS
                existingProd.price = defaultProd.price;
                existingProd.imageUrl = defaultProd.imageUrl;
            } else {
                storedProducts.push(defaultProd);
            }
        });
        localStorage.setItem('products', JSON.stringify(storedProducts));
    }
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    if (localStorage.getItem('isLoggedIn') === null) {
        localStorage.setItem('isLoggedIn', 'false');
    }
    if (localStorage.getItem('isAdmin') === null) {
        localStorage.setItem('isAdmin', 'false'); // Set to true to test admin easily
    }
}

function getCategories() {
    return JSON.parse(localStorage.getItem('categories')) || [];
}

function saveCategories(categories) {
    localStorage.setItem('categories', JSON.stringify(categories));
}

function getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
}

function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

// Initialize data on script load
initData();
