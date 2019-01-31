import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

const fetchQuery = (operation, variables) => {
  return fetch('https://api.graph.cool/relay/v1/cjr9lflan53710110t39pregt', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

const enviroment =  new Environment({
  network,
  store,
})

export default enviroment
