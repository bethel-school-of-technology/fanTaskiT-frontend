import React from 'react'; 
import axios from 'axios'; 

class Users extends React.Component {
    state = {
        userData: []
    };

    fetchUserData = () => {
        var encodedURI = window.encodeURI(this.props.uri);

        axios.get(encodedURI).then(response => {
            this.setState(() => {
                return { userData: response.data }; 
            });
        });
    }

    componentDidMount(){
        this.fetchUserData();
    }

    render() {
        console.log(this.state.userData); 

        if(this.state.userData === 0){
            return (<div>Failed to fetch data from server.</div>)
        }
    }
}