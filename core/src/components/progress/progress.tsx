import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { Color } from 'src/type';

/**
 * Progress bar can be used to show the progress of a task or to show the passing of time.
 *
 * @part native - Native `progress` HTML element.
 */
@Component({
  tag: 'pop-progress',
  styleUrl: 'progress.scss',
  shadow: true,
})
export class Progress implements ComponentInterface {
  /**
   * The value of a progress is analogous to the value of a `<progress>`
   */
  @Prop({ mutable: true }) value?: number;

  /**
   *
   */
  @Prop({ reflect: true }) max?: number = 100;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  render() {
    return (
      <Host>
        <progress part="native" value={this.value} max={this.max}>
          <slot />
        </progress>
      </Host>
    );
  }
}