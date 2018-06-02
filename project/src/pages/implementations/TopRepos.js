import React, { Component } from "react";
import Container from "../../components/container";
import Image from "../../components/image";
import Button from "../../components/button";
import input from "../../components/input";
import { curry, compose, trace } from "../../lib/basic-utils";
import List from "../../components/list";
import Input from "../../components/input";
import Segment from "../../components/segment";
import Loader from "../../components/loader";
import Header from "../../components/header";
import Divider from "../../components/divider";
import Label from "../../components/label";
import data from "./data.json";
import Icon from "../../components/icon";
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
    const { match } = this.props;
    const { loading, data, value } = this.state;

    return (
      <Container>
        <Header size="large">Search Repos</Header>
        <Input
          action
          disabled={loading}
          value={value}
          extraProps={{
            onChange: e => {
              const payload = e.target.value;
              this.setState(({ value }) => ({ value: payload }));
            }
          }}
        >
          <Button
            state={loading ? `disabled` : ""}
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
