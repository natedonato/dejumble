import React from 'react';
import Dejumble from './dejumble';
const { sortedDict } = require("../output.js");

const Root = () => (
    <Dejumble sortedDict={sortedDict} />
);

export default Root;