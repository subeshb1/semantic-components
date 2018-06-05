import React, { Component } from "react";
// eslint-disable-next-line
import {
  Container,
  Card,
  Header,
  Image,
  Icon,
  Input,
  Button,
  Reveal,
  Dimmer
} from "../../components";

export default class extends Component {
  state = {
    active: false
  };
  render() {
    const { active } = this.state;
    return (
      <Container>
        <Header as="h1">Card</Header>
        <Header as="h2"> Card Types</Header>
        <Header>Card</Header>
        <Card>
          <Image src="/img/avatar8.png" wrapped />
          <Card.Content>
            <Card.Header as="a" href="#">
              Kristy
            </Card.Header>
            <Card.Meta>Joined in 2013</Card.Meta>
            <Card.Description>
              Kristy is an art director living in New York.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Meta right>14h</Card.Meta>
            <Image src="/img/avatar4.png" avatar />
          </Card.Content>
          <Image src="/img/placeholder.svg" wrapped />
          <Card.Content>
            <span className="right floated">
              <Icon name="heart outline like" />
              17 likes
            </span>
            <Icon name="comment outline" />
            3 comments
          </Card.Content>
          <Card.Content extra>
            <Input
              transparent
              placeholder="Add a Comment.."
              size="large"
              iconPosition="left"
              icon="heart outline like"
            />
          </Card.Content>
        </Card>
        <Header>Card Group</Header>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image src="/img/avatar5.png" size="mini" float="right" />
              <Card.Header>Gita Karki</Card.Header>
              <Card.Meta>Friend of Hari</Card.Meta>
              <Card.Description>
                Gita requested permission to view your contact details
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button.Group
                fluid
                items={[
                  { as: "button", basic: true, color: "green", text: "Accept" },
                  { as: "button", basic: true, color: "red", text: "Reject" }
                ]}
              />
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image src="/img/avatar6.png" size="mini" float="right" />
              <Card.Header>Hari Karki</Card.Header>
              <Card.Meta>Friend of Gita</Card.Meta>
              <Card.Description>
                Hari requested permission to view your contact details
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button.Group
                fluid
                items={[
                  { as: "button", basic: true, color: "green", text: "Accept" },
                  { as: "button", basic: true, color: "red", text: "Reject" }
                ]}
              />
            </Card.Content>
          </Card>
        </Card.Group>
        <Card.Group link>
          <Card>
            <Image src="/img/avatar-3.png" wrapped />
            <Card.Content>
              <Card.Header as="a">Subesh Bhandari</Card.Header>
              <Card.Meta>20 yrs old</Card.Meta>
              <Card.Description>
                He is an average programmer with zero salary.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <span className="right floated">Joined 2014</span>
              <Icon name="users" />
              151 Friends
            </Card.Content>
          </Card>
          <Card>
            <Image src="/img/avatar3.png" wrapped />
            <Card.Content>
              <Card.Header as="a">Subesh Bhandari</Card.Header>
              <Card.Meta>20 yrs old</Card.Meta>
              <Card.Description>
                He is an average programmer with zero salary.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <span className="right floated">Joined 2014</span>
              <Icon name="users" />
              151 Friends
            </Card.Content>
          </Card>
          <Card>
            <Image src="/img/avatar1.png" wrapped />
            <Card.Content>
              <Card.Header as="a">Subesh Bhandari</Card.Header>
              <Card.Meta>20 yrs old</Card.Meta>
              <Card.Description>
                He is an average programmer with zero salary.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <span className="right floated">Joined 2014</span>
              <Icon name="users" />
              151 Friends
            </Card.Content>
          </Card>
        </Card.Group>
        <Card>
          <Reveal animation="slide masked">
            <Reveal.Visible>
              <Image src="/img/avatar1.png" fluid alt="Avatar" />
            </Reveal.Visible>
            <Reveal.Hidden>
              <Image src="/img/avatar2.png" fluid alt="Avatar" />
            </Reveal.Hidden>
          </Reveal>
          <Card.Content>
            <Card.Header as="a">Subesh Bhandari</Card.Header>
            <Card.Meta>20 yrs old</Card.Meta>
            <Card.Description>
              He is an average programmer with zero salary.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="right floated">Joined 2014</span>
            <Icon name="users" />
            151 Friends
          </Card.Content>
        </Card>
        <Card>
          <Dimmer.Dimmable
            as={Image}
            wrapped
            blurring
            src="/img/avatar3.png"
            onMouseOver={() =>
              this.setState(({ active }) => ({ active: true }))
            }
            onMouseOut={() =>
              this.setState(({ active }) => ({ active: false }))
            }
            show={active}
          >
            <Dimmer show={active}>
              <Dimmer.Content>
                <Button inverted>Add </Button>
              </Dimmer.Content>
            </Dimmer>
          </Dimmer.Dimmable>
          <Card.Content>
            <Card.Header as="a">Subesh Bhandari</Card.Header>
            <Card.Meta>20 yrs old</Card.Meta>
            <Card.Description>
              He is an average programmer with zero salary.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="right floated">Joined 2014</span>
            <Icon name="users" />
            151 Friends
          </Card.Content>
        </Card>
        <Card>
          <Dimmer.Dimmable
            as={Image}
            wrapped
            blurring
            src="/img/avatar7.png"
            onMouseOver={() =>
              this.setState(({ active }) => ({ active: true }))
            }
            onMouseOut={() =>
              this.setState(({ active }) => ({ active: false }))
            }
            show={active}
          >
            <Dimmer show={active} inverted>
              <Dimmer.Content>
                <Button color="blue">Add</Button>
              </Dimmer.Content>
            </Dimmer>
          </Dimmer.Dimmable>
          <Card.Content>
            <Card.Header as="a">Subesh Bhandari</Card.Header>
            <Card.Meta>20 yrs old</Card.Meta>
            <Card.Description>
              He is an average programmer with zero salary.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="right floated">Joined 2014</span>
            <Icon name="users" />
            151 Friends
          </Card.Content>
        </Card>
      </Container>
    );
  }
}
