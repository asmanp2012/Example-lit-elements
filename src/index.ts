
import cytoscape from '../dist/cytoscape/cytoscape.esm.min.js'

const cy = cytoscape({
  container: document.getElementById('cy'),
  elements: {
    nodes: [
      {
        data: { id: 'a' }
      },

      {
        data: { id: 'b' }
      }
    ],
    edges: [
      {
        data: { id: 'ab', source: 'a', target: 'b' }
      }
    ]
  },

  layout: {
    name: 'grid',
    rows: 1
  },

  // so we can see the ids
  style: [
    {
      selector: 'node',
      style: {
        label: 'data(id)'
      }
    }
  ]
})


// in the first load
// cy.nodes().layout({
//   name: 'preset',
//   animate: true,
//   fit: false,
//   transform: (node) => {
//     return {
//       x: node.position('x') + 100,
//       y: node.position('y') + 100
//     }
//   }
// }).run()
