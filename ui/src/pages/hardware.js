import Layout from "../components/layout";
import Card from "../resources/card"
import { Component } from "react";

export default class Hardware extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div class="container w-full mx-auto pt-20">
                    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                        
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">CPU Information</h5>
                        </div>
                        <div class="flex flex-wrap">
                            <Card title="Architecture" data="uname -i" />
                            <Card title="CPU Modes" data="lscpu" />
                            <Card title="Number of CPUs" data="lscpu" />
                            <Card title="Threads per Core" data="lscpu" />
                            <Card title="Sockets" data="lscpu" />
                            <Card title="Vendor ID" data="lscpu" />
                            <Card title="CPU model" data="lscpu" />
                            <Card title="CPU MHz" data="lscpu" />
                            <Card title="L1 Cache" data="lscpu" />
                            <Card title="L2 Cache" data="lscpu" />
                            <Card title="L3 Cache" data="lscpu" />
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">RAM Information</h5>
                        </div>
                        <div class="flex flex-wrap">
                            <Card title="Total Memory" data="free -m" />
                            <Card title="Swap Memory" data="free -m" />
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>

                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">Operating System Information</h5>
                        </div>
                        <div class="flex flex-wrap">
                            <Card title="Kernel Name" data="uname -s" />
                            <Card title="Hostname" data="uname -n" />
                            <Card title="Kernel Version" data="uname -v" />
                            <Card title="Operating System " data="uname -o" />
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
                        <div class="flex flex-wrap">
                            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                                {/* <div class="bg-gray-900 border border-gray-800 rounded shadow">
                                    <div class="border-b border-gray-800 p-3">
                                        <h5 class="font-bold uppercase text-gray-600">Operating System Information</h5>
                                    </div>
                                    <div class="w-full px-4 ">
                                        <Card title="Operating System " data="uname -o" />
                                        <Card title="Kernel Name" data="uname -s" />
                                        <Card title="Hostname" data="uname -n" />
                                        <Card title="Kernel Version" data="uname -v" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                                <div class="bg-gray-900 border border-gray-800 rounded shadow">
                                    <div class="border-b border-gray-800 p-3">
                                        <h5 class="font-bold uppercase text-gray-600">CPU Information</h5>
                                    </div>
                                    <div class="w-full px-4 ">
                                        <Card title="Architecture" data="uname -i" />
                                        <Card title="CPU Modes" data="lscpu" />
                                        <Card title="Number of CPUs" data="lscpu" />
                                        <Card title="Threads per Core" data="lscpu" />
                                        <Card title="Sockets" data="lscpu" />
                                        <Card title="Vendor ID" data="lscpu" />
                                        <Card title="CPU model" data="lscpu" />
                                        <Card title="CPU MHz" data="lscpu" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}