import React, { Component } from "react";
import {
  Progress,
  Button,
  Header,
  Container,
  Segment,
  Card,
  Image
} from "../../components";
import { colorDef } from "../../components/lib/react-extras";

function getScrollPercent() {
  let h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

export default class ProgressPage extends Component {
  componentDidMount() {
    this.setState({ scrollPercent: getScrollPercent() });
    window.addEventListener("scroll", () =>
      this.setState({ scrollPercent: getScrollPercent() })
    );
  }

  state = {
    percent: 0,
    scrollPercent: 0
  };
  render() {
    const { percent, scrollPercent } = this.state;
    return (
      <Container>
        <Header as="h1">Progress</Header>
        <Header as="h2">Types</Header>
        <Header>Standard</Header>
        <Progress percent={percent} />
        <Header>Indicating</Header>
        <Progress active indicating percent={percent} />
        <Header>Ranges</Header>
        <Progress
          active
          percent={percent}
          ranges={[
            { range: { min: 0, max: 10 }, color: "orange" },
            { range: { min: 11, max: 20 }, color: "red" },
            { range: { min: 21, max: 30 }, color: "purple" },
            { range: { min: 31, max: 40 }, color: "violet" },
            { range: { min: 41, max: 50 }, color: "pink" },
            { range: { min: 51, max: 60 }, color: "blue" },
            { range: { min: 61, max: 70 }, color: "teal" },
            { range: { min: 71, max: 80 }, color: "yellow" },
            { range: { min: 81, max: 90 }, color: "olive" },
            { range: { min: 91, max: 100 }, color: "green" },
            { range: { min: 101, max: Infinity }, color: "success" }
          ]}
        />
        <Button
          onClick={() =>
            this.setState(({ percent }) => ({ percent: (percent + 10) % 110 }))
          }
        >
          Click
        </Button>
        <Header as="h2">Content</Header>
        <Header>Bar</Header>
        <Progress percent={70} />
        <Header>Progress</Header>
        <Progress percent={80} progress={"80%"} />
        <Header>Label</Header>
        <Progress percent={10} label={"10% Uploaded"} />
        <Header as="h2" text="States" />
        <Header text="Active" />
        <Progress percent={50} active progress={"50%"} />
        <Header text="Success" />
        <Progress
          percent={100}
          active
          progress={"100%"}
          state="success"
          label="Success!"
        />
        <Header text="Warning" />
        <Progress
          percent={100}
          active
          progress={"100%"}
          state="warning"
          label="Warning!"
        />
        <Header text="Error" />
        <Progress
          percent={100}
          active
          progress={"100%"}
          state="error"
          label="Error!"
        />
        <Header as="h2">Variations</Header>
        <Header>Inverted</Header>
        <Segment inverted>
          <Progress percent={50} active progress={"50%"} inverted />
          <Progress
            percent={100}
            active
            progress={"100%"}
            state="success"
            label="Success!"
            inverted
          />
          <Progress
            percent={100}
            active
            progress={"100%"}
            state="warning"
            label="Warning!"
            inverted
          />
          <Progress
            percent={100}
            active
            progress={"100%"}
            state="error"
            label="Error!"
            inverted
          />
        </Segment>
        <Header>Attached</Header>
        <Segment compact>
          <Progress attached="top" percent={100} state={"success"} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe
            dolorem exercitationem delectus dolores commodi quas asperiores vero
            officia molestias excepturi dolore error quos, at amet obcaecati!
            Quae, quasi reiciendis.
          </p>
          <Progress attached="bottom" percent={50} />
        </Segment>
        <Card>
          <Image src="/img/avatar7.png" />
          <Card.Content>
            <Card.Header>Subesh Bhandari</Card.Header>
            <Card.Description>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              accusamus in non!{" "}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>Job Progress</Card.Content>
          <Progress attached="bottom" percent={50} state="warning" />
        </Card>
        <Header>Size</Header>
        <Progress percent={50} label="Tiny" size="tiny" />
        <Progress percent={50} label="Small" size="small" />
        <Progress percent={50} label="Standard" />
        <Progress percent={50} label="Large" size="large" />
        <Progress percent={50} label="big" size="big" />
        <Header>Color</Header>
        <Segment>
          {colorDef.map((color, i) => (
            <Progress key={i} color={color} percent={80} />
          ))}
        </Segment>
        <Header>Inverted</Header>
        <Segment inverted>
          {colorDef.map((color, i) => (
            <Progress inverted key={i} color={color} percent={50} />
          ))}
        </Segment>
        <Header>Ranges</Header>
        <Progress
          fixed
          active
          indicating
          percent={Math.ceil(scrollPercent)}
          inverted
        />
      </Container>
    );
  }
}
