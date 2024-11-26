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
    minlength: [2, 'Минимальная длина поля "title" - 2'],
    maxlength: [30, 'Максимальная длина поля "title" - 30'],
    unique: true,
    required: [true, 'Поле "title" должно быть заполнено'],
  },
  image: imageSchema,
  category: {
    type: String,
    required: [true, 'Поле "category" должно быть заполнено'],
    enum: {
      values: ['софт-скил', 'хард-скил', 'другое', 'дополнительное', 'кнопка'],
      message: 'Нужно указать одну их этих категорий: софт-скил, хард-скил, другое, дополнительное, кнопка',
    },
  },
  description: {
    type: String,
    required: [true, 'Поле "description" должно быть заполнено'],
  },
  price: {
    type: Number,
    default: null,
  },
});

export default mongoose.model<IProduct>('product', productSchema);
