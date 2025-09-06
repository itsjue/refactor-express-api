import { db } from "./utils/db.js";
import { ObjectId } from "mongodb";

const productCollection = db.collection("products");

const ProductRepository = {
    async findAll(query = {}) {
        return await productCollection.find(query).toArray();
    },

    async findById(id) {
        return await productCollection.findOne({_id: new ObjectId(id)});
    },

    async create(productData) {
        const result = await productCollection.insertOne(productData);
        return {...productData, _id: result.insertId};
    },

    async update(id, productData) {
        const result = await productCollection.updateOne(
            {_id: new ObjectId(id)},
            {$set: productData}
        );
        return result;
    },

    async delete(id) {
        const result = await productCollection.deleteOne({_id: new ObjectId(id)});
        return result;
    }
}

export default ProductRepository
