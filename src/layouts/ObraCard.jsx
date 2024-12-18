import PropTypes from "prop-types";
import CloudinaryImage from "../components/CloudinaryImage.jsx";
import {Link} from "react-router-dom";

function ObraCard({name, image, link}) {
    return (
        <div className="flex items-center justify-center mx-3">
            <div className="bg-blue-600 w-full p-5 rounded-md text-white">
                <h1 className='text-2xl font-bold pb-2'>{name}</h1>
                <CloudinaryImage publicId={image}/>
                <div className={'flex justify-end pt-2'}>
                    <Link to={link}>
                        Editar...
                    </Link>
                </div>
            </div>
        </div>
    );
}

ObraCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
}
export default ObraCard;