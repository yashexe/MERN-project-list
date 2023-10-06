const toString = desc => 
    desc.reduce( (prev, curr) => prev + curr.text + '\n\n', '')

export default toString