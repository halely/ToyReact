import {ToyReact,Component} from './ToyReact.js';
class Mycomponent extends Component{
	render(){
		return <div>
		<span>Hello</span>
		<span>world</span>
		<div>
		{true}
		{this.children}
		</div>
		</div>
	}
}

let a=<Mycomponent name="a" id="ida">
<div>123</div>
</Mycomponent>

ToyReact.render(
    a,
	document.body
)
	
