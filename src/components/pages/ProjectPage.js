import * as React from "react";
import {Link} from "react-router-dom";

export default class ProjectPage extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        window.open("https://localhost:3000")
    }

    render() {
        return (
            <div>
                <Link to={'/'}>
                    <button>Click me</button>
                </Link>
            </div>
        );
    }
}
