const heading = React.createElement("h1", {
    id:"heading1",
    className:"head"
}, "Hello ");



const parent = React.createElement("div",{
    id:'parent'
},React.createElement('div',{
    id:'child'
},React.createElement('h1',{},"This is a h1 tag")))


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
