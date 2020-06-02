import getData from '../consult'
import {useState} from 'react'


function UpdateData(props){
    // console.log("Las prosp de get son");
    console.log(props);
    getData().ref(`Leds/N${props.num}`).update({state : props.state})
}

function GetdataProps(props){
    
    const [GetD, setGetD] = useState(false)

    getData().ref(`Leds/N${props.num}`).on("value",snap =>{
        const Data = snap.val()
        console.log(Data);
        setGetD(Data)
    })

    return(GetD)
}

export {GetdataProps}
export default UpdateData