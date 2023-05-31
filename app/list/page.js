'use client'
import Image from "next/image";
import tomato from '/public/food0.png'
import { useState } from "react";

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
    let [count, setCount] = useState([0, 0, 0]);
    return (
        <div>
        <h2 className="title">Products</h2>
        {
          상품.map((data,index) => {
            return (
              <div className="food" key={index}>
                <img src={`/food${index}.png`} className="food-img" />
                <h4>{data} $40</h4>
                <span> {count[index]} </span>
                <button onClick={() => {
                  let countCopy = [...count]
                  countCopy[index]++
                  setCount(countCopy)}
                  }>+
                </button>
                <button onClick={() => {
                  let countCopy = [...count]
                  countCopy[index]--
                  setCount(countCopy)}
                  }>-
                </button>
              </div>
            )
          })
        }
      </div>
    )
  }
  