const input = process.argv.slice(2)
           
const formatInput  = input 
                    .map( item => item[0] )
                    .reduce( (sum,item) => sum + item )


console.log( `[${input}] becomes "${formatInput}"`)

