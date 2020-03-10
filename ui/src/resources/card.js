import { Component } from "react";

export default class Card extends Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        {/* <div class="flex-shrink pr-4">
                            <div class="rounded p-3 bg-green-600"><i
                                class="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                        </div> */}
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-400">{this.props.title}</h5>
                            <h3 class="font-bold text-3xl text-gray-600">{this.props.data} <span class="text-green-500"><i
                                class="fas fa-caret-up"></i></span></h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}