/*
*   NPM Modules
*/
var React = require('react');
var {Link, IndexLink} = require('react-router');
/*
*   Custom Components
*/

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        //todo - run search func
        alert('Not yet implemented');
    },
    render: function() {
        return (
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <ul className='menu'>
                        <li className='menu-text'>ReactWeather</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                        <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                    </ul>
                </div>
                <div className='top-bar-right'>
                    <form onSubmit={this.onSearch}>
                        <ul className='menu'>
                            <li>
                                <input type="search" placeholder="Search Weather by City"></input>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});


module.exports = Nav;
