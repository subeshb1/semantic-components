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
</Container>
```
