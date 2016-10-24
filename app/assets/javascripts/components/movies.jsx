class Movies extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    var url = "http://localhost:3000/movies.json";

    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      success: (data) => {
        this.setState({
          movies: data,
        });
      }
    });
  }

  render() {
    var movies = this.state.movies.map((movie) =>{
      return (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      )
    });

    return (
      <div>
        {movies}
      </div>
    )
  }
}
