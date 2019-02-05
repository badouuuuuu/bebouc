/* becodeorg/bookshelf
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";

export default class AddBooks extends React.Component {
    render() {
        return (
            <div>
                <h2>{"Add a book"}</h2>
                <form action="/" method="post">
                    <textarea name="" id="" cols="30" rows="10">
                        {""}
                    </textarea>
                    <br />
                    <button>{"Add"}</button>
                </form>
            </div>
        );
    }
}
