import {useEffect} from "react";
import {useEnsaye} from "../../context/EnsayeContext.jsx";
import {Card, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";

function EnsayesPage() {
    const {getEnsayes, ensayes} = useEnsaye();
    const TABLE_HEAD = ["Solicitante", "capa", "Localización", "Desperdicio", ""];

    useEffect(() => {
        getEnsayes();
    }, []);
    console.log(ensayes)
    return (
        <Card className="h-screeen w-screen p-3">
            <table className="w-full min-w-max table-auto text-left overflow-scroll border-2 items-center">
                <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th
                            key={head}
                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                            <Typography
                                variant="medium"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                {head}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>

                {ensayes.map(({_id, solicitante, capa, localizacion, desperdicio}, index) => {
                    const isLast = index === ensayes.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                    return (
                        <tr key={_id}>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {solicitante}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {capa}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {localizacion}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {desperdicio}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    <Link to={'/'}>
                                        Editar
                                    </Link>
                                </Typography>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </Card>
    );
}

export default EnsayesPage;