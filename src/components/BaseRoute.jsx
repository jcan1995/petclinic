import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const BaseRoute = () => {
    return <Redirect to="/appointments"/>;
};

export default BaseRoute;
