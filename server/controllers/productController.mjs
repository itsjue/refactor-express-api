import ProductService from "../services/productService.mjs";

const ProductController = {
    getAllproducts: async (req, res) => {
        try {
            const {keywords: name, category} = req.query;
            const products = await ProductService.getAllproducts(name, category);
            return res.json({
                data: products.map((item) => ({
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    description: item.description,
                    category: item.category,
                })),
            });
        } catch (error) {
            return res.status(500).json({message: `${error}`})
        }
    },
    
    getProductById: async (req, res) => {
        try {
            const product = await ProductService.getProductById(req.params.id);
            if (!product) {
                return res.status(404).json({message: "Product not found"});
            }
            return res.json({
                data: {
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    description: product.description,
                    category: product.category,
                }
            })
        } catch (error) {
            return res.status(500).json({message: `${error}`});
        }
    },

    createProduct: async (req, res) => {
        try {
            const {name, price, image, description, category} = req.body;

            if(!name || !price || !category) {
                return res.status(400).json({message: "Missing required fields"});
            }

            const newProduct = await ProductService.createProduct({
                name,
                price,
                image,
                description,
                category,
            });

            return res.status(201).json({
                message: "Product created successfully"
            });
        } catch (error) {
            return res.status(500).json({message: `${error}`});
        }
    },

    updateProduct: async (req, res) => {
        try {
            const {id} = req.params;
            const {name, price, image, description, category} = req.body;

            if(!id) {
                return res.status(400).json({message: "Product ID is required"})
            };

            const updateProduct = await ProductService.updateProduct(id, {
                name,
                price,
                image,
                description,
                category,
            });

            if(!updateProduct) {
                return res.status(404).json({message: "Product not found"});
            }

            return res.json({
                message: "Product updated successfully"
            });
        } catch (error) {
            return res.status(500).json({message: `${error}`})
        };
    },

    deleteProduct: async (req, res) => {
        try {
            const {id} = req.params;
            const {name, price, image, description, category} = req.body;

            if(!id) {
                return res.status(400).json({message: "Product ID is required"})
            };

            const deleteProduct = await ProductService.deleteProduct(id)
        } catch (error) {
            return res.status(500).json({message: `${error}`})
        }
    };
}

export default ProductController