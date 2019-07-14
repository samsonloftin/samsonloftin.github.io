import React, { Component } from 'react'
import { mainData } from "./projects"
import ListProjects from "./ListProjects"
import ListFeats from './ListFeats';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: mainData.projects,
      feats: mainData.feats,
      social: mainData.social,
    }
  }

  render() {
    return (
      <div>

        {/* Header Component */}
        <div>
          <Header
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
