import React, { Suspense } from "react";

const ComponentLoader = (Component) => (props) =>
    (
        <Suspense fallback={<div>UI Loading...</div>}>
            <Component {...props} />
        </Suspense>
    );

export default ComponentLoader;
