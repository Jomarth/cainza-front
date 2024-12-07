import ObraCard from "../../layouts/ObraCard.jsx";
import {useObra} from "../../context/ObraContext.jsx";
import {useEffect} from "react";

function ObrasPage() {
    const {getObras, obras} = useObra();

    useEffect(() => {
        getObras();
    }, []);
    console.log('obras');
    obras.map((obra) => {
        console.log(obra.imagen);
    });

    return (
        <div className="flex flex-col w-screen md:grid md:gap-4 md:grid-cols-3 md:grid-rows-3 px-2 space-y-3">
            {
                obras.map((obra) => {
                    return (
                        <ObraCard name={obra.nombre} image={obra.imagen} link={'/ver-obra/' + obra._id} key={obra.nombre}/>
                    )
                })
            }
            <ObraCard name={'nombre de la obra'} image={'cld-sample-5'} link={'/'} />
            <ObraCard name={'nombre de la obra'} image={'cld-sample-5'} link={'/'} />
            <ObraCard name={'nombre de la obra'} image={'cld-sample-5'} link={'/'} />
            <ObraCard name={'nombre de la obra'} image={'cld-sample-5'} link={'/'} />
            <ObraCard name={'nombre de la obra'} image={'cld-sample-5'} link={'/'} />
            <ObraCard name={'nombre de la obra'} image={'cld-sample-5'} link={'/'} />
            <ObraCard name={'nombre de la obra'} image={'cld-sample-5'} link={'/'} />
            <ObraCard name={'nombre de la obra'} image={'cld-sample-5'} link={'/'} />
        </div>
    );
}

export default ObrasPage;