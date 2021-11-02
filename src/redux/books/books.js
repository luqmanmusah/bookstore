import React from "react";

class Books extends React.Component {
    state = {
        bookList: [
            {
                id: 1,
                title: 'The Book Club',
            },
            {
                id: 2,
                title: 'The good book',
            },
            {
                id: 3,
                title: 'Rules of Power',
            },
        ]
    }
    render() {
        return(
    <div>
      <h3>Add new book</h3>
      <form onSubmit={this.addBook}>
        <label>Title:</label>
        <br />
        <input type="text" className="title" name="title"/>
        <br />
        <label>Category:</label>
        <br />
        <input type="text" className="category" name="category" onChange={updateAuthor} />
        <br />
        <input type="submit" value="Submit" onClick={submitBook} />
      </form>
      <ul>
          {this.state.bookList.map((book) => (
              <li>
                  <p>{book.title}</p>
                  <button>delete</button>
              </li>
          ))}
      </ul>
    </div>
        )
    }
}