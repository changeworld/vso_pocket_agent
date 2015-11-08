'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} = React;

var MOCKED_TEAM_PROJECTS_DATA = [
  {
    "count": 2,
    "value": [
      {
        "id": "8564e5b3-2529-48d7-9036-6f0d94584561",
        "name": "personal",
        "revision": 470959037,
        "state": "wellFormed",
        "url": "https://changesworlds.visualstudio.com/DefaultCollection/_apis/projects/8564e5b3-2529-48d7-9036-6f0d94584561"
      },
      {
        "id": "12bbd10a-864e-48c5-9c0d-ffc95581287a",
        "name": "trial",
        "revision": 470959033,
        "state": "wellFormed",
        "url": "https://changesworlds.visualstudio.com/DefaultCollection/_apis/projects/12bbd10a-864e-48c5-9c0d-ffc95581287a"
      }
    ]
  }
];

var vso_pocket_agent = React.createClass({
  getInitialState: function(){
    return(
      {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        })
      }
    );
  },
  componentDidMount: function(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(MOCKED_TEAM_PROJECTS_DATA[0].value)
    });
  },
  render: function() {
    return(
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderTeamProject}
      />
    );
  },
  renderTeamProject: function(team_project){
    return(
      <TouchableHighlight>
        <View>
          <View style={styles.container}>
            <View style={styles.rightContainer}>
              <Text style={styles.name}>{team_project.name}</Text>
              <Text style={styles.url}>{team_project.url}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  separator: {
     height: 1,
     backgroundColor: '#DDDDDD',
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'left',
  },
  url: {
    fontSize: 10,
    marginBottom: 10,
    textAlign: 'left',
  }
});

AppRegistry.registerComponent('vso_pocket_agent', () => vso_pocket_agent);
