import { Component } from "react";
import Link from "next/link";
import Websocket from 'react-websocket';


export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    handleData(data) {
        console.log(data);
    }

    render() {
        let records;
        if (this.state.data) {
            records = this.state.data.map((data, index) => (
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">Root</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">12345</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">3.2%</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <p className="text-gray-400 whitespace-no-wrap">4.2%</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm">
                        <span
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                            <span
                                aria-hidden
                                className="absolute inset-0 bg-green-500 opacity-50 rounded-full"
                            ></span>
                            <p className="text-gray-100 whitespace-no-wrap">600</p>
                        </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-gray-700 text-sm text-right">
                        <Link href="/">
                            <a className="w-40 text-center inline-block bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded">
                                Kill Process
                            </a>
                        </Link>
                    </td>
                </tr >
            ));
        }
        return (
            <div className="mx-auto px-4 sm:px-8 min-h-screen">
                <div className="py-8">
                    <div className="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between">
                        <div className="py-4 text-center lg:text-left">
                            <h2 className="text-xl font-semibold leading-tight text-gray-200">'s Memory</h2>
                        </div>
                        <div className="xl:block relative xl:max-w-xs xl:w-full"><div className="absolute inset-y-0 left-0 flex items-center pl-3"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-gray-600"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg></div><input placeholder="Search by keywords" className="block w-full border border-transparent bg-white focus:outline-none focus:border-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2" /></div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                                        >
                                            User
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
                                                CPU
                                            </p>
                                        </th>
                                        <th
                                            className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-300 whitespace-no-wrap">Memory</p>
                                        </th>
                                        <th
                                            className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-300 whitespace-no-wrap">Duration</p>
                                        </th>
                                        <th className="px-5 py-5 border-b-2 border-gray-200 bg-gray-900"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {records}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Websocket url='ws://127.0.0.1:8080/process'
              onMessage={this.handleData.bind(this)}/>
            </div>
        );
    }

};


