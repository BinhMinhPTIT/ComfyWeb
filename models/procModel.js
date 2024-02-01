import { Schema, Types, model } from 'mongoose';
// import mongoosePaginate from 'mongoose-paginate-v2';

const procSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide name'],
            maxlength: 20, 
        },
        price: {
            type: Number,
            required: [true, 'Please provide price'],
        },
        rated: {
            type: Number,
            required: [true, 'Please provide rating'],
            maxlength: 5, 
        },
        numReviews: {
            type: Number,
            required: [true, 'Please provide number of reviews'],
        },
        describe: {
            type: String,
            require: [true, 'Please provide description'],
            maxlength: 200, 
        },
        available: {
            type: Boolean,
            required: [true, 'Please provide availability of product'],
            default: true,
        },
        sku: {
            type: String,
            unique: true, 
            required: [true, 'Please provide SKU'],
            validate: {
                validator: function(v) {
                    return /^[a-zA-Z0-9\-]+$/.test(v);
                },
                message: props => `${props.value} is not a valid SKU!`
            },
            index: true 
        },
        brand: {
            type: String,
            required: [true, 'Please provide a brand'],
            maxlength: 20, 
        },
        colors: {
            type: [String],
            validate: {
                validator: function(v) {
                    return Array.isArray(v) && v.every(color => typeof color === 'string');
                },
                message: props => `${props.value} is not a valid array of colors!`
            }
        },
        numberOfProc: {
            type: Number,
            min: 1,
            required: [true, 'Please provide the number of processors'],
        },
        createdBy: {
            type: Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

export default model('Proc', procSchema);