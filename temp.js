function Gizmo(id){
		this.id = id;
		this.name = 'anooj';
		function loggingText(){
			return "logging... id = " + id;
		}
}
console.log(new Gizmo(1).loggingText());