# Loader

```jsx
<Container>
  <Header as="h2">Types of Header</Header>
  <Header as="h4">Simple Loader</Header>
  <div className="ui segment">
    <div className="ui active dimmer">
      <Loader />
    </div>
  </div>
  <Header as="h4">Text Loader</Header>
  <div className="ui segment">
    <div className="ui active inverted dimmer">
      <Loader content="Loading " />
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <Header as="h2">States</Header>
  <Header as="h4">Indeterminate</Header>
  <div className="ui segment">
    <div className="ui active dimmer">
      <Loader content="Loading " indeterminate />
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <Header as="h4">Active - Can be used without a dimmer</Header>
  <div className="ui segment">
    <Loader content="Loading " state="active" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <Header as="h4">Disabled</Header>
  <div className="ui segment">
    <Loader content="Loading " state="disabled" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <Header as="h2">Variations</Header>
  <Header as="h4">Inline</Header>
  <div className="ui segment">
    <p>
      <Loader inline state="active" size="small" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
      accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
      itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    </p>
  </div>
  <Header as="h4">Inline Center</Header>
  <div className="ui segment">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate
      aspernatur accusantium optio voluptas rerum, quam dolore
      <Loader inline="centered" state="active" size="small" />
      placeat corrupti, provident magnam itaque suscipit debitis eius
      necessitatibus iure consequatur repudiandae commodi!
    </p>
  </div>
  <Header as="h4">Size</Header>
  <div className="ui segment">
    <div className="ui active inverted dimmer">
      <Loader content="Loading " size="mini" />
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <div className="ui segment">
    <div className="ui active inverted dimmer">
      <Loader content="Loading " size="tiny" />
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <div className="ui segment">
    <div className="ui active inverted dimmer">
      <Loader content="Loading " size="small" />
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <div className="ui segment">
    <div className="ui active inverted dimmer">
      <Loader content="Loading " size="medium" />
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <div className="ui segment">
    <div className="ui active inverted dimmer">
      <Loader content="Loading " size="large" />
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <div className="ui segment">
    <div className="ui active inverted dimmer">
      <Loader content="Loading " size="big" />
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <div className="ui segment">
    <div className="ui active inverted dimmer">
      <Loader content="Loading " size="huge" />
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
  <div className="ui segment">
    <div className="ui active inverted dimmer">
      <Loader content="Loading " size="massive  " />
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate aspernatur
    accusantium optio voluptas rerum, quam dolore placeat corrupti, provident magnam
    itaque suscipit debitis eius necessitatibus iure consequatur repudiandae commodi!
  </div>
</Container>
```
