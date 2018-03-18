import React, {Component} from 'react';
import Post from './post';

class Index extends Component {
  render() {
    return(
      <div> 
        <h1 className="my-4">Page Heading
          <small>Secondary Text</small>
        </h1>
        <Post />
        <Post />
        <Post />

        <ul className="pagination justify-content-center mb-4">
          <li className="page-item">
            <a className="page-link" href="#">&larr; Older</a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">Newer &rarr;</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Index;