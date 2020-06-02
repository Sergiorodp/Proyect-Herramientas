import React,{useState, useEffect,lazy,Suspense} from 'react'
// import Datarender from '../data/data';

import getData  from '../../services/consult'
const StreamSchart = lazy(() => import('./chart/chart'))

var dataArray = [0,0,0,0,0,0,0,0,0,0]

const Card = React.memo( function Card({params}){

    const [sense,setSense] = useState({
        valor : 0,
        nombre : "cargando...",
        vecesprendido : 0,
    })

    const keyWord = params.key
    // console.log(params);
    
    useEffect(() => {
        getData().ref(`quiz/eladc${keyWord}`).on("value",(snap) => {
            const data = snap.val()
            const dataplus = {
                valor : data.valor,
                vecesprendido : data.vecesprendido,
                nombre : data.nombre,
                masinfo : `ADC numero ${keyWord}`,
            }
            dataArray.shift() 
            dataArray.push( data.valor * 10)
            // console.log(data);
            setSense(dataplus);
        })
    }, [keyWord])

    return(
    <div className = "card">
        <div className = "card-header">
    <h2 className = "aqua"> SENSOR : {sense.nombre}</h2>
            </div>
                <div className = " card-body">
                    <p>Valor: {sense.valor}</p>
                    <p>Veces Prendido: {sense.vecesprendido}</p> 
                    <p>Mas info: {sense.masinfo}</p>
                    <Suspense fallback = {<p>cargando... </p>}> 
                        <StreamSchart num = {sense.valor} arrayLol = {dataArray}/>
                    </Suspense>
                </div>
            <div className = "card-footer">
                <a href = '/Proyect-Herramientas/'>pagina principal</a>
        </div>
    </div>
    )

})
export default Card;
