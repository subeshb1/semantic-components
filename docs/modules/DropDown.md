# Drop Down

```jsx
<Container>
  <DropDown text="File" open={["focus", "mouseover"]} close={[]}>
    <DropDown.Menu>
      <DropDown
        text="File"
        open={["focus", "mouseover"]}
        close={["mouseout"]}
        nested
      >
        <DropDown.Menu right>
          <div
            class="item"
            onClick={e => {
              e.cancelBubble = true;
              e.stopPropagation();
              e.preventDefault();
            }}
            tabIndex="0"
          >
            New
          </div>

          <div class="divider" />
          <div class="item">Download As...</div>
          <DropDown
            text="File"
            open={["focus", "mouseover"]}
            close={["mouseout"]}
            nested
          >
            <DropDown.Menu right>
              <div
                class="item"
                onClick={e => {
                  e.cancelBubble = true;
                  e.stopPropagation();
                  e.preventDefault();
                }}
                tabIndex="0"
              >
                New
              </div>

              <div class="divider" />
              <div class="item">Download As...</div>
            </DropDown.Menu>
          </DropDown>
        </DropDown.Menu>
      </DropDown>
      <a class="item" tabIndex="0" href="">
        <span class="description">ctrl + o</span>
        Open...
      </a>
      <div class="item">
        <span class="description">ctrl + s</span>
        Save as...
      </div>
      <div class="item">
        <span class="description">ctrl + r</span>
        Rename
      </div>
      <div class="item">Make a copy</div>
      <div class="item">
        <i class="folder icon" />
        Move to folder
      </div>
      <div class="item">
        <i class="trash icon" />
        Move to trash
      </div>
      <DropDown
        text="File"
        open={["focus", "mouseover"]}
        close={["mouseout"]}
        nested
      >
        <DropDown.Menu left>
          <div
            class="item"
            onClick={e => {
              e.cancelBubble = true;
              e.stopPropagation();
              e.preventDefault();
            }}
            tabIndex="0"
          >
            New
          </div>

          <div class="divider" />
          <div class="item">Download As...</div>
          <DropDown
            text="File"
            open={["focus", "mouseover"]}
            close={["mouseout"]}
            nested
          >
            <DropDown.Menu right>
              <div
                class="item"
                onClick={e => {
                  e.cancelBubble = true;
                  e.stopPropagation();
                  e.preventDefault();
                }}
                tabIndex="0"
              >
                New
              </div>

              <div class="divider" />
              <div class="item">Download As...</div>
            </DropDown.Menu>
          </DropDown>
        </DropDown.Menu>
      </DropDown>
    </DropDown.Menu>
  </DropDown>

  <Container>
    <Button>SUbeh</Button>
    <DropDown selection fluid close={["blur"]}>
      <input type="hidden" name="gender" />
      <i class="dropdown icon" />
      <div class="default text">Gender</div>
      <DropDown.Menu>
        <div class="item" data-value="jenny">
          <img class="ui mini avatar image" src="/img/avatar-3.png" />
          Jenny Hess
        </div>
        <div class="item" data-value="elliot">
          <img
            class="ui mini avatar image"
            src="/images/avatar/small/elliot.jpg"
          />
          Elliot Fu
        </div>
        <div class="item" data-value="stevie">
          <img
            class="ui mini avatar image"
            src="/images/avatar/small/stevie.jpg"
          />
          Stevie Feliciano
        </div>
        <div class="item" data-value="christian">
          <img
            class="ui mini avatar image"
            src="/images/avatar/small/christian.jpg"
          />
          Christian
        </div>
        <div class="item" data-value="matt">
          <img
            class="ui mini avatar image"
            src="/images/avatar/small/matt.jpg"
          />
          Matt
        </div>
        <div class="item" data-value="justen">
          <img
            class="ui mini avatar image"
            src="/images/avatar/small/justen.jpg"
          />
          Justen Kitsune
        </div>
      </DropDown.Menu>
    </DropDown>

    <DropDown text="File" open={["focus", "mouseover"]} close={[]}>
      <DropDown.Menu>
        <DropDown
          text="File"
          open={["focus", "mouseover"]}
          close={["mouseout"]}
          nested
        >
          <DropDown.Menu>
            <div
              class="item"
              onClick={e => {
                e.cancelBubble = true;
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              New
            </div>

            <div class="divider" />
            <div class="item">Download As...</div>
            <DropDown
              text="File"
              open={["focus", "mouseover"]}
              close={["mouseout"]}
              nested
            >
              <DropDown.Menu right>
                <div
                  class="item"
                  onClick={e => {
                    e.cancelBubble = true;
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  New
                </div>

                <div class="divider" />
                <div class=" item">Download As...</div>
              </DropDown.Menu>
            </DropDown>
          </DropDown.Menu>
        </DropDown>
        <a class="item" href="">
          <span class="description">ctrl + o</span>
          Open...
        </a>
        <div class="item">
          <span class="description">ctrl + s</span>
          Save as...
        </div>
        <div class="item">
          <span class="description">ctrl + r</span>
          Rename
        </div>
        <div class="item">Make a copy</div>
        <div class="item">
          <i class="folder icon" />
          Move to folder
        </div>
        <div class="item">
          <i class="trash icon" />
          Move to trash
        </div>
        <DropDown
          text="File"
          open={["focus", "mouseover"]}
          close={["mouseout"]}
          nested
        >
          <DropDown.Menu left>
            <div
              class="item"
              onClick={e => {
                e.cancelBubble = true;
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              New
            </div>

            <div class="divider" />
            <div class="item">Download As...</div>
            <DropDown
              text="File"
              open={["focus", "mouseover"]}
              close={["mouseout"]}
              nested
            >
              <DropDown.Menu right>
                <div
                  class="item"
                  onClick={e => {
                    e.cancelBubble = true;
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  New
                </div>

                <div class="divider" />
                <div class="item">Download As...</div>
              </DropDown.Menu>
            </DropDown>
          </DropDown.Menu>
        </DropDown>
      </DropDown.Menu>
    </DropDown>
  </Container>
</Container>
```
