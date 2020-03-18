import Layout from "../components/layout";
import Card from "../resources/card"
import { Component } from "react";
import { get } from "../../services/rest_service"

export default class Hardware extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpu: {
                architecture: "",
                cpu_modes: "",
                no_of_cpus: "",
                threads: "",
                sockets: " ",
                vendor_id: "",
                cpu_model: "",
                cpu_mhz: "",
                l1: "",
                l2: "",
                l3: ""
            },
            ram: {
                main_memory: "",
                swap_memory: ""
            },
            os: {
                kernel_name: "",
                host_name: "",
                kernel_version: "",
                os: ""
            },
            network: {
                data: []
            }
        };
        this.handleHardwareInfo();
    }

    handleHardwareInfo = e => {
        get("http://127.0.0.1:8080/hardware").then(m => {
            if (m != "ERR") {
                this.setState({ cpu: m.cpu, network: m.network, os: m.os, ram: m.ram });
                // console.log(m.network.data);
            }
        })

    }

    render() {
        let output = this.state.network.data.map((data, index) => (

            <div class="flex flex-wrap">
                <Card title="Name" data={data.name} />
                <Card title="MTU" data={data.mtu} />
                <Card title="MAC Address " data={data.mac_address} />
                <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
            </div>

        ))
        return (
            <Layout>
                <div class="container w-full mx-auto pt-20">
                    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">RAM Information</h5>
                        </div>
                        <div class="flex flex-wrap">
                            <Card title="Main Memory" data={String((this.state.ram.main_memory / 1000).toFixed(2)) + " GB"} />
                            <Card title="Swap Memory" data={String((this.state.ram.swap_memory / 1000).toFixed(2)) + " GB"} />
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">Network Information</h5>
                        </div>
                        {output}
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">CPU Information</h5>
                        </div>
                        <div class="flex flex-wrap">
                            <Card title="Architecture" data={this.state.cpu.architecture} />
                            <Card title="CPU Modes" data={this.state.cpu.cpu_modes} />
                            <Card title="Number of CPUs" data={this.state.cpu.no_of_cpus} />
                            <Card title="Threads per Core" data={this.state.cpu.threads} />
                            <Card title="Sockets" data={this.state.cpu.sockets} />
                            <Card title="Vendor ID" data={this.state.cpu.vendor_id} />
                            <Card title="CPU model" data={this.state.cpu.cpu_model} />
                            <Card title="CPU MHz" data={this.state.cpu.cpu_mhz} />
                            <Card title="L1 Cache" data={this.state.cpu.l1} />
                            <Card title="L2 Cache" data={this.state.cpu.l2} />
                            <Card title="L3 Cache" data={this.state.cpu.l3} />
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>


                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-600">Operating System Information</h5>
                        </div>
                        <div class="flex flex-wrap">
                            <Card title="Kernel Name" data={this.state.os.kernel_name} />
                            <Card title="Hostname" data={this.state.os.host_name} />
                            <Card title="Kernel Version" data={this.state.os.kernel_version} />
                            <Card title="Operating System " data={this.state.os.os} />
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>

                    </div>
                </div>
            </Layout>
        );
    }
}