import { useParams, useNavigate } from "react-router-dom"

export default function Detail(){
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id);

    return (
        <>
            <div>Detail</div>
            <p>informação id do detalhe {id}</p>
            {/* <button onClick={() => navigate('/schedule')}>Voltar</button> */}
        </>
    )
}