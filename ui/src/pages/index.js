import Layout from "../components/layout";
import Card from "../resources/card";
import { Component } from "react";
import Progress from '../resources/progress';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: 3,
            sysTime: '',
            duration: '',
            noOfUsers: '',
            totalMainMemory: '',
            usedMainMemory: '',
            totalSwapMemory: '',
            usedSwapMemory: '',
            totalTasks: '',
            runningTasks: '',
            sleepingTasks: '',
            zombieTasks: '',
            userSpaceTime: '',
            kernelSpaceTime: '',
            idleTime: ''
        };
    }
    render() {
        let percentage = this.state.percentage;
        let c = <CircularProgressbarWithChildren
            value={this.state.percentage}
            styles={{
                root: {},
                path: {
                    stroke: `#FF9F1E`,
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
                    fill: 'white',
                    fontSize: '15px',
                },
                background: {
                    fill: '#3e98c7',
                },
            }}
        >
            <div >
                <strong class="font-medium uppercase text-white text-4xl">{percentage}%</strong>
                <p class="font-medium uppercase text-red-500 text-2xl">11GB/20GB</p>
            </div>
        </CircularProgressbarWithChildren>;
        return (
            <Layout>
                <div class="container w-full mx-auto pt-20">
                    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">Basic Info</h5>
                        </div>
                        <div class="flex flex-wrap">
                            <Card title="System Time" data={this.state.sysTime} />
                            <Card title="Duration" data={this.state.duration} />
                            <Card title="Number of Users" data={this.state.noOfUsers} />
                        </div>

                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">Mem Info</h5>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <div class="md:w-1/2 xl:w-1/4 p-3 m-5 mr-10 text-center">
                                <Progress percentage={50} progressColor={'#F97F51'} textColor={'white'}
                                    content={<p class="font-medium uppercase text-red-500 text-2xl" style={{ color: "#CAD3C8" }}>11GB/20GB</p>}
                                />
                                <h5 class="font-bold uppercase text-gray-100 text-2xl mt-5">Main Memory Usage</h5>
                            </div>
                            <div class="md:w-1/2 xl:w-1/4 p-3 m-5 ml-10 text-center">
                                <Progress percentage={50} progressColor={'#FD7272'} textColor={'white'}
                                    content={<p class="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>11GB/20GB</p>}
                                />
                                <h5 class="font-bold uppercase text-gray-100 text-2xl mt-5">Swap Memory Usage</h5>
                            </div>

                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">Task Info</h5>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <div class="md:w-1/2 xl:w-1/4 p-3 m-5 mr-10 text-center">
                                <Progress percentage={50} progressColor={'#ff7f50'} textColor={'white'}
                                    content={<p class="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>11GB/20GB</p>}
                                />
                                <h5 class="font-bold uppercase text-gray-100 text-2xl mt-5">Running Process</h5>
                            </div>
                            <div class="md:w-1/2 xl:w-1/4 p-3 m-5 ml-10 text-center">
                                <Progress percentage={50} progressColor={'#ff4757'} textColor={'white'}
                                    content={<p class="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>11GB/20GB</p>}
                                />
                                <h5 class="font-bold uppercase text-gray-100 text-2xl mt-5">Sleeping Process</h5>
                            </div>
                            <div class="md:w-1/2 xl:w-1/4 p-3 m-5 ml-10 text-center">
                                <Progress percentage={50} progressColor={'#ffa502'} textColor={'white'}
                                    content={<p class="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>11GB/20GB</p>}
                                />
                                <h5 class="font-bold uppercase text-gray-100 text-2xl mt-5">Zombie Process</h5>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">CPU Info</h5>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <div class="md:w-1/2 xl:w-1/4 p-3 m-5 mr-10 text-center">
                                <Progress percentage={50} progressColor={'#F97F51'} textColor={'white'}
                                    content={<p class="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>11GB/20GB</p>}
                                />
                                
                                <h5 class="font-bold uppercase text-gray-100 text-2xl mt-5">Time in UserSpace</h5>
                            </div>
                            <div class="md:w-1/2 xl:w-1/4 p-3 m-5 ml-10 text-center">
                                <Progress percentage={50} progressColor={'#FD7272'} textColor={'white'}
                                    content={<p class="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>11GB/20GB</p>}
                                />
                                
                                <h5 class="font-bold uppercase text-gray-100 text-2xl mt-5">Time in KernelSpace</h5>
                            </div>
                            <div class="md:w-1/2 xl:w-1/4 p-3 m-5 ml-10 text-center">
                                <Progress percentage={50} progressColor={'#ff9f43'} textColor={'white'}
                                    content={<p class="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>11GB/20GB</p>}
                                />
                                
                                <h5 class="font-bold uppercase text-gray-100 text-2xl mt-5">Idle Time</h5>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
                    </div>
                </div>
            </Layout >
        );
    }
}