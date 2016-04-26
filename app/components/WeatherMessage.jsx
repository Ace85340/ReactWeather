var React = require('react');

// var WeatherMessage = React.createClass ({
//     render: function() {
//         var {location, temp} = this.props;
//         return(
//             <h4>It is {temp} in {location}</h4>
//         );
//     }
// });

var WeatherMessage = ({temp, location}) => {
    return(
        <h4 className="text-center">It is {temp} in {location}</h4>
    );
};

module.exports = WeatherMessage;
