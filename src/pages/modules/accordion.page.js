import React, { Component } from "react";
import { Accordion, Container, Icon, Button, Segment } from "../../components";

export default class AccordionPage extends Component {
  state = { active: false, active2: false };
  render() {
    const { active, active2 } = this.state;
    return (
      <Container>
        <Accordion styled>
          <Accordion.Item
            active={active === 1}
            onClick={() => this.setState({ active: active === 1 ? false : 1 })}
          >
            <Accordion.Title>Item 1</Accordion.Title>
            <Accordion.Content>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              exercitationem ea vero totam possimus repudiandae sapiente, quasi
              harum doloremque explicabo placeat officiis vel provident maiores
              quibusdam omnis itaque ex. Neque!{" "}
              <Accordion styled>
                <Accordion.Item
                  active={active2 === 1}
                  onClick={() =>
                    this.setState({ active2: active2 === 1 ? false : 1 })
                  }
                >
                  <Accordion.Title>Item 1</Accordion.Title>
                  <Accordion.Content>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quis exercitationem ea vero totam possimus repudiandae
                    sapiente, quasi harum doloremque explicabo placeat officiis
                    vel provident maiores quibusdam omnis itaque ex. Neque!{" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, pariatur? Maiores dignissimos dolor ad! Ipsum eligendi nam voluptatibus reiciendis aliquid dolorem, in soluta optio ab, odio quis assumenda, veritatis facilis!
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  active={active2 === 2}
                  onClick={() =>
                    this.setState({ active2: active2 === 2 ? false : 2 })
                  }
                >
                  <Accordion.Title>Item 1</Accordion.Title>
                  <Accordion.Content>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quis exercitationem ea vero totam possimus repudiandae
                    sapiente, quasi harum doloremque explicabo placeat officiis
                    vel provident maiores quibusdam omnis itaque ex. Neque!{" "}
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  active={active2 === 3}
                  onClick={() =>
                    this.setState({ active2: active2 === 3 ? false : 3 })
                  }
                >
                  <Accordion.Title>Item 1</Accordion.Title>
                  <Accordion.Content>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quis exercitationem ea vero totam possimus repudiandae
                    sapiente, quasi harum doloremque explicabo placeat officiis
                    vel provident maiores quibusdam omnis itaque ex. Neque!{" "}
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 2}
            onClick={() => this.setState({ active: active === 2 ? false : 2 })}
          >
            <Accordion.Title>Item 1</Accordion.Title>
            <Accordion.Content>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              exercitationem ea vero totam possimus repudiandae sapiente, quasi
              harum doloremque explicabo placeat officiis vel provident maiores
              quibusdam omnis itaque ex. Neque!{" "}
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 3}
            onClick={() => this.setState({ active: active === 3 ? false : 3 })}
          >
            <Accordion.Title>Item 1</Accordion.Title>
            <Accordion.Content>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              exercitationem ea vero totam possimus repudiandae sapiente, quasi
              harum doloremque explicabo placeat officiis vel provident maiores
              quibusdam omnis itaque ex. Neque!{" "}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </Container>
    );
  }
}
