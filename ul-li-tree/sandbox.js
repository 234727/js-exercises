let container = document.getElementById('.container');

let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {
            "li" : {
                "ul" : {
                    "xxxd": {}
                }
            }
        }
      }
    }
  };

const createTree = (container, data) => {
    const list = document.createElement('ul');
    const arr = Object.entries(data);
    req(arr, list);
    document.body.append(list);
} 

const req = (arr, el) => {
    arr.forEach(a => {
        if(Array.isArray(a)) {
            req(a, el);
        } else if(typeof(a) === "object") {
            const newArr = Object.entries(a);
            const ul = document.createElement('ul');
            el.append(ul);
            req(newArr, ul);
        } else {
            const li = `<li>${a}</li>`;
            el.innerHTML += li;
        }
    })
}

  createTree(container, data);