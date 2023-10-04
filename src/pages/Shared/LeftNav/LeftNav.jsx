
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category => <Link 
                className="block px-4 py-2 text-lg font-semibold" 
                to={`/category/${category.id}`}
                key={category.id}>
                {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftNav;