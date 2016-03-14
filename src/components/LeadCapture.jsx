var React = require('react');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

var LeadCapture = React.createClass({

    onSubmit: function(e){
        if(!this.refs.fieldEmail.state.valid){
            alert('You suck at filling out the email field');
        }else{
            //send request to server
            var httpRequestBody = {
                firstName: this.refs.fieldEmail.state.value,
                email: this.refs.fieldEmail.state.value
            }
            alert('submitted!');

            this.refs.fieldEmail.clear();
            this.refs.fieldName.clear();
        }
    },

    render: function(){
        return(

            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-body">

                        <NameField type="First" ref="fieldName"/>
                        <EmailField ref="fieldEmail"/>
                        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>

                    </div>
                </div>
            </div>

        );
    }
});

module.exports = LeadCapture;
