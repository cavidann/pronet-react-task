import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends Component {

    render() {
        return ( 
            <div className="flex a-center">
                <StarRatingComponent 
                name="rate2" 
                editing={false}
                renderStarIcon={() => <i className="fa fa-star" aria-hidden="true"></i>}
                starColor={'#e74c3c'} /* color of selected icons, default `#ffb400` */
                emptyStarColor={'#bdc3c7'}
                starCount={5}
                value={this.props.rating}
                />
            </div>
        );
    }
}

export default StarRating;