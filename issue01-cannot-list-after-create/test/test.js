'use strict';

console.log('Testing...');
if (!process.argv[2]) {
  console.log('Usage: node test { create | list }');
  process.exit();
}

const gremlin = require('gremlin');
const traversal = gremlin.process.AnonymousTraversalSource.traversal;
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;

const conn = new DriverRemoteConnection('ws://db:8182/gremlin');
const g = traversal().withRemote(conn);

async function create() {
  const r = await g
    .addV()
      .property(gremlin.process.t.label, 'Person')
      .property('name', 'Igor')
      .next();
  console.log(r);
};

async function list() {
  const r = await g.V().valueMap(true).toList();
  console.log(r);
};

(async function main() {

  if (process.argv[2] === 'create')
    await create();
  else if (process.argv[2] === 'list')
    await list();
  else
    await list();

  conn.close();

})();
