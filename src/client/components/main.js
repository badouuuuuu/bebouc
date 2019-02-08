/* becodeorg/bookshelf
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";
import AddBooks from "./addbooks.js";

export default class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>{"Bebouc"}</h1>
                <hr />
                <small>{"Laura, Olivier, Youssef, Elias"}</small>
                <form action="/books" method="get">
                    <button>{"Books"}</button>
                    <AddBooks />
                </form>
            </div>
        );
    }
}
