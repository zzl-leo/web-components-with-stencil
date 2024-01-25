import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css',
  shadow: true,
})
export class MyCounter {
  @Prop() name: string;

  @State() count: number = 0;

  increment = () => {
    this.count += 1
  }
  render() {
    return (
      <Host>
        <button onClick={this.increment}>
          {this.name}-Clicks: {this.count}
        </button>
      </Host>
    );
  }
}
