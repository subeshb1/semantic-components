import React, { Component } from "react";
// eslint-disable-next-line
import {
  // eslint-disable-next-line
  Button,
  // eslint-disable-next-line
  Container,
  // eslint-disable-next-line
  Divider,
  // eslint-disable-next-line
  Flag,
  // eslint-disable-next-line
  Header,
  // eslint-disable-next-line
  Icon,
  // eslint-disable-next-line
  Image,
  // eslint-disable-next-line
  Input,
  // eslint-disable-next-line
  Label,
  // eslint-disable-next-line
  List,
  // eslint-disable-next-line
  Loader,
  // eslint-disable-next-line
  Reveal,
  // eslint-disable-next-line
  Segment,
  Grid
} from "../../components";

import { colorDef } from "../../lib/react-extras";

export default class extends Component {
  state = {
    active: false
  };
  render() {
    return (
      <Container>
        <Header as="h1">
          Grid{" "}
          <Header sub as="div">
            Using a grid makes content appear to flow more naturally on your
            page.
          </Header>
        </Header>
        <Header as="h2">Types</Header>
        <Header>Simple</Header>
        <Grid>
          {new Array(16).fill(1).map((col, ind) => (
            <Grid.Column
              color={colorDef[Math.floor(Math.random() * 13)]}
              key={ind}
            >
              {ind + 1}
            </Grid.Column>
          ))}
          {new Array(16).fill(1).map((col, ind) => (
            <Grid.Column key={ind}>
              <Image src="/img/avatar1.png" />
            </Grid.Column>
          ))}
        </Grid>
        <Header>Divided</Header>
        <Header as="h5"> Divided</Header>

        <Grid column="three" divided="vertically">
          <Grid.Row>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header sub as="h5">
          Vertically Divided
        </Header>
        <Grid column="three" divided>
          <Grid.Row>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quia reiciendis inventore autem at, fugiat doloribus
              eaque voluptatum aperiam nobis fugit quibusdam debitis officia est
              consequuntur incidunt provident cumque. Blanditiis.
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Header>Celled</Header>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width="three">
              <Image src="/img/avatar8.png" />
            </Grid.Column>
            <Grid.Column width="thirteen">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat libero ex maxime, fuga sequi nemo
              quisquam quidem optio, deserunt dolore, reiciendis blanditiis
              recusandae pariatur ipsum vitae amet provident soluta unde? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat libero ex maxime, fuga sequi nemo
              quisquam quidem optio, deserunt dolore, reiciendis blanditiis
              recusandae pariatur ipsum vitae amet provident soluta unde? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde?
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="three">
              <Image src="/img/avatar7.png" />
            </Grid.Column>
            <Grid.Column width="ten">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat libero ex maxime, fuga sequi nemo
              quisquam quidem optio, deserunt dolore, reiciendis blanditiis
              recusandae pariatur ipsum vitae amet provident soluta unde? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat libero ex maxime, fuga sequi nemo
              quisquam quidem optio, deserunt dolore, reiciendis blanditiis
              recusandae pariatur ipsum vitae amet provident soluta unde? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde?
            </Grid.Column>
            <Grid.Column width="three">
              <Image src="/img/avatar6.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header>Internally Celled</Header>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width="three">
              <Image src="/img/avatar5.png" />
            </Grid.Column>
            <Grid.Column width="ten">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat libero ex maxime, fuga sequi nemo
              quisquam quidem optio, deserunt dolore, reiciendis blanditiis
              recusandae pariatur ipsum vitae amet provident soluta unde? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat libero ex maxime, fuga sequi nemo
              quisquam quidem optio, deserunt dolore, reiciendis blanditiis
              recusandae pariatur ipsum vitae amet provident soluta unde? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde?
            </Grid.Column>
            <Grid.Column width="three">
              <Image src="/img/avatar4.png" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="three">
              <Image src="/img/avatar3.png" />
            </Grid.Column>
            <Grid.Column width="ten">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat libero ex maxime, fuga sequi nemo
              quisquam quidem optio, deserunt dolore, reiciendis blanditiis
              recusandae pariatur ipsum vitae amet provident soluta unde? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat libero ex maxime, fuga sequi nemo
              quisquam quidem optio, deserunt dolore, reiciendis blanditiis
              recusandae pariatur ipsum vitae amet provident soluta unde? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat libero ex maxime, fuga sequi nemo
              quisquam quidem optio, deserunt dolore, reiciendis blanditiis
              recusandae pariatur ipsum vitae amet provident soluta unde? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              libero ex maxime, fuga sequi nemo quisquam quidem optio, deserunt
              dolore, reiciendis blanditiis recusandae pariatur ipsum vitae amet
              provident soluta unde?
            </Grid.Column>
            <Grid.Column width="three">
              <Image src="/img/avatar2.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header as="h2">Content</Header>
        <Header>
          Row{" "}
          <Header sub as="div">
            A row is a horizontal grouping of columns
          </Header>
        </Header>
        <Grid column="three">
          <Grid.Row>
            <Grid.Column>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              quam quibusdam molestias incidunt magni ratione fugiat modi
              repudiandae facere, repellendus illum at non, repellat dicta
              obcaecati ducimus! Saepe, pariatur dolor?
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              quam quibusdam molestias incidunt magni ratione fugiat modi
              repudiandae facere, repellendus illum at non, repellat dicta
              obcaecati ducimus! Saepe, pariatur dolor?
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              quam quibusdam molestias incidunt magni ratione fugiat modi
              repudiandae facere, repellendus illum at non, repellat dicta
              obcaecati ducimus! Saepe, pariatur dolor?
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              quam quibusdam molestias incidunt magni ratione fugiat modi
              repudiandae facere, repellendus illum at non, repellat dicta
              obcaecati ducimus! Saepe, pariatur dolor?
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              quam quibusdam molestias incidunt magni ratione fugiat modi
              repudiandae facere, repellendus illum at non, repellat dicta
              obcaecati ducimus! Saepe, pariatur dolor?
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header>
          Column{" "}
          <Header sub as="div">
            Columns each contain gutters giving them equal spacing from other
            columns.
          </Header>
        </Header>
        <Grid>
          <Grid.Column width="eight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            perspiciatis voluptate sapiente error repudiandae dicta veritatis,
            deserunt consectetur exercitationem voluptates quidem debitis cum
            adipisci fugiat ab, nihil odio tempora. Est?
          </Grid.Column>
          <Grid.Column width="eight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            perspiciatis voluptate sapiente error repudiandae dicta veritatis,
            deserunt consectetur exercitationem voluptates quidem debitis cum
            adipisci fugiat ab, nihil odio tempora. Est?
          </Grid.Column>
          <Grid.Column width="eight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            perspiciatis voluptate sapiente error repudiandae dicta veritatis,
            deserunt consectetur exercitationem voluptates quidem debitis cum
            adipisci fugiat ab, nihil odio tempora. Est?
          </Grid.Column>
          <Grid.Column width="eight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            perspiciatis voluptate sapiente error repudiandae dicta veritatis,
            deserunt consectetur exercitationem voluptates quidem debitis cum
            adipisci fugiat ab, nihil odio tempora. Est?
          </Grid.Column>
          <Grid.Column width="eight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            perspiciatis voluptate sapiente error repudiandae dicta veritatis,
            deserunt consectetur exercitationem voluptates quidem debitis cum
            adipisci fugiat ab, nihil odio tempora. Est?
          </Grid.Column>
        </Grid>
        <Header as="h2">Variation</Header>
        <Header>
          Floated{" "}
          <Header sub as="div">
            A column can sit flush against the left or right edge of a row
          </Header>
        </Header>

        <Grid>
          <Grid.Column float="left" width="five">
            {" "}
            <Header as="h4" color="red">
              Left
            </Header>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            delectus eos deserunt, corporis quos voluptate iure libero iste
            vero. Quaerat non eaque aperiam similique repellat voluptate quae,
            nam animi iure.
          </Grid.Column>

          <Grid.Column float="right" width="five">
            <Header as="h4" color="red">
              Right
            </Header>{" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            delectus eos deserunt, corporis quos voluptate iure libero iste
            vero. Quaerat non eaque aperiam similique repellat voluptate quae,
            nam animi iure.
          </Grid.Column>
        </Grid>
        <Header>
          Column Width{" "}
          <Header sub as="div">
            A column can vary in width taking up more than a single grid column.
          </Header>
        </Header>
        <Grid>
          <Grid.Column width="three">
            <Image src="/img/avatar-3.png" size="small" />
          </Grid.Column>
          <Grid.Column width="nine">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              magnam neque, laudantium eaque debitis consectetur, facere placeat
              incidunt fuga nisi fugiat, labore amet! Reprehenderit harum
              tempora, cupiditate similique possimus cumque?
            </p>
          </Grid.Column>
          <Grid.Column width="three">
            <Image src="/img/snake.jpg" size="small" />
          </Grid.Column>
        </Grid>
        <Header>
          Column Count{" "}
          <Header sub as="div">
            A grid can have a different number of columns per row
          </Header>
        </Header>
        <Grid>
          <Grid.Row column="three">
            <Grid.Column>
              <Image src="/img/avatar1.png" />{" "}
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar2.png" />{" "}
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar5.png" />{" "}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row column="four">
            <Grid.Column>
              <Image src="/img/avatar1.png" />{" "}
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar2.png" />{" "}
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar5.png" />{" "}
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar6.png" />{" "}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row column="five">
            <Grid.Column>
              <Image src="/img/avatar1.png" />{" "}
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar2.png" />{" "}
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar3.png" />{" "}
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar4.png" />{" "}
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar5.png" />{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header>
          Equal Width{" "}
          <Header sub as="div">
            A grid can automatically resize all elements to split the available
            width evenly
          </Header>
        </Header>
        <Grid equal>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column width="eight">
            <Segment>1</Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>2</Segment>
          </Grid.Column>
        </Grid>
        <Grid equal>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>2</Segment>
          </Grid.Column>
        </Grid>
        <Grid equal>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>2</Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>3</Segment>
          </Grid.Column>
        </Grid>
        <Grid equal>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>2</Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>3</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>4</Segment>
          </Grid.Column>
        </Grid>
        <Header>
          Stretched{" "}
          <Header as="div" sub>
            A row can stretch its contents to take up the entire column height
          </Header>
        </Header>
        <Grid column="three" divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>1</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header as="h4">Not Stretched</Header>
        <Grid column="three" divided>
          <Grid.Row>
            <Grid.Column>
              <Segment>1</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid equal>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
            </Grid.Column>
            <Grid.Column>
              <Reveal>
                <Reveal.Hidden>
                  <Image src="/img/avatar1.png" rounded size="medium" />
                </Reveal.Hidden>
                <Reveal.Visible>
                  <Image src="/img/placeholder.svg" rounded size="medium" />
                </Reveal.Visible>
              </Reveal>
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header>
          Padded{" "}
          <Header as="div" sub>
            A grid can preserve its vertical and horizontal gutters on first and
            last columns
          </Header>
        </Header>
        <Divider />
        <Grid padded column="two">
          <Grid.Column>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            in soluta, expedita quia ut accusamus voluptas commodi quibusdam
            placeat, vel aliquam porro, ipsum nobis modi? Molestias dolore
            doloribus amet officia!
          </Grid.Column>
          <Grid.Column>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            in soluta, expedita quia ut accusamus voluptas commodi quibusdam
            placeat, vel aliquam porro, ipsum nobis modi? Molestias dolore
            doloribus amet officia!
          </Grid.Column>
        </Grid>
        <Header as="h4">No Padded</Header>
        <Divider />
        <Grid column="two">
          <Grid.Column>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            in soluta, expedita quia ut accusamus voluptas commodi quibusdam
            placeat, vel aliquam porro, ipsum nobis modi? Molestias dolore
            doloribus amet officia!
          </Grid.Column>
          <Grid.Column>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            in soluta, expedita quia ut accusamus voluptas commodi quibusdam
            placeat, vel aliquam porro, ipsum nobis modi? Molestias dolore
            doloribus amet officia!
          </Grid.Column>
        </Grid>
        <Header>Vertically Padded</Header>
        <Divider />
        <Grid padded="vertically" column="two">
          <Grid.Column>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            in soluta, expedita quia ut accusamus voluptas commodi quibusdam
            placeat, vel aliquam porro, ipsum nobis modi? Molestias dolore
            doloribus amet officia!
          </Grid.Column>
          <Grid.Column>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            in soluta, expedita quia ut accusamus voluptas commodi quibusdam
            placeat, vel aliquam porro, ipsum nobis modi? Molestias dolore
            doloribus amet officia!
          </Grid.Column>
        </Grid>
        <Header>Horizontally Padded</Header>
        <Divider />
        <Grid padded="horizontally" column="two">
          <Grid.Column>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            in soluta, expedita quia ut accusamus voluptas commodi quibusdam
            placeat, vel aliquam porro, ipsum nobis modi? Molestias dolore
            doloribus amet officia!
          </Grid.Column>
          <Grid.Column>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            in soluta, expedita quia ut accusamus voluptas commodi quibusdam
            placeat, vel aliquam porro, ipsum nobis modi? Molestias dolore
            doloribus amet officia!
          </Grid.Column>
        </Grid>

        <Header>
          Relaxed{" "}
          <Header sub as="div">
            A grid can increase its gutters to allow for more negative space
          </Header>
        </Header>
        <Grid relaxed column={"four"}>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
        </Grid>
        <Header as="h4">Not Relaxed</Header>
        <Grid column={"four"}>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
        </Grid>
        <Header as="h4">Very Relaxed</Header>
        <Grid relaxed="very" column={"four"}>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/img/avatar2.png" />
          </Grid.Column>
        </Grid>
        <Header>Color Column</Header>
        <Grid column="five" padded>
          {colorDef.map((x, i) => (
            <Grid.Column key={i} color={x}>
              {x}
            </Grid.Column>
          ))}
        </Grid>
        <Header>Color Row</Header>
        <Grid column="five" padded>
          {colorDef.map((x, i) => (
            <Grid.Row key={i} color={x}>
              <Grid.Column>{x}</Grid.Column>{" "}
            </Grid.Row>
          ))}
        </Grid>

        <Header>
          Centered{" "}
          <Header sub as="div">
            A grid can have its columns centered
          </Header>
        </Header>
        <Grid centered column="two">
          <Grid.Column>
            <Image src="/img/avatar4.png" />
          </Grid.Column>
          <Grid.Row column={"four"}>
            <Grid.Column>
              <Image src="/img/avatar5.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar5.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar5.png" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row column={"four"}>
            <Grid.Column>
              <Image src="/img/avatar5.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar5.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar5.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar5.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header>
          Text Alignment{" "}
          <Header as="div" sub>
            Can be used in Row as well as column
          </Header>
        </Header>
        <Grid column="two" textAlign="center">
          <Grid.Column>
            <Header>Left (Grid Inherit)</Header>
            <p>
              {" "}
              Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Iure dicta error fuga, nam expedita pariatur eum dignissimos
              neque nobis reprehenderit? Aut voluptatum fugit dolore. Nesciunt
              odit minima itaque maxime earum. dolor Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos ad deleniti ea impedit
              officiis iste ipsum maxime, eos veniam porro voluptatum expedita
              unde! Nesciunt suscipit mollitia rem vero numquam? Sit. sit amet
              consectetur adipisicing elit. Sunt autem modi inventore rem iure
              fugiat culpa sint laboriosam eaque amet ab recusandae fuga minima
              unde, facere eligendi, voluptas numquam distinctio?
            </p>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Header>Right (Column)</Header>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              autem modi inventore rem iure fugiat culpa sint laboriosam eaque
              amet ab recusandae fuga minima unde, facere eligendi, voluptas
              numquam distinctio?
            </p>
          </Grid.Column>
          <Grid.Row textAlign="justified">
            <Grid.Column>
              <Header>Justified (Row)</Header>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                autem modi inventore rem iure fugiat culpa sint laboriosam eaque
                amet ab recusandae fuga minima unde, facere eligendi, voluptas
                numquam distinctio?
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header>Justified (Row)</Header>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                autem modi inventore rem iure fugiat culpa sint laboriosam eaque
                amet ab recusandae fuga minima unde, facere eligendi, voluptas
                numquam distinctio?Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Repellendus quaerat deleniti minima, fugit sit
                nulla exercitationem delectus odit vero quibusdam quod,
                voluptate labore quia cumque perspiciatis nam aliquid
                necessitatibus enim?
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header>Verical Aligned</Header>
        <Grid verticalAlign="middle" column="four" centered>
          <Grid.Row>
            <Grid.Column>
              <Image src="/img/avatar5.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar5.png" />
              <Image src="/img/avatar5.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="/img/avatar5.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
