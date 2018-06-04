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
  Segment
} from "../../components";
import { compose, trace } from "../../lib/basic-utils";
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
  }
  componentDidMount() {
    this.getData("javascript");
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
    const send = compose(Impure.get, url);
    send(data)
      .then(res => res.json())
      .then(res => {
        this.setState(() => ({ data: res.items, loading: false }));
      })
      .catch(err => {
        console.log(err);
        this.setState({ hasError: err });
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

        {loading && <Loader state="active">Loading Repos...</Loader>}
        {data.length > 0 && (
          <Segment state={loading ? "disabled" : ""}>
            <Image.Group size="small    ">
              {data.map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={item.owner.avatar_url}
                    alt="avatar"
                    bordered
                    data-tooltip={item.full_name}
                  >
                    <Label
                      as="a"
                      corner="left"
                      href={item.html_url}
                      target="_blank"
                    >
                      <Icon name=" like" />
                    </Label>
                  </Image>
                );
              })}
            </Image.Group>
          </Segment>
        )}
      </Container>
    );
  }
}
