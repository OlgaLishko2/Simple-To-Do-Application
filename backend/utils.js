let nextId = 1; //  task id 

// find index by id
const getIndexById = (id, arr) => arr.findIndex(item => item.id == id);

// find element by id
const getElementById = (id, arr) => arr.find(item => item.id == id);

// create new element
const createElement = (data) => {
  if (!data.text || data.text.trim() === "") return null;

  return {
    id: nextId++,
    text: data.text,
    completed: false,
    dueDate: data.dueDate || null,
    priority: data.priority || "normal"
  };
};

// update element
const updateElement = (id, data, arr) => {
  const index = getIndexById(id, arr);
  arr[index] = { ...arr[index], ...data };
};

//  seed data
const seedElements = (arr, type) => {
  arr.push(createElement({ text: `${type} example 1` }));
  arr.push(createElement({ text: `${type} example 2` }));
};

module.exports = {
  getIndexById,
  getElementById,
  createElement,
  updateElement,
  seedElements
};
