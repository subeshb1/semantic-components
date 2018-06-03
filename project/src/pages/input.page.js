import React from "react";
import Label from "../components/label";
import Container from "../components/container";
import Header from "../components/header";
import Icon from "../components/icon";
import Button from "../components/button";
import Input from "../components/input";

const data = {
  value: ""
};
export default class InputPage extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h1">Input</Header>
        <Header as="h2">States</Header>
        <Header>Simple Input</Header>
        <Input placeholder="Name" tabIndex="1"/>
        <Header>Custom Warning Input</Header>
        <Input placeholder="Name" state="warning" tabIndex="3"/>
        <Header>Custom Success Input</Header>
        <Input placeholder="Name" state="success" tabIndex="2"/>
        <Header>Default Error Input</Header>
        <Input placeholder="Name" state="error" />
        <Header>Disabled Input</Header>
        <Input placeholder="Name" disabled />
        <Header>Loading Input</Header>
        <Input placeholder="Name" loading="left" />
        <Input placeholder="Name" loading />
        <Header>Readonly Input</Header>
        <Input placeholder="Name" readOnly />

        <Header as="h2">Variations</Header>
        <Header>Icon Input</Header>
        <Input icon>
          <Icon name="search" inverted circular link />
        </Input>
        <Input placeholder="Name" icon="users" />
        <Input placeholder="Name" icon="users" iconPosition="left" />
        <Header>Size</Header>
        <Input placeholder="Name" icon="users" size="mini" />
        <Input placeholder="Name" icon="users" size="small" />
        <Input placeholder="Name" icon="users" size="medium" />
        <Input placeholder="Name" icon="users" size="big" />
        <Input placeholder="Name" icon="users" size="massive" />
        <Header>Transparent</Header>
        <Input placeholder="Name" icon="users" size="massive" transparent />
        <Header>Fluid</Header>
        <Input placeholder="Name" icon="users" size="massive" fluid />
        <Header>Action</Header>
        <Input action>
          <Button> Search</Button>
        </Input>
        <Input action="left" frontChildren={<Button>Search</Button>} />
        <Input
          action="left"
          frontChildren={
            <Button color="teal" labeledIcon ficon="cart">
              Checkout
            </Button>
          }
        />
        <Header>Labeled </Header>
        <Input labeled frontChildren={<Label>http://</Label>} />
        <Input labeled>
          <Label>http://</Label>
        </Input>
        <Input labeled>
          <Label basic>Kg</Label>
        </Input>
        <Input labeled="right">
          <Label basic>Kg</Label>
        </Input>
        <Input labeled="right" frontChildren={<Label>$</Label>}>
          <Label basic>Kg</Label>
        </Input>
        <Input placeholder="Name" labeled="left corner">
          <Label corner="left">
            <Icon name="heart" />
          </Label>
        </Input>
        <Input placeholder="Name" labeled="right corner">
          <Label corner="right">
            <Icon name="heart" />
          </Label>
        </Input>
        <Input labeled="right" icon="tags" iconPosition="left">
          <Label as="a" tag>
            Add Tag
          </Label>
        </Input>
        <Input
          value={data.value}
          onChange={e => {
            console.log(e.target.value, this);
            data.value = e.target.value;
            this.setState({});
          }}
          onFocus={() => {
            console.log("Belzebub");
          }}
        />
      </Container>
    );
  }
}
