module.exports = {
  key: 'recipe',

  // You'll want to provide some helpful display labels and descriptions
  // for users. Zapier will put them into the UX.
  noun: 'Recipe',
  display: {
    label: 'Find a Recipe',
    description: 'Search for recipe by cuisine style.'
  },

  // `operation` is where we make the call to your API to do the search
  operation: {
    // This search only has one search field. Your searches might have just one, or many
    // search fields.
    inputFields: [
      {
        key: 'style',
        type: 'string',
        label: 'Style',
        helpText: 'Cuisine style to limit to the search to (i.e. mediterranean or italian).'
      }
    ],

    perform: (z, bundle) => {
      const url = 'http://57b20fb546b57d1100a3c405.mockapi.io/api/recipes';

      // Put the search value in a query param. The details of how to build
      // a search URL will depend on how your API works.
      const options = {
        params: {
          search: bundle.inputData.style
        }
      };

      return z.request(url, options)
        .then(response => JSON.parse(response.content));
    }
  }
};
