import React, {Component} from 'react';
import NavBar from './navbar';
import Post from './post';
import '../styles/home.css';

class Home extends Component {
  render() {
    return(
      <div className="container-fluid">
        <NavBar />
        
        <div className="container">
          <div className="row">
            <div className="col-md-8">

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


            <div className="col-md-4">
              <div className="card my-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div>

              <div className="card my-4">
                <h5 className="card-header">Categories</h5>

                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;