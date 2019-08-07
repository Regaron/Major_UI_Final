import React from "react";
import styled from "styled-components";
import supervisor from "../assets/images/Supervisor.jpeg";
import Sujan from "../assets/images/Sujan pp+.jpg";
import Prashant from "../assets/images/Prashant.jpg";
import Ravi from "../assets/images/Ravi.jpg";
import Nabin from "../assets/images/Nabin.jpg";

const members = [
    "Nabin Pokhrel",
    "Prashant Khadka",
    "Ravi Giri",
    "Sujan Budhathoki"
];
const photos = [Nabin,Prashant,Ravi,Sujan];
const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  background: #191716;
  position: relative;
  margin-top: 150vh;
  clear: both;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`;

const Cast = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
const Info = styled.div`
  width: 30%;
  height: 100%;
  
`;

const TeamInfo = styled(Info)`
  width: 50%;
`;

const FooterBottom = styled.div`
  width: 100%;
  height: 40px;
  background: #090809;
`;

const Text = styled.h1`
  color: ${props => props.color || "white"};
  font-family: "Roberto", sans-serif;
  font-size: ${props => props.size || 20 + "px"};
  text-transform: uppercase;
  padding: 10px;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  
`;
const SupImg = styled(Img)`
  height: 100px;
  margin-left: 140px;
  width: auto;
`;



const Footer = () => {
    const avatar = photos.map(pic => <Img src={pic} />);

    const name = members.map(mem => (
        <div>
            <Text size={12 + "px"}>{mem}</Text>
        </div>
    ));


    return (
        <div>
            <Wrapper>
                <Info>
                    <Text color = {"#F36347"}>About</Text>
                    <p style={{ marginTop: "50px", padding: " 10px", color: "#696464", fontSize: " 14px" }}> A final year project for the completion of Bachelor degree in Computer Engineering.</p>
                </Info>
                <TeamInfo>
                    <Text color = {"#F36347"}>Team</Text>
                    <Cast>
                        {avatar}
                    </Cast>
                    <Cast
                    >
                        {name}
                    </Cast>

                </TeamInfo>
                <Info>
                    <Text color = {"#F36347"}>Supervisor</Text>
                    <SupImg src={supervisor} />
                    <Text size={14 + "px"}>Prof.Dr. Ram Krishna Maharjan</Text>
                </Info>
            </Wrapper>
            <FooterBottom style={{ display: "flex", justifyContent: "center" }}>
                <Text color={"#F36347"} size={16 + "px"}>
                    Tribhuvan University
                </Text>
                <Text color={"#ffff"} size={10 + "px"}>
                    Pulchowk Campus
                </Text>
            </FooterBottom>
        </div>
    );
};

export default Footer;