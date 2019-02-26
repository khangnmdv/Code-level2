import React, { Component } from 'react';
import './App.css';
import Search from './component/Search'
import { input } from './component/input';
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: input,
      ketqua: [],
    }
  }

  componentDidMount() {
    const allAraay = [];
    var {data} = this.state
    for(var i = 0; i < data.length; i++){
      for(var o = 0; o < data[i].criteria.length; o++){
        for(var j = 0; j < data[i].criteria[o].indices.length; j++){
          var indices = data[i].criteria[o].indices[j];
          allAraay.push(indices)
        }
      }
    }

    const group = _.groupBy(allAraay, (t) => {
      return t.level
    })
    console.log(group)
  }

  onSearchData(value) {
    var show = [];
    const key = new RegExp(value, 'gi');
    var { data } = this.state
    for (var i = 0; i < data.length; i++) {
      for (var o = 0; o < data[i].criteria.length; o++) {
        if (data[i].criteria[o].name.match(key)) {
         show.push({ name: data[i].criteria[o].name, stt: data[i].criteria[o].stt });
        }
      }
    }
    
    if (!value) {
      this.setState({ ketqua: [] })
    } else {
      this.setState({ ketqua: show })
    }

  }
  
  render() {
    var { ketqua } = this.state
    return (
      <div className='App'>

        <header>
          <div className='search'>
            <Search onSearchData={this.onSearchData.bind(this)} />
          </div>
        </header>
        <body>
          <div className='Show'>
            {ketqua ? ketqua.map((item) => (
              <li> {item.name} </li>
            )) : null}
          </div>
        </body>
      </div>
    );
  }
}

export default App;
