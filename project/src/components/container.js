import React, { Component } from 'react'

export default class Container extends Component {
    static defaultProps = {
        fluid:false,
        text:false,
        textAlign:"",
        extra:"",
    }
    render() {
        const {children,fluid,text,textAlign,extra} = this.props;
        const className = `
        ui
        ${fluid?"fluid":""}
        ${text?"text":""}
        ${textAlign?( textAlign!=="justified" ? textAlign + " aligned":textAlign):""}
        ${extra}
        container
        `.replace(/\s+/g," ");
        return (
            <div className={className}>
                {children}
            </div>
        )
    }
}
