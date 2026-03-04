import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
return (
<div className="d-flex justify-content-center align-items-center">
<div className="d-flex flex-column align-items-center">
<div className="traffic-top bg-dark"></div>
<div className="traffic-light bg-dark d-flex flex-column align-items-center justify-content-center">
<div 
	className={"circulo red " + (color === "red" ? "glow" : "")}
	onClick={() => setColor("red")}></div>
<div className={"circulo yellow " + (color === "yellow" ? "glow" : "")} 
onClick={() => setColor("yellow")}></div>
<div className={"circulo green " + (color === "green" ? "glow" : "")}
 onClick={() => setColor("green")}></div>
</div>
</div>
</div>
);
};

export default Home;
