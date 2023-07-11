import data from ./data.json;

for (let i =0; i<=data.length; i++) {
document.body.appendChild(
  Object.assign(
    document.createElement('div'),
    {
      innerText: data[i].symbol;
    }
  )
);}
