exports.createPages = async ({actions, graphql}) =>{

    const products = await graphql(`
        query{
            allMarkdownRemark {filter: {fileAbsolutePath: {regex: "/product/"}}
                edges {
                  node {
                    frontmatter {
                      path
              }
            }
          }
        }
      }
    `)

    products.data.allMarkdownRemark.edges.forEach(edge=>{
        const path = edge.node.frontmatter.path;
        if(path){
          actions.createPage({
            path: path,
            component: require.resolve('./src/templates/productTemplate.js'),
            context: {path:path}
        })
        }
       
    })

  // Faire d'autres querry pour créer dautres pages de template

  const articles = await graphql(`
        query{
            allMarkdownRemark {filter: {fileAbsolutePath: {regex: "/articles/"}}
                edges {
                  node {
                    frontmatter {
                      path
              }
            }
          }
        }
      }
    `)

    articles.data.allMarkdownRemark.edges.forEach(edge=>{
      const path = edge.node.frontmatter.path;
      if(path){
        actions.createPage({
          path: path,
          component: require.resolve('./src/templates/articleTemplate.js'),
          context: {path:path}
      })
      }
     
  })


}
