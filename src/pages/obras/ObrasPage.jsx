import ObraCard from "../../layouts/ObraCard.jsx";

function ObrasPage() {
    return (
        <div className="flex flex-col w-screen md:grid md:gap-4 md:grid-cols-3 md:grid-rows-3 px-2 space-y-3">
            <ObraCard name={'nombre de la obra'} image={'cld-sample-5'} link={'/'} />
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