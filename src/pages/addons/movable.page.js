import React, { Component } from "react";
// eslint-disable-next-line
import {
  // eslint-disable-next-line
  Container,
  // eslint-disable-next-line
  Segment,
  Movable
} from "../../components";
import { curry } from "../../lib/basic-utils";
import { fromNullable, min, max } from "../../components/lib/react-extras";

class MovableGroup extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { content: "Subesh", key: 1 },
        { content: "Subesh", key: 2 },
        { content: "Subesh", key: 3 },
        { content: "Subesh", key: 4 },
        { content: "Subesh", key: 5 },
        { content: "Subesh", key: 6 },
        { content: "Subesh", key: 7 }
      ],
      client: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      active: false,
      mouseIn: false
    };
    this.removeDragElement = this.removeDragElement.bind(this);
    this.move = this.move.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.move, false);
    window.addEventListener("touchmove", this.move, false);
    window.addEventListener("mouseup", this.removeDragElement, false);
    window.addEventListener("touchend", this.removeDragElement, false);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.move, false);
    window.removeEventListener("touchmove", this.move, false);
    window.removeEventListener("mouseup", this.removeDragElement, false);
    window.removeEventListener("touchend", this.removeDragElement, false);
  }

  setDragElement(active, offset, client) {
    // document.querySelector("body").style.touchAction = "none";
    this.list.clear();
    this.setState({ active, offset, client, dragY: client.y });
  }
  move(e) {
    if (this.state.active !== false) {
      this.setState(client => ({
        client: {
          x: fromNullable(e.clientX).fold(x => e.touches[0].clientX, x => x),
          y: fromNullable(e.clientY).fold(x => e.touches[0].clientY, x => x)
        }
      }));
    }
  }

  removeDragElement() {
    if (this.state.active !== false) {
      // document.querySelector("body").style.touchAction = "auto";
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
      dragY,
      mouseIn
    } = this.state;
    const dragPos = { x: x - ox, y: y - oy };
    return (
      <Container>
        <Segment.Group
          compact
          onMouseEnter={() => {
            if (active !== false) this.setState({ mouseIn: true });
          }}
          onMouseLeave={() => {
            if (active !== false) this.setState({ mouseIn: false });
          }}
          style={{
            float: this.props.right ? "right" : "",
            touchAction: "none",
            ...(mouseIn
              ? {
                  boxShadow: "0px 0px 20px 6px #ff5c5c",
                  border: "2px solid #ff0000",
                  transition: "box-shadow 0.3s ease"
                }
              : { transition: "box-shadow 0.3s ease" })
          }}
        >
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
class MovablePage extends Component {
  render() {
    return (
      <Container>
        <MovableGroup right />
        <MovableGroup />
      </Container>
    );
  }
}
export default MovablePage;
