const ProductValidation = {
    validateProductInput: (req, res, next) => {
        const {name, price, image, description, category} = req.body;

        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            return res.status(400).json({message: `Name must be a string`});
        }
        if (typeof price !== 'number' || isNaN(price) || price <= 0) {
            return res.status(400).json({message: `Price must be a valid number`});
        }
        if (!image || typeof image !== 'string' || image.trim().length === 0) {
            return res.status(400).json({message: `Image url must be a string`});
        }
        if (!description || typeof description !== 'string' || description.length < 10 || description.trim().length === 0) {
            return res.status(400).json({message: `Description must be a string and length must be at least 10 charaters`});
        }
        if (!category || typeof category !== 'string' || category.trim().length === 0) {
            return res.status(400).json({message: `Category must be a string`});
        }

        next();
    },
};

export default ProductValidation