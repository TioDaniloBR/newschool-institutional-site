import React from "react";
import { Container, Icon, Title, Text } from "./style";
import homeVideo from "../../../assets/videos/video-home.mp4";
import ReactPlayer from "react-player";

export default function HomeCard({ icon, title, text }) {
  return (
    <Container>
      <Icon src={icon} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}
