import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users',required:true },
  items: [
    {
      recipe_id: {
        type : String ,
        required: true
      },
      title: {
        type : String ,
        required: true
      },
      image_url: {
        type : String ,
        required: true
      },
      source_url: {
          type : String ,
          required: true
        },
      quantity: {
        type : Number ,
        default : 1
      },
    }
  ]
});

export default mongoose.model('carts', cartSchema);