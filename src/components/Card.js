import React from "react";

// import Classes from "./Card.css";
import Classed from "./Cards.css";



export default function Card(props) {
     
     let colorNumber = props.num -1
     let myNum=props.num
    const colors=['orange','DimGray','red','green','black','Crimson'];
    const myColor=['Pink','Khaki','MediumAquamarine','green','black','Crimson'];
    if (props.num== 1 || props.num ==6){
        myNum=0;
    }
    if (props.num== 2 || props.num ==4){
        myNum=1;
    }
    if (props.num== 3|| props.num ==5){
        myNum=2;
    }
    
function colorHandler (){
     
    console.log("color change") 
     
    
}


    return (
        <div className="card" style={{backgroundColor:myColor[myNum]}}>
        
            <div className="title"> <h1 style={{color: colors[colorNumber]}}>Title {props.num}</h1>
            <div className="sub"><p>subtitles</p></div>
            </div>

             <div className="btn">
                <button style={{backgroundColor:colors[colorNumber],borderRadius:5,color:"white"}} onClick={colorHandler}>change color</button></div>
                </div>

    )
}