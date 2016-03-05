module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'xselect-ed-bug',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
