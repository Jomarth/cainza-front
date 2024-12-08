import {useEffect} from "react";
import {useReporte} from "../../context/ReporteContext.jsx";
import {Card, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";

function ReportesPage() {
    const {getReportes, reportes} = useReporte();
    const TABLE_HEAD = ["Obra", "Solicitante", "No. Ensayes", "Lugar", "Fecha", ""];

    useEffect(() => {
        getReportes();
    }, []);
    console.log('reportes');
    reportes.map((reporte) => {
        console.log(reporte.imagen);
    });

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

                {reportes.map(({_id, destinatario, obra, no_ensayes, lugar, fecha_reporte}, index) => {
                    const isLast = index === reportes.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                    return (
                        <tr key={_id}>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {obra.nombre}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {destinatario}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {no_ensayes}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {lugar}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {fecha_reporte}
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

export default ReportesPage;