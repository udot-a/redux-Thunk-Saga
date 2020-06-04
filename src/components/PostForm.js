import React from "react";
import {connect} from "react-redux";
import {addPostCreator, showAlert} from "../redux/actions";
import Alert from "./Alert";

class PostForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };
    };

    handleChangeInput = ({ target: { name, value } }) => {
        this.setState(prev => ({...prev, [name]: value}));
    }

    handleSubmit = event => {
        event.preventDefault();

        const {title} = this.state;
        const {addPostCreator, showAlert} = this.props;

        if (!title.trim()) {
            return showAlert("Название поста не может быть пустым!");
        }


        const newPost = {
            title,
            id: Date.now().toString()
        }

        this.setState({title: ""});

        addPostCreator(newPost);
    }

    render() {
        const {title} = this.state;
        const {alert} = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                {alert && <Alert alert={alert}/>}

                <div className="form-group">
                    <label htmlFor="title">
                        {"Заголовок поста"}
                    </label>

                    <input
                        className="form-control"
                        id="title"
                        onChange={this.handleChangeInput}
                        name={"title"}
                        type="text"
                        value={title}
                    />

                    <button
                        className={"btn btn-success"}
                        type={"submit"}
                    >
                        {"Создать"}
                    </button>
                </div>

            </form>
        )
    }
}

const mapDispatchToProps = {
    addPostCreator,
    showAlert
}

export default connect(state => ({alert: state.app.alert}), mapDispatchToProps)(PostForm)
