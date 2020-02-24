import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        // console.log("failedComponent: ", this.props.failedComponent);
    }

    render() {
        if (this.state.hasError) {

            switch (this.props.failedComponent) {
                case 'HandsetDetails':
                    return <div>Unable to show HandsetDetails Details</div>;
                case 'PaymentDetails':
                    return <div>Unable to show Payment Details</div>;
                default:
                    return <div>Oops! Something went wrong.</div>;
            }

        }

        return this.props.children;
    }
}