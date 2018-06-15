import React, { Component } from "react";
import u4 from "uniqid";
// eslint-disable-next-line
import {
  // eslint-disable-next-line
  Container,
  // eslint-disable-next-line
  Segment,
  Movable,
  Image
} from "../../components";
import { curry } from "../../lib/basic-utils";
import { fromNullable, min, max } from "../../components/lib/react-extras";
import ReactDOM from "react-dom";

export default class TestPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { content: "Subesh", key: 1 },
        { content: "Subesh", key: 14 },
        { content: "Subesh", key: 4 },
        { content: "Subesh", key: 5 },
        { content: "Subesh", key: 7 },
        { content: "Subesh", key: 8 },
        { content: "Subesh", key: 9 },
        { content: "Subesh", key: 19 },
        { content: "Subesh", key: 15 },
        { content: "Subesh", key: 11 },
        { content: "Subesh", key: 6 },
        { content: "Subesh", key: 10 },
        { content: "Subesh", key: 12 },
        { content: "Subesh", key: 13 },
        { content: "Subesh", key: 2 },
        { content: "Subesh", key: 18 },
        { content: "Subesh", key: 3 },
        { content: "Subesh", key: 16 },
        { content: "Subesh", key: 17 }
      ],
      client: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      active: false
    };
    this.removeDragElement = this.removeDragElement.bind(this);
    this.move = this.move.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.move);
    window.addEventListener("touchmove", this.move);
    window.addEventListener("mouseup", this.removeDragElement);
    window.addEventListener("touchend", this.removeDragElement);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.move);
    window.removeEventListener("touchmove", this.move);
    window.removeEventListener("mouseup", this.removeDragElement);
    window.removeEventListener("touchend", this.removeDragElement);
  }

  setDragElement(active, offset, client) {
    document.querySelector("body").style.touchAction = "none";
    this.list.clear();
    this.setState({ active, offset, client, dragY: client.y });
  }
  move(e) {
    if (this.state.active !== false)
      this.setState(client => ({
        client: {
          x: fromNullable(e.clientX).fold(x => e.touches[0].clientX, x => x),
          y: fromNullable(e.clientY).fold(x => e.touches[0].clientY, x => x)
        }
      }));
  }

  removeDragElement() {
    if (this.state.active !== false) {
      this.setState(({ data, active, dragY, client }) => {
        if (this.list.size) {
          let minC = min([...this.list]);
          let maxC = max([...this.list]);
          let newData;
          newData =
            dragY < client.y
              ? [
                  ...data.slice(0, active),
                  ...data.slice(minC, maxC + 1),
                  data[active],
                  ...data.slice(maxC + 1)
                ]
              : [
                  ...data.slice(0, minC),
                  data[active],
                  ...data.slice(minC, maxC + 1),
                  ...data.slice(active + 1)
                ];
          console.log(0, active, minC, maxC, newData);
          return { active: false, data: newData };
        }
        return { active: false };
      });
    }
  }
  list = new Set();
  onDragElement = curry((active, offset, client) =>
    this.setDragElement(active, offset, client)
  );
  render() {
    const {
      client: { x, y },
      offset: { x: ox, y: oy },
      active,
      data,
      dragY
    } = this.state;
    const dragPos = { x: x - ox, y: y - oy };
    return (
      <Container>
        <Segment.Group compact>
          {data.map((elem, i) => (
            <Movable
              key={elem.key}
              onDrag={this.onDragElement(i)}
              style={{}}
              drag={active === i}
              dragPos={dragPos}
              pos={active !== false ? { x: dragY, y } : undefined}
              add={add => {
                add ? this.list.add(i) : this.list.delete(i);
                console.log(this.list);
              }}
            >
              <Segment stacked raised color="red" compact>
                {elem.content + " " + elem.key}
              </Segment>
            </Movable>
          ))}
        </Segment.Group>
      </Container>
    );
  }
}
