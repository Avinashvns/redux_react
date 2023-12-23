import { TITLE, AUTHOR } from "../action/Book"

const initialState = {
    mytitle: "Let Us C",
    myauthor: "Avinash"
}

const bookData = (state = initialState, action) => {
    switch (action.type) {
        case TITLE:
            return {
                ...state,
                mytitle: "Java"
            }
        case AUTHOR:
            return {
                ...state,
                myauthor: "Ram Ji"
            }
        default:
            return state;

    }
}
export default bookData;