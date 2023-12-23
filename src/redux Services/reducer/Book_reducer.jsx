import { myauthor, mytitle } from "../action/Book"

const initialState = {
    title: "Let Us C",
    author: "Avinash"
}

const bookData = (state = initialState, action) => {
    switch (action.type) {
        case mytitle:
            return {
                title: "Java"
            }
        case myauthor:
            return {
                author: "Ram Ji"
            }
        default:
            return state;

    }
}
export default bookData;