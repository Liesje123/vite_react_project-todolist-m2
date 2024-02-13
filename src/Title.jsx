import React from 'react';

function Title({ niveau, contenu }) {
    const Component = `h${niveau}`;
    return (
        <Component>{contenu}</Component>
    );
}

export default Title;
