import PropTypes from "prop-types";

function FormCard({children, title}) {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-blue-600  w-[75%] p-10 rounded-md text-white">

                <h1 className='text-2xl font-bold'>{title}</h1>
                {children}
            </div>
        </div>
    );
}

FormCard.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}

export default FormCard;