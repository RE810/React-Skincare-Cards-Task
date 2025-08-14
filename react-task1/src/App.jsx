import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from "./Card";

const products = [
  { image: "/images/make-up-remover.png", title: "Make-up Remover", price: "120" },
  { image: "/images/Body-Milk.png", title: "Body Milk", price: "90" },
  { image: "/images/cream.png", title: "Face Cream", price: "150" },
  { image: "/images/shaan-gel.png", title: "Shaan Gel", price: "80" },
  { image: "/images/shaan-lipbalm.png", title: "Shaan Lip Balm", price: "60" },
  { image: "/images/Shaan_Hand_Cream.png", title: "Shaan Hand Cream", price: "110" }
];

function App() {
  return (
    <div>
      <h1 className="flex flex-row justify-center items-center mt-10 mb-10 font-bold text-3xl text-pink-500">Our Skincare Products</h1>
      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-6">
        {products.map(product => (
          <Card
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

