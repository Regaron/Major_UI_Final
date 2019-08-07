import React, {useState} from "react";
import styled from "styled-components";
import application from "../assets/images/application.jpg";
import Fab from '@material-ui/core/Fab';
import Close from '@material-ui/icons/Close'

const Wrapper1 = styled.div`
  width: 100%;
  height: 55vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),
    url(${application}) center;
  background-size: cover;
  background-position: left 10% bottom 20%;
  background-repeat: no-repeat;
  display: inline-block;
`;

const Wrapper2 = styled.div`
  position: relative;
  top: -100px;
  left: 15%;
  width: 70%;
  height: 76vh;
  background: #032535;
  display: flex;
`;

const Cards = styled.div`
  margin: 5px;
  width: 50%;
  height: 98%;
  background: #eee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: 0.3s;
  text-align: center;

  &:hover {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.4)
      ),
      #444444;
  }
`;

const ApplicationImgText = styled.div`
  display: flex;
`;

const Text = styled.h1`
  margin: 10px;
  color: ${props => props.color || "white"};
  font-family: "Roberto", sans-serif;
  font-size: ${props => props.size || 30 + "px"};
  text-transform: uppercase;
  padding-top: 100px;
`;

const CardText = styled.h1`
  margin: 10px;
  color: ${props => props.color || "white"};
  font-family: "Roberto", sans-serif;
  font-size: ${props => props.size || 30 + "px"};
  text-transform: uppercase;
  padding-top: 100px;
`;

const CalculateButton = styled.button`
  /* Adapt the colors based on primary prop */
  
  color: #f7be16;
  font-size: 3em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f7be16;
  border-radius: 5px;
  width: 230px;
  height: 50px;
  background: #00818a;
  text-transform: uppercase;
  
  &:hover{
    background: #f7be16;
    color: #00818a;
    border: #00818a ;
  }
  
`;

const Application = ({dispatch, act_building, pre_building, act_area, pre_area, appImageAdd, downloadButton, showBuildingCount, showSolarPotential}) => {
    const [hover, setHover] = useState("false");
    const handleBuildingCount = () => {
        dispatch({type: 'buildingCount'})
    };
    const handleSolarPotential = () => {
        dispatch({type: 'solarPotential'})
    };
    const handleSolarClose = () => {
        dispatch({type: 'closeSolar'})
    };
    const handleBuildingClose = () => {
        dispatch({type: 'closeBuilding'})
    };
    return (
        <div>
            <Wrapper1>
                <ApplicationImgText>
                    <Text color={"#F36347"} size={40 + "px"}>
                        Application
                    </Text>
                    <Text color={"#ffff"} size={40 + "px"}>
                        of project
                    </Text>
                </ApplicationImgText>
            </Wrapper1>
            <Wrapper2>
                {!showBuildingCount ? <Cards
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <CardText color={!hover ? "black" : "darkorange"}>
                        {" "}
                        Building Count
                    </CardText>
                    <h2 style={{marginTop: "80px", padding: " 10px", color: "#696464"}}>
                        {" "}
                        We can obtain the total number of buildings present in the uploaded
                        images. It automatizes in determining how dense is the human
                        settlement. It reduces the overhead of counting the houses in the
                        certain area manually for data collection. With this system it can
                        be done automatically.{" "}
                    </h2>

                    <CalculateButton variant={"contained"} color={"primary"} disabled={!downloadButton}
                                     onClick={handleBuildingCount}>Calculate</CalculateButton>
                </Cards> : <Cards>
                    <img src={appImageAdd} style={{height: '75vh', width: '100%'}} alt={""}/>
                    <Fab color={"primary"} onClick={handleBuildingClose}
                         style={{position: "absolute", borderRadius: 0}}>
                        <Close fontSize={"large"}/>
                    </Fab>
                  <h1>Actual Building: {act_building}</h1>
                  <h1>Predicted Building: {pre_building}</h1>
                </Cards>}
                {!showSolarPotential ? <Cards
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <CardText color={!hover ? "black" : "green"}>
                        {" "}
                        Solar Potential
                    </CardText>
                    <h2 style={{marginTop: "80px", padding: " 10px", color: "#696464"}}>
                        {" "}
                        We can evaluate how much solar energy can be generate from the area
                        of the rooftop. Based on the region and solar data assumptions we
                        can approximate the possible solar energy generation.
                    </h2><br/>
                    <CalculateButton disabled={!downloadButton}
                                     onClick={handleSolarPotential}>Calculate</CalculateButton>
                </Cards> : <Cards>
                    <img src={appImageAdd} style={{height: '75vh', width: '100%'}} alt={""}/>
                    <Fab color={"primary"} onClick={handleSolarClose} style={{position: "absolute", borderRadius: 0}}>
                        <Close fontSize={"large"}/>
                    </Fab>
                    <h1>Actual Area: {act_area}</h1>
                  <h1>Predicted Area: {pre_area}</h1>
                </Cards>}
            </Wrapper2>
        </div>
    );
};

export default Application;
