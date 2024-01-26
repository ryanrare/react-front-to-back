import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id:1,
        title: "Galeria",
        body: "pode ser um texto1"
      },
      {
        id:2,
        title: "Titulo 2",
        body: "pode ser um texto2"
      },
      {
        id:3,
        title: "Titulo 3",
        body: "pode ser um texto3"
      }
    ]
  };

  timeoutUpdate = null;

  componentDidMount () {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout()
  };

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "As melhores peças para voce!"
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 10000);
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">  
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}
export default App;
