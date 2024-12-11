import PropTypes from "prop-types";

function FormCard({children, title}) {
    return (
        <div className="flex p-20 justify-center">
            <div className="bg-gray-400 max-w-md w-full p-10 rounded-md ">
                <h1 className='text-2xl font-bold text-center pb-[5em] text-blue-800'>{title}</h1>
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