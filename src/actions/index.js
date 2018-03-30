

import { INCREMENT } from "./../constants/action-types";

/*

Example:

export const addArticle = article => ({ type: "ADD_ARTICLE", payload: article });


Source:
https://www.valentinog.com/blog/react-redux-tutorial-beginners/#React_Redux_tutorial_who_this_guide_is_for


*/


// export const INCREMENT = 'INCREMENT';


export const increaseValue = () => ({ type: INCREMENT });