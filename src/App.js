import React, { Component } from 'react'
import { mainData } from './data'
import ListProjects from './ListProjects'
import ListFeats from './ListFeats';
import Header from './Header';
import './sass/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: mainData.projects,
      feats: mainData.feats,
      social: mainData.social,
      header: mainData.header,
    }
  }

  render() {
    return (
      <div className='container'>

        {/* Header Component */}
        <div>
          <Header
            header = { this.state.header }
            social = { this.state.social }
          />
        </div>

        {/* Projects Component */}
        <div>
          <ListProjects
            projects = { this.state.projects }
          />
        </div>

        {/* Feats Component */}
        <div>
          <ListFeats
            feats = { this.state.feats }

          />
        </div>

      {/* End of App */}
      </div>
    )
  }
}

export default App;
