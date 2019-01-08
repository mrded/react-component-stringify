import Render from './index.js';

describe('Render.Raw()', () => {
  it('a node without children', () => {
    const meta = { component: 'hr' };

    const output = Render.Raw(meta);

    expect(output).toBe('<hr/>');
  });

  it('a node with children', () => {
    const meta = {
      component: 'div',
      children: [
        { component: 'hr' }
      ],
    };

    const output = Render.Raw(meta);

    expect(output).toBe('<div><hr/></div>');
  });

  it('a text node', () => {
    const meta = {
      component: 'button',
      value: 'hello'
    };

    const output = Render.Raw(meta);

    expect(output).toBe(`<button>hello</button>`);
  });

  it('ignore a value field if children are available', () => {
    const meta = {
      component: 'div',
      value: 'hello',
      children: [
        { component: 'hr' }
      ],
    };

    const output = Render.Raw(meta);

    expect(output).toBe(`<div><hr/></div>`);
  });

  it('props', () => {
    const meta = {
      component: 'foo',
      props: { bar: 'baz' }
    };

    const output = Render.Raw(meta);

    expect(output).toBe(`<foo bar="baz"/>`);
  });
});
