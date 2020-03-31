import { Component } from "react";
import Layout from "../components/layout"
import { get } from "../../services/rest_service"
import Card from "../resources/card"
export default class Network extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conn: [],
            rout: [],
            actconn: [],
            noofcon: [],
            arr:[]
        }
        this.handleHardwareInfo();
    }
    handleHardwareInfo = e => {
        get("http://ec2-3-83-222-115.compute-1.amazonaws.com/network").then(async (m) => {
            if (m != "ERR") {
                this.setState({ conn: m.conn, rout: m.route_table, actconn: m.active_conn, noofcon: m.no_of_conn,arr:m.arr });
            }

        })

    }
    render() {
        let conn;
        if (this.state.conn) {
            let m = this.state.conn;
            conn = m.map((d, index) => (
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.name}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.uuid}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.type}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.device}</p>
                    </td>
                </tr >
            )
            );
        }

        let rout;
        if (this.state.rout) {
            let m = this.state.rout;
            rout = m.map((d, index) => (
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.destination}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.gateway}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.genmask}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.device}</p>
                    </td>
                </tr >
            )
            );
        }

        let actconn;
        if (this.state.actconn) {
            let m = this.state.actconn;
            actconn = m.map((d, index) => (
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.protocol}</p>
                    </td>
                    {/* <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.datasr}</p>
                    </td> */}
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.local_address}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.foreign_address}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.state}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.pid}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">{d.process_name}</p>
                    </td>
                </tr >
            )
            );
        }
        return (
            <Layout>
                <div class="container w-full mx-auto pt-20">
                    <div className="mx-auto px-4 sm:px-8">
                        <div className="m-10 flex flex-wrap justify-center">
                            
                            <Card title="Number of Hits" data={this.state.noofcon}></Card>
                        </div>
                        <div className="mx-auto px-4 sm:px-8">
                            <div class="border-b border-gray-800 my-3 py-3">
                                <h5 class="font-bold uppercase text-gray-500">Active Connections</h5>
                            </div>
                            <div className="m-5">
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                    >
                                                        <p className="text-gray-300 whitespace-no-wrap">
                                                            Protocol
                                            </p>
                                                    </th>
                                                    {/* <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                                                >
                                                    Data Sent/Received
                                            </th> */}
                                                    <th
                                                        className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                    >
                                                        <p className="text-gray-300 whitespace-no-wrap">
                                                            Local Address
                                            </p>
                                                    </th>
                                                    <th
                                                        className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                    >
                                                        <p className="text-gray-300 whitespace-no-wrap">
                                                            Foriegn Address
                                            </p>
                                                    </th>
                                                    <th
                                                        className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                    >
                                                        <p className="text-gray-300 whitespace-no-wrap">
                                                            State
                                            </p>
                                                    </th>
                                                    <th
                                                        className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                    >
                                                        <p className="text-gray-300 whitespace-no-wrap">
                                                            PID
                                            </p>
                                                    </th>
                                                    <th
                                                        className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                    >
                                                        <p className="text-gray-300 whitespace-no-wrap">
                                                            Process Name
                                            </p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {actconn}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
                        <div className="mx-auto px-4 sm:px-8">
                            <div class="border-b border-gray-800 my-3 py-3">
                                <h5 class="font-bold uppercase text-gray-500">Routing table</h5>
                            </div>
                            <div className="m-5">
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                    >
                                                        <p className="text-gray-300 whitespace-no-wrap">
                                                            Destination
                                            </p>
                                                    </th>
                                                    <th
                                                        className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                                                    >
                                                        Gateway
                                            </th>
                                                    <th
                                                        className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                    >
                                                        <p className="text-gray-300 whitespace-no-wrap">
                                                            Genmask
                                            </p>
                                                    </th>
                                                    <th
                                                        className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                    >
                                                        <p className="text-gray-300 whitespace-no-wrap">
                                                            Device
                                            </p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {rout}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
                        <div class="border-b border-gray-800 my-3 py-3">
                            <h5 class="font-bold uppercase text-gray-500">Connections</h5>
                        </div>
                        <div className="m-5">
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Name
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                                                >
                                                    UUID
                                            </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Type
                                            </p>
                                                </th>
                                                <th
                                                    className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        Device
                                            </p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {conn}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
                </div>
            </Layout>
        )
    }
}