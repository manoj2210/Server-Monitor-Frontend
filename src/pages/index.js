import Layout from "../components/layout";
import Card from "../resources/card";
import { Component } from "react";
import Progress from '../resources/progress';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const BackendUrl = process.env.backendurl;
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sysTime: ' ',
            duration: ' ',
            noOfUsers: ' ',
            totalMainMemory: ' ',
            usedMainMemory: ' ',
            totalSwapMemory: ' ',
            usedSwapMemory: ' ',
            totalTasks: ' ',
            runningTasks: ' ',
            sleepingTasks: ' ',
            zombieTasks: ' ',
            userSpaceTime: ' ',
            kernelSpaceTime: ' ',
            idleTime: ' '
        };
        this.client = new W3CWebSocket(`ws://${BackendUrl}/home`);
    }
    componentDidMount() {
        this.client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        this.client.onmessage = (message) => {
            let obj = JSON.parse(message.data);
            this.setState({
                sysTime: obj.b.systime, duration: obj.b.duration, noOfUsers: obj.b.noofusers,
                totalMainMemory: obj.m.totalmem, totalSwapMemory: obj.m.totalswap, usedMainMemory: obj.m.usedmem,
                usedSwapMemory: obj.m.usedswap, totalTasks: obj.t.total_tasks, runningTasks: obj.t.running,
                sleepingTasks: obj.t.sleeping, zombieTasks: obj.t.zombie, userSpaceTime: obj.c.user, kernelSpaceTime: obj.c.kernel,
                idleTime: obj.c.idle
            });
            this.client.send("next");
        };
    }
    componentWillUnmount() {
        console.log("closing");
        this.client.send("close");
    }
    render() {
        let pMm = Math.round((this.state.usedMainMemory / this.state.totalMainMemory)* 100);
        let pSm = this.state.totalSwapMemory == 0 ? 0 : Math.round((this.state.usedSwapMemory / this.state.totalSwapMemory) * 100);
        let pRt = Math.round((this.state.runningTasks / this.state.totalTasks) * 100);
        let pSt = Math.round((this.state.sleepingTasks / this.state.totalTasks) * 100);
        let pZt = Math.round((this.state.zombieTasks / this.state.totalTasks) * 100);
        return (
            <Layout>
                <div className="container w-full mx-auto pt-20">
                    <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

                        <div className="border-b border-gray-800 my-3 py-3">
                            <h5 className="font-bold uppercase text-gray-600">Basic Info</h5>
                        </div>
                        <div className="flex flex-wrap">
                            <Card title="System Time" data={this.state.sysTime} />
                            <Card title="Duration" data={this.state.duration} />
                            <Card title="Number of Users" data={this.state.noOfUsers} />
                        </div>

                        <div className="border-b border-gray-800 my-3 py-3">
                            <h5 className="font-bold uppercase text-gray-600">Mem Info</h5>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <div className="md:w-1/2 xl:w-1/4 p-3 m-5 mr-10 text-center">
                                <Progress percentage={pMm} progressColor={'#F97F51'} textColor={'white'}
                                    content={<p className="font-medium uppercase text-red-500 text-2xl" style={{ color: "#CAD3C8" }}>
                                        {this.state.usedMainMemory / 1000}GB/{this.state.totalMainMemory / 1000}GB</p>}
                                />
                                <h5 className="font-bold uppercase text-gray-100 text-2xl mt-5">Main Memory Usage</h5>
                            </div>
                            <div className="md:w-1/2 xl:w-1/4 p-3 m-5 ml-10 text-center">
                                <Progress percentage={pSm} progressColor={'#FD7272'} textColor={'white'}
                                    content={<p className="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>
                                        {this.state.usedSwapMemory}GB/{this.state.totalSwapMemory}GB</p>}
                                />
                                <h5 className="font-bold uppercase text-gray-100 text-2xl mt-5">Swap Memory Usage</h5>
                            </div>

                        </div>
                        <hr className="border-b-2 border-gray-600 my-8 mx-4"></hr>
                        <div className="border-b border-gray-800 my-3 py-3">
                            <h5 className="font-bold uppercase text-gray-600">Task Info</h5>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <div className="md:w-1/2 xl:w-1/4 p-3 m-5 mr-10 text-center">
                                <Progress percentage={pRt} progressColor={'#ff7f50'} textColor={'white'}
                                    content={<p className="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>
                                        {this.state.runningTasks}/{this.state.totalTasks}</p>}
                                />
                                <h5 className="font-bold uppercase text-gray-100 text-2xl mt-5">Running Process</h5>
                            </div>
                            <div className="md:w-1/2 xl:w-1/4 p-3 m-5 ml-10 text-center">
                                <Progress percentage={pSt} progressColor={'#ff4757'} textColor={'white'}
                                    content={<p className="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>
                                        {this.state.sleepingTasks}/{this.state.totalTasks}</p>}
                                />
                                <h5 className="font-bold uppercase text-gray-100 text-2xl mt-5">Sleeping Process</h5>
                            </div>
                            <div className="md:w-1/2 xl:w-1/4 p-3 m-5 ml-10 text-center">
                                <Progress percentage={pZt} progressColor={'#ffa502'} textColor={'white'}
                                    content={<p className="font-medium uppercase text-2xl" style={{ color: "#CAD3C8" }}>
                                        {this.state.zombieTasks}/{this.state.totalTasks}</p>}
                                />
                                <h5 className="font-bold uppercase text-gray-100 text-2xl mt-5">Zombie Process</h5>
                            </div>
                        </div>
                        <hr className="border-b-2 border-gray-600 my-8 mx-4"></hr>
                        <div className="border-b border-gray-800 my-3 py-3">
                            <h5 className="font-bold uppercase text-gray-600">CPU Info</h5>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <div className="md:w-1/2 xl:w-1/4 p-3 m-5 mr-10 text-center">
                                <Progress percentage={this.state.userSpaceTime} progressColor={'#F97F51'} textColor={'white'}
                                />

                                <h5 className="font-bold uppercase text-gray-100 text-2xl mt-5">Time in UserSpace</h5>
                            </div>
                            <div className="md:w-1/2 xl:w-1/4 p-3 m-5 ml-10 text-center">
                                <Progress percentage={this.state.kernelSpaceTime} progressColor={'#FD7272'} textColor={'white'}
                                />

                                <h5 className="font-bold uppercase text-gray-100 text-2xl mt-5">Time in KernelSpace</h5>
                            </div>
                            <div className="md:w-1/2 xl:w-1/4 p-3 m-5 ml-10 text-center">
                                <Progress percentage={this.state.idleTime} progressColor={'#ff9f43'} textColor={'white'}
                                />

                                <h5 className="font-bold uppercase text-gray-100 text-2xl mt-5">Idle Time</h5>
                            </div>
                        </div>
                        <hr className="border-b-2 border-gray-600 my-8 mx-4"></hr>
                    </div>
                </div>
            </Layout >
        );
    }
}