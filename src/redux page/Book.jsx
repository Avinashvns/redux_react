import { connect } from "react-redux";
import { bookAuthor, bookTitle } from "../redux Services/action/Book";

const Book = ({ showauthor, showtitle, bookAuthor, bookTitle }) => {
    return (
        <div>
            <h3>Book Details</h3>
            <h5>{showtitle}</h5>
            <button onClick={bookTitle}>Title Update</button>

            <br />
            <h5>{showauthor}</h5>
            <button onClick={bookAuthor}>Author Update</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        author: state.author
    }
}
const mapDispatchToProps = {
    bookAuthor,
    bookTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);