// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

//  // You can delete this file if you're not using it

//  const path = require("path");

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;

//   const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`);
//   const katzeTemplate = path.resolve(`src/templates/Katze.js`);

//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//               type
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       if(node.frontmatter.type === 'katze') {
//         createPage({
//           path: node.frontmatter.path,
//           component: katzeTemplate,
//           context: {}, // additional data can be passed via context
//         });
//       } else {
//         createPage({
//           path: node.frontmatter.path,
//           component: blogPostTemplate,
//           context: {}, // additional data can be passed via context
//         });
//       }

//     });
//   });
// };
