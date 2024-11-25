import mongoose from 'mongoose';

interface IImage{
  fileName: string;
  originalName: string;
}

export interface IProduct{
  title: string;
  image: IImage;
  category: string;
  description: string;
  price: null | number;
}

const imageSchema = new mongoose.Schema<IImage>({
  fileName: String,
  originalName: String,
});

const productSchema = new mongoose.Schema<IProduct>({
  title: {
    type: String,
    minlength: 2,
    maxlength: 30,
    unique: true,
    required: true,
  },
  image: imageSchema,
  category: {
    type: String,
    required: true,
    enum: ['софт-скил', 'хард-скил',
      'другое', 'дополнительное', 'кнопка'],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
});

export default mongoose.model<IProduct>('product', productSchema);
