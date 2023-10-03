const toArrayObjects = ( description ) => description
    .split('\n')
    .slice(0, 5)
    .filter(line => line !== '')
    .map(line => ({text: line}) )

export default toArrayObjects