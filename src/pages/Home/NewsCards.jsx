import { Link } from "react-router-dom";


const NewsCards = ({news}) => {
    const {title, details, image_url, _id} = news
    return (
        <div className=" bg-base-200 mb-5">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
  </div>
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div>
    {
        details.length > 200 ? 
        <p>{details.slice(0, 200)} <Link
        to={`/news/${_id}`}
        className="text-blue-600 font-semibold">Read more...</Link></p> 
        : <p>{details}</p>
    }
  </div>
</div>
    );
};

export default NewsCards;