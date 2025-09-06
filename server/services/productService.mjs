import ProductRepository from "../repositories/productRepository.mjs";

const ProductService = {
    getAllproducts: async (name, category) => {
        const query = {};
        if (name) {
            query.name = new RegExp(name, "i");
        }
        if (category) {
            query.category = new RegExp(category, "i");
        }
        return await ProductRepository.findAll(query);
    },

    getProductById: async (id) => {
        return await ProductRepository.findById(id);
    },

    createProduct: async (productData) => {
        const dataWithTimestamp = {...productData, created_at: new Date()};
        return await ProductRepository.create(dataWithTimestamp);
    },

    updateProduct: async (id, productData) => {
        const dataWithTimestamp = {...productData, modified_at: new Date()};
        return await ProductRepository.updateProduct(id, dataWithTimestamp);
    },

    daleteProduct: async (id) => {
        return await ProductRepository.deleteProduct(id);
    },
}

export default ProductService