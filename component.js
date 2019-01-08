import { createElement as CreateElement } from 'react';

const Component = (meta, components) => {
  if (meta.children) {
    return meta.children.map(child => {
      return Component(child, components);
    });
  }

  // React Component or html tag.
  const component = components[meta.component] || meta.component;

  return CreateElement(component, meta.props);
};

export default Component;
