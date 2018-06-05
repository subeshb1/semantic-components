import React, { Component } from "react";
// eslint-disable-next-line
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  Input,
  Label,
  Loader,
  Segment,
  Dimmer,
  Card
} from "../../components";
import { compose, trace } from "../../lib/basic-utils";
import { colorDef } from "../../lib/react-extras";
export default class TopRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      repo: "javascript",
      data: [],
      hasError: false,
      value: ""
    };
    this.mount = true;
  }
  componentDidMount() {
    this.getData("javascript");
  }
  componentWillUnmount() {
    this.mount = false;
  }
  getData(data) {
    //Impure Function
    const Impure = {
      get: fetch,
      trace
    };
    //pure
    const host = "api.github.com";
    const path = "/search/repositories";
    const query = l =>
      `?q=stars:>1 language:${l}&sort=stars&order=desc&type=Repositories`;
    const url = l => `https://${host}${path}${query(l)}`;
    //Impure
    const send = compose(
      Impure.get,
      url
    );
    send(data)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (this.mount)
          this.setState(() => ({ data: res.items, loading: false }));
      })
      .catch(err => {
        if (this.mount) this.setState({ hasError: err });
      });
  }
  render() {
    if (this.state.hasError) {
      return (
        <Container textAlign="center">
          <Divider> </Divider>{" "}
          <Segment>
            <Header>{this.state.hasError.toString()}</Header>
          </Segment>
        </Container>
      );
    }
    const { loading, data, value } = this.state;

    return (
      <Container>
        <Header size="large">Search Repos</Header>
        <Input
          action
          disabled={loading}
          value={value}
          onChange={e => {
            const payload = e.target.value;
            this.setState(({ value }) => ({ value: payload }));
          }}
        >
          <Button
            disabled={loading}
            onClick={() => {
              this.setState(
                ({ value }) => ({ loading: true, repo: value }),
                () => {
                  this.getData(this.state.repo);
                }
              );
            }}
          >
            Search
          </Button>
        </Input>
        <Divider />
        <Segment color="red">
          <Dimmer show={loading} page>
            <Dimmer.Content>
              <Loader state="active" inline>
                <Header inverted>Loading Repos...</Header>
              </Loader>
            </Dimmer.Content>
          </Dimmer>
          {data.length > 0 && (
            <Card.Group column="four" stackable doubling>
              {data.map((item, index) => {
                return (
                  <Card link fluid raised color={"red"} key={index}>
                    <Card.Content extra># {index + 1}</Card.Content>
                    <Image
                      key={index}
                      src={item.owner.avatar_url}
                      alt="avatar"
                      data-tooltip={item.full_name}
                      wrapped
                      as="a"
                      target="_blank"
                      href={item.html_url}
                    />
                    <Card.Content>
                      <Card.Header>{item.name}</Card.Header>
                      <Card.Meta>{item.owner.login}</Card.Meta>
                      <Card.Description>
                        {item.description && item.description.slice(0, 50)}...
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Card.Meta textAlign="center">
                        <span className="right floated">
                          <Icon name="fork" />
                          {item.forks}
                        </span>
                        <span className="left floated">
                          <Icon name="star" /> {item.stargazers_count}
                        </span>
                      </Card.Meta>
                    </Card.Content>
                  </Card>
                );
              })}
            </Card.Group>
          )}
        </Segment>
      </Container>
    );
  }
}
