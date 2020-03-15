import { Component } from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export default class Progress extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CircularProgressbarWithChildren
                value={this.props.percentage}
                styles={{
                    root: {}, path: {
                        stroke: this.props.progressColor,
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    trail: {
                        stroke: '#666',
                        strokeLinecap: 'butt',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    text: {
                        fill: this.props.textColor,
                        fontSize: '15px',
                    },
                    background: {
                        fill: '#3e98c7',
                    },
                }}
            >
                <div >
                    <strong class="font-medium uppercase text-white text-4xl">{this.props.percentage}%</strong>
                    {/* <p class="font-medium uppercase text-red-500 text-2xl">11GB/20GB</p> */}
                    {this.props.content}
                </div>
            </CircularProgressbarWithChildren>
        )
    }
}