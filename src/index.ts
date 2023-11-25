import * as visNetwork from 'vis-network'
import * as visData from 'vis-data'

const nodes = new visData.DataSet([
  {
    id: 0,
    shape: 'circle',
    color: "#58595b",
    label: 'Node 1'
  },
  {
    id: 1,
    shape: 'circle',
    color: "#58595b",
    label: 'Node 2'
  },
  {
    id: 2,
    shape: 'circle',
    color: "#3F51B5",
    label: 'Node 3'
  },
  {
    id: 3,
    shape: 'circle',
    color: "#3F51B5",
    label: 'Node 4'
  },
  {
    id: 4,
    shape: 'circle',
    color: "#3F51B5",
    label: 'Node 5'
  }
])

// create an array with edges
const edges = new visData.DataSet([
  { id: 0, from: 6, to: 0 },
  { id: 1, from: 7, to: 0 },
  { id: 2, from: 1, to: 0 },
  { id: 3, from: 2, to: 0 },
  { id: 4, from: 3, to: 0 },
  { id: 5, from: 4, to: 0 },
  { id: 6, from: 5, to: 0 },
  { id: 7, from: 8, to: 1 },
  { id: 8, from: 9, to: 1 },
  { id: 9, from: 10, to: 2 },
  { id: 10, from: 11, to: 2 },
  { id: 11, from: 12, to: 3 },
  { id: 12, from: 13, to: 3 },
  { id: 13, from: 14, to: 4 },
  { id: 14, from: 15, to: 4 },
  { id: 15, from: 16, to: 4 },
  { id: 16, from: 17, to: 5 },
  { id: 17, from: 18, to: 5 },
  { id: 18, from: 19, to: 5 },
  { id: 19, from: 20, to: 5 },
])

// Create a network
const container = document.getElementById('mynetwork')
if (container != null) {
  const data = {
    nodes: nodes,
    edges: edges
  }
  const options = { layout: { randomSeed: 2 } }
  const network = new visNetwork.Network(container, data, options)
  network.on( 'click', function(properties) {
    var ids = properties.nodes;
    var clickedNodes = nodes.get(ids);
    console.log('clicked nodes:', clickedNodes);
  });
}
