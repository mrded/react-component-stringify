import XMLBuider from 'xmlbuilder';

const buildXML = (node) => {
  const root = XMLBuider.begin().ele(node.component, node.props || {});

  if (node.children && node.children.length > 0) {
    // Add children.
    node.children
      .map(buildXML)
      .map(child => root.importDocument(child));
  }
  else if (node.value) {
    // Or set a value.
    root.txt(node.value);
  }

  return root;
}

export default (meta) => {
  const xml = buildXML(meta).end({ 
    // pretty: true,
    allowEmpty: false,
  });
  
  return xml; 
}
