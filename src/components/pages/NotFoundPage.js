import React from "react";

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <body style={{textAlign: "center"}}>
                <h1>404! Page not found! :[ </h1>
                <p>
                    There may be an error in the URL given to you. <br/>
                    Check out the <a href={"https://www.jwscully.uk"}> homepage </a> for what you're looking for.
                </p>
            </body>
        );
    }
}
