import React, { Component } from 'react';

class NewsList extends Component {
    render() {
        const { arrNews} = this.props;
        return (
            <div>
                Aqui saldrá la lista de los nuevos trabajos publicados
                {/*{arrNews.map( news => <MovieCard key={movie.id} movie={movie} /> )}*/}
            </div>
    
        );
    }
}

export default NewsList;