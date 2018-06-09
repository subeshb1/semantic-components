import React, { Component } from "react";
import * as UI from "../../components";
import { Display, Image, Card } from "../../components";

const data = [
  {
    img: "/img/avatar3.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique harum amet sint iure, qui itaque nam nobis aliquam nisi dolorem mollitia animi, dolor in. Ab quibusdam maiores delectus voluptatibus!`,
    header: "Item 1"
  },
  {
    img: "/img/avatar1.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique harum amet sint iure, qui itaque nam nobis aliquam nisi dolorem mollitia animi, dolor in. Ab quibusdam maiores delectus voluptatibus!`,
    header: "Item 2"
  }
];
export default class DisplayPage extends Component {
  render() {
    return (
      <UI.Container>
        <Display
          render={[
            {
              range: { min: Display.Tablet.min, max: Infinity },
              render: () => {
                return (
                  <div className="ui items">
                    <div className="item">
                      <Image src={data[0].img} size="small" wrapped />
                      <div className="content">
                        <a className="header">{data[0].header}</a>
                        <div className="description">
                          <p>{data[0].description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            },
            {
              range: { min: 0, max: Display.Tablet.min },
              render: () => {
                return (
                  <Card fluid>
                    <Image src={data[0].img} wrapped />
                    <Card.Content>
                      <Card.Header>{data[0].header}</Card.Header>
                      <Card.Description>
                        <p>{data[0].description}</p>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                );
              }
            }
          ]}
        />
        <Display
          render={{
            range: { min: Display.Mobile.min, max: Display.Tablet.max },
            render: () => {
              return (
                <div className="ui items">
                  <div className="item">
                    <Image src={data[1].img} size="small" wrapped />
                    <div className="content">
                      <a className="header">{data[1].header}</a>
                      <div className="description">
                        <p>{data[1].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          }}
        >
          <Card>
            <Image src={data[1].img} wrapped />
            <Card.Content>
              <Card.Header>{data[1].header}</Card.Header>
              <Card.Description>
                <p>{data[1].description}</p>
              </Card.Description>
            </Card.Content>
          </Card>
        </Display>
        <Display>Nothing</Display>
      </UI.Container>
    );
  }
}
