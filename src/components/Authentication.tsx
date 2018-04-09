import * as React from 'react';
import './Hello.css';

interface Props {
    authenticated?: boolean;
    userName: string;
}

function Authenticate({authenticated = false, userName }: Props) {
    return (
        <div> {userName} {authenticated.toString()}
            {/* <button onClick={authenticated}>Login</button> */}
        </div>
    );
}

export default Authenticate;
