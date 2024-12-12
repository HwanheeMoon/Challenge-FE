import React from "react";
import CategoryItem from "./CategoryItem.tsx";

const iconList = [
    {name : "생활 습관", img : "icons/icons8-book-94.png"},
    {name : "운동", img : "icons/icons8-dumbbell-48.png"},
    {name : "돌봄", img : "icons/icons8-family-two-men-48.png"},
    {name : "공부", img : "icons/icons8-pencil-94.png"}
]


const Category = () => {


    return (
        <div className="container mt-4 mx-auto">
            <p className="font-bold text-2xl">챌린지 카테고리</p>
            <div className="grid grid-cols-4 mt-4">
                {iconList.map((category) => (
                    <div className="border rounded-xl p-3 m-2 shadow-lg">
                        <CategoryItem name={category.name} img={category.img}/>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Category;