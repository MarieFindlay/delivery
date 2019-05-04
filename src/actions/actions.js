/* Action Types */

export const actionTypes = {
    GO_TO_NEXT_PAGE: 'GO_TO_NEXT_PAGE',
    GO_TO_PREV_PAGE: 'GO_TO_PREV_PAGE',
  };
  
  /* Other Constants */
  
  /* Action Creators */
  
  export const nextPage = () => {
    return {
      type: actionTypes.GO_TO_NEXT_PAGE
    };
  };
  
  export const prevPage = () => {
    return {
      type: actionTypes.GO_TO_PREV_PAGE
    };
  };