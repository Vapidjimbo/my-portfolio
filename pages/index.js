import Hero from "../components/Hero";
import { Button, Radio } from "antd";
import { DownloadOutlined, MessageOutlined } from "@ant-design/icons";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <Hero
        title="James A. Jamison"
        text="Developer, Web Designer, Front End Engineer, Software Developer."
        bgColor="#001529"
        color="white"
      >
        <Button
          type="primary"
          shape="round"
          icon={<MessageOutlined />}
          size="large"
        >
          Contact
        </Button>
      </Hero>
      <Section title="About" isOdd={true}>
        <p>Howdy there</p>
        <p>Howdy there</p>
        <p>Howdy there</p>
        <p>Howdy there</p>
      </Section>
      <Section title="Services" isOdd={false}>
        <p>Howdy there</p>
        <p>Howdy there</p>
        <p>Howdy there</p>
        <p>Howdy there</p>
      </Section>
      <Section title="Portfolio" isOdd={true}>
        <p>Howdy there</p>
        <p>Howdy there</p>
        <p>Howdy there</p>
        <p>Howdy there</p>
      </Section>
      <Section title="Contact" isOdd={false}>
        <p>Howdy there</p>
        <p>Howdy there</p>
        <p>Howdy there</p>
        <p>Howdy there</p>
      </Section>
    </>
  );
}
