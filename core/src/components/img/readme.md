# pop-img



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                                                                                                              | Type     | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------- |
| `alt`    | `alt`     | This attribute defines the alternative text describing the image. Users will see this text displayed if the image URL is wrong, the image is not in one of the supported formats, or if the image is not yet downloaded. | `string` | `undefined` |
| `src`    | `src`     | The image URL. This attribute is mandatory for the `<img>` element.                                                                                                                                                      | `string` | `undefined` |


## Events

| Event         | Description                                 | Type                |
| ------------- | ------------------------------------------- | ------------------- |
| `popDidLoad`  | Emitted when the image has finished loading | `CustomEvent<void>` |
| `popError`    | Emitted when the img fails to load          | `CustomEvent<void>` |
| `popWillLoad` | Emitted when the img src has been set       | `CustomEvent<void>` |


## Shadow Parts

| Part      | Description              |
| --------- | ------------------------ |
| `"image"` | The inner `img` element. |


## Dependencies

### Used by

 - [pop-app](../app)

### Graph
```mermaid
graph TD;
  pop-app --> pop-img
  style pop-img fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*